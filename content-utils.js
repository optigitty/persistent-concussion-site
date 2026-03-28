export function normalizeText(text) {
  return stripCourseAppendix(
    text
      .replace(/\r/g, "\n")
      .replace(/\\u000b/g, "\u000b")
      .replace(/\\u0010/g, "\u0010")
      .replace(/\\u0011/g, "\u0011")
      .replace(/\\u0012/g, "\u0012")
      .replace(/\\u001c/g, "\u001c")
      .replace(/\\u003d/g, "=")
      .replace(/\\u003c/g, "<")
      .replace(/\\u003e/g, ">")
      .replace(/\\u0026/g, "&")
      .replace(/\\u0027/g, "'")
      .replace(/\\u2028/g, "\n")
      .replace(/\u2028/g, "\n")
      .replace(/\u000b/g, "\n")
      .replace(/[ \t]{2,}(?=(?:[A-Z0-9*“"'(]))/g, "\n")
      .replace(/([^\n])\s+(?=\*?\s*https?:\/\/)/g, "$1\n")
      .replace(/([^\n])\s+(?=(?:\d+[.)]\s+[A-Z]))/g, "$1\n")
      .replace(
        /([^\n])\s+(?=(?:Summary for the Gym|When to Call a Pro|When to See a Doctor Immediately|Red Flags|Quick Take|Key Takeaways?|Sleep Facts\b|Improving Your Sleep\b|Sleep is Important!?))/g,
        "$1\n",
      )
      .replace(/\n[ \t]+/g, "\n")
      .replace(/[ \t\f\v]+/g, " ")
      .replace(/\n{3,}/g, "\n\n"),
  ).trim();
}

export function getSummary(text) {
  return getSentences(text).slice(0, 2).join(" ");
}

export function getExcerpt(text) {
  return getSentences(text).slice(0, 1).join(" ");
}

export function getSentences(text) {
  return (
    text
      .replace(/\s+/g, " ")
      .match(/[^.!?]+[.!?]+["')\]]*|[^.!?]+$/g)
      ?.map((entry) => entry.trim())
      .filter(Boolean) ?? []
  );
}

export function estimateReadTime(text) {
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 250));
}

export function createBlocks(text) {
  const normalized = normalizeText(text);
  const { body, references } = splitReferencesSection(normalized);
  const blocks = parseRichBlocks(body);

  if (references) {
    blocks.push(references);
  }

  return blocks;
}

export function createBodyBlocks(text) {
  return parseRichBlocks(text);
}

export function parseArticleContent(text) {
  const normalized = normalizeText(text);
  const { main, deepDive } = splitDeepDiveSection(normalized);
  const { body, references } = splitReferencesSection(main);
  const deepDiveSplit = deepDive ? splitReferencesSection(deepDive) : { body: "", references: null };

  return {
    sections: createArticleSections(body),
    deepDiveSections: deepDiveSplit.body
      ? [{ title: "Deep Dive", items: createBodyBlocks(deepDiveSplit.body) }]
      : [],
    references: mergeReferences(references, deepDiveSplit.references),
  };
}

export function renderSections(sections, container, title) {
  container.innerHTML = "";

  sections.forEach((section) => {
    const card = document.createElement("section");
    card.className = "section-card";

    const header = document.createElement("div");
    header.className = "section-card__header";
    const heading = document.createElement("h3");
    heading.className = "section-card__title";
    heading.textContent = section.title;
    header.appendChild(heading);
    card.appendChild(header);

    const body = document.createElement("div");
    body.className = "section-card__body";
    section.items.forEach((item) => renderSectionItem(item, body, title));
    card.appendChild(body);
    container.appendChild(card);
  });
}

export function renderReferences(references, container) {
  if (!references?.items?.length) {
    return;
  }

  const referencesBlock = document.createElement("section");
  referencesBlock.className = "references-block";

  const hr = document.createElement("hr");
  referencesBlock.appendChild(hr);

  const heading = document.createElement("h4");
  heading.textContent = references.heading;
  referencesBlock.appendChild(heading);

  const list = document.createElement("ul");
  list.className = "references-list";

  references.items.forEach((item) => {
    const li = document.createElement("li");

    if (item.text) {
      li.append(document.createTextNode(item.text));
    }

    if (item.url) {
      if (item.text) {
        li.append(document.createTextNode(" "));
      }

      const link = document.createElement("a");
      link.href = item.url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = item.url;
      li.append(link);
    }

    list.appendChild(li);
  });

  referencesBlock.appendChild(list);
  container.appendChild(referencesBlock);
}

export function renderBlocks(blocks, container, title) {
  container.innerHTML = "";

  for (const block of blocks) {
    const card = document.createElement("section");
    card.className = "content-card";

    if (block.type === "heading") {
      const heading = document.createElement("h4");
      heading.className = "content-card__subheading";
      heading.textContent = block.value;
      card.appendChild(heading);
      container.appendChild(card);
      continue;
    }

    if (block.type === "image") {
      const image = document.createElement("img");
      image.src = block.value;
      image.alt = title;
      image.loading = "lazy";
      card.appendChild(image);
      container.appendChild(card);
      continue;
    }

    if (block.type === "links") {
      const stack = document.createElement("div");
      stack.className = "link-stack";
      block.value.forEach(({ label, url }) => {
        const link = document.createElement("a");
        link.className = "link-chip";
        link.href = url;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.textContent = label;
        stack.appendChild(link);
      });
      card.appendChild(stack);
      container.appendChild(card);
      continue;
    }

    if (block.type === "list") {
      const list = document.createElement("ul");
      block.value.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
      });
      card.appendChild(list);
      container.appendChild(card);
      continue;
    }

    if (block.type === "ordered-list" || block.type === "unordered-list") {
      const list = document.createElement(block.type === "ordered-list" ? "ol" : "ul");
      block.value.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = linkify(item);
        list.appendChild(li);
      });
      card.appendChild(list);
      container.appendChild(card);
      continue;
    }

    if (block.type === "table") {
      const wrap = document.createElement("div");
      wrap.className = "table-wrap";
      const table = document.createElement("table");
      table.className = "data-table";
      const thead = document.createElement("thead");
      const headerRow = document.createElement("tr");
      block.headers.forEach((header) => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);

      const tbody = document.createElement("tbody");
      block.rows.forEach((row) => {
        const tr = document.createElement("tr");
        row.forEach((cell) => {
          const td = document.createElement("td");
          td.innerHTML = linkify(cell);
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      wrap.appendChild(table);
      card.appendChild(wrap);
      container.appendChild(card);
      continue;
    }

    if (block.type === "references") {
      renderReferences(block, container);
      continue;
    }

    block.value.forEach((paragraph) => {
      const p = document.createElement("p");
      p.innerHTML = linkify(paragraph);
      card.appendChild(p);
    });
    container.appendChild(card);
  }
}

function stripCourseAppendix(text) {
  return text
    .replace(/\n+helpful vids[\s\S]*$/i, "")
    .replace(/\n+disclaimer\s*\n+Disclaimer:[\s\S]*$/i, "");
}

function parseRichBlocks(text) {
  const prepared = prepareBodyText(normalizeText(text));
  const segments = splitControlTables(prepared);
  const blocks = [];

  for (const segment of segments) {
    if (segment.type === "table") {
      blocks.push(segment);
      continue;
    }

    blocks.push(...parseTextSegment(segment.value));
  }

  return mergeAdjacentParagraphBlocks(blocks);
}

function parseTextSegment(segment) {
  const lines = tokenizeLines(segment);
  const blocks = [];

  for (let index = 0; index < lines.length; ) {
    const line = lines[index];

    const numberedList = consumeNumberedList(lines, index);
    if (numberedList) {
      blocks.push(numberedList.block);
      index = numberedList.nextIndex;
      continue;
    }

    const bulletList = consumeBulletList(lines, index);
    if (bulletList) {
      blocks.push(bulletList.block);
      index = bulletList.nextIndex;
      continue;
    }

    const labelList = consumeLabelList(lines, index);
    if (labelList) {
      blocks.push(labelList.block);
      index = labelList.nextIndex;
      continue;
    }

    const looseList = consumeLooseList(lines, index);
    if (looseList) {
      blocks.push(looseList.block);
      index = looseList.nextIndex;
      continue;
    }

    if (isImageLine(line)) {
      blocks.push({ type: "image", value: cleanUrl(stripListMarker(line)) });
      index += 1;
      continue;
    }

    if (isStandaloneUrlLine(line)) {
      const url = cleanUrl(stripListMarker(line));
      blocks.push({
        type: "links",
        value: [{ label: getLinkLabel(url), url }],
      });
      index += 1;
      continue;
    }

    if (isSectionHeadingLine(line)) {
      blocks.push({ type: "heading", value: cleanHeading(normalizeHeading(line)) });
      index += 1;
      continue;
    }

    const paragraph = consumeParagraphBlock(lines, index);
    blocks.push(paragraph.block);
    index = paragraph.nextIndex;
  }

  return blocks;
}

function tokenizeLines(text) {
  return text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .flatMap(expandImplicitLine)
    .map((line) => line.trim())
    .filter(Boolean);
}

function expandImplicitLine(line) {
  let working = line
    .replace(/\s*\*\s*(https?:\/\/[^\s<]+)/g, "\n$1")
    .replace(
      /(?<!\d)([.!?])\s+(?=(?:[A-Z][A-Za-z0-9“"'’()\/&+\-]+(?:\s+[A-Z][A-Za-z0-9“"'’()\/&+\-]+)+:))/g,
      "$1\n",
    )
    .replace(
      /(:)\s+(?=(?:[A-Z][A-Za-z0-9“"'’()\/&+\- ]{1,42}:))/g,
      "$1\n",
    );

  const expanded = [];
  const fragments = working.split(/\n+/).map((entry) => entry.trim()).filter(Boolean);

  for (const fragment of fragments) {
    const headingSplit = splitHeadingFromBody(fragment);
    if (!headingSplit) {
      expanded.push(...splitImplicitListLine(fragment));
      continue;
    }

    expanded.push(headingSplit.heading);
    if (headingSplit.body) {
      expanded.push(...splitImplicitListLine(headingSplit.body));
    }
  }

  return expanded;
}

function splitHeadingFromBody(line) {
  const numbered = line.match(/^(\d+[.)])\s+(.+)$/);
  if (numbered) {
    const extracted = extractNumberedSectionHeading(numbered[2]);
    if (extracted?.body) {
      return {
        heading: `${numbered[1]} ${extracted.title}`,
        body: extracted.body,
      };
    }
  }

  for (const title of EXPLICIT_SECTION_TITLES) {
    if (line.startsWith(title) && line.length > title.length + 2) {
      return {
        heading: title,
        body: line.slice(title.length).replace(/^:\s*/, "").trim(),
      };
    }
  }

  const excitedHeading = line.match(
    /^([A-Z][A-Za-z0-9“"'’()\/&+\- ]{2,60}[!?])\s+(?=[A-Z][^:]{1,42}:)/,
  );
  if (excitedHeading) {
    return {
      heading: excitedHeading[1].trim(),
      body: line.slice(excitedHeading[1].length).trim(),
    };
  }

  return null;
}

function extractNumberedSectionHeading(text) {
  const tokens = text.split(/\s+/);
  const titleTokens = [];

  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];
    const clean = cleanToken(token);
    const next = tokens[index + 1] ?? "";

    if (
      index >= 2 &&
      NUMBERED_HEADING_BREAK_WORDS.has(clean) &&
      /^[a-z]/.test(next.replace(/^[^A-Za-z]+/, ""))
    ) {
      return {
        title: titleTokens.join(" ").trim(),
        body: tokens.slice(index).join(" ").trim(),
      };
    }

    titleTokens.push(token);
  }

  return null;
}

function splitImplicitListLine(line) {
  if (
    line.length < 120 ||
    getSentences(line).length > 2 ||
    /:\s/.test(line) ||
    /^\d+[.)]\s+/.test(line)
  ) {
    return [line];
  }

  const markerPattern = new RegExp(
    `\\s+(?=(?:${IMPLICIT_LIST_START_WORDS.map(escapeRegExp).join("|")})\\b)`,
    "g",
  );
  const parts = line
    .replace(markerPattern, "\n")
    .split(/\n+/)
    .map((entry) => entry.trim())
    .filter(Boolean);

  return parts.length >= 2 ? parts : [line];
}

function mergeAdjacentParagraphBlocks(blocks) {
  const merged = [];

  for (const block of blocks) {
    if (!block) {
      continue;
    }

    const previous = merged.at(-1);
    if (block.type === "paragraphs" && previous?.type === "paragraphs") {
      previous.value.push(...block.value);
      continue;
    }

    merged.push(block);
  }

  return merged;
}

function consumeNumberedList(lines, startIndex) {
  if (!/^\d+[.)]\s+/.test(lines[startIndex])) {
    return null;
  }

  const items = [];
  let index = startIndex;

  while (index < lines.length && /^\d+[.)]\s+/.test(lines[index])) {
    let item = lines[index].replace(/^\d+[.)]\s+/, "").trim();
    index += 1;

    while (
      index < lines.length &&
      !startsNewBlock(lines[index]) &&
      !/^\d+[.)]\s+/.test(lines[index])
    ) {
      item = `${item} ${lines[index]}`.trim();
      index += 1;
    }

    items.push(item);
  }

  return items.length >= 2 && items.every((item) => item.length <= 180)
    ? {
        block: { type: "ordered-list", value: items },
        nextIndex: index,
      }
    : null;
}

function consumeBulletList(lines, startIndex) {
  if (!/^[*-]\s+/.test(lines[startIndex]) || isImageLine(lines[startIndex])) {
    return null;
  }

  const items = [];
  let index = startIndex;

  while (index < lines.length && /^[*-]\s+/.test(lines[index]) && !isImageLine(lines[index])) {
    items.push(lines[index].replace(/^[*-]\s+/, "").trim());
    index += 1;
  }

  return items.length >= 2
    ? {
        block: { type: "unordered-list", value: items },
        nextIndex: index,
      }
    : null;
}

function consumeLabelList(lines, startIndex) {
  if (!hasLabelPattern(lines[startIndex])) {
    return null;
  }

  const items = [];
  let index = startIndex;

  while (index < lines.length && hasLabelPattern(lines[index]) && !startsNewBlock(lines[index], true)) {
    items.push(lines[index]);
    index += 1;
  }

  return items.length >= 2
    ? {
        block: { type: "unordered-list", value: items },
        nextIndex: index,
      }
    : null;
}

function consumeLooseList(lines, startIndex) {
  if (!isLooseListLine(lines[startIndex])) {
    return null;
  }

  const items = [];
  let index = startIndex;

  while (index < lines.length && isLooseListLine(lines[index])) {
    items.push(lines[index]);
    index += 1;
  }

  return items.length >= 3
    ? {
        block: { type: "unordered-list", value: items },
        nextIndex: index,
      }
    : null;
}

function consumeParagraphBlock(lines, startIndex) {
  const paragraphs = [];
  let index = startIndex;

  while (index < lines.length && !startsNewBlock(lines[index])) {
    paragraphs.push(lines[index]);
    index += 1;
  }

  return {
    block: {
      type: "paragraphs",
      value: paragraphs.length ? paragraphs : [lines[startIndex]],
    },
    nextIndex: paragraphs.length ? index : startIndex + 1,
  };
}

function startsNewBlock(line, allowLabel = false) {
  if (isImageLine(line) || isStandaloneUrlLine(line) || isSectionHeadingLine(line)) {
    return true;
  }

  if (!allowLabel && hasLabelPattern(line)) {
    return true;
  }

  return /^[*-]\s+/.test(line);
}

function isSectionHeadingLine(line) {
  if (isStandaloneUrlLine(line) || isImageLine(line)) {
    return false;
  }

  if (/^\d+[.)]\s+/.test(line)) {
    return true;
  }

  if (hasLabelPattern(line)) {
    return false;
  }

  if (EXPLICIT_SECTION_TITLES.includes(cleanHeading(line))) {
    return true;
  }

  return looksLikeStandaloneHeading(line);
}

function looksLikeStandaloneHeading(line) {
  if (!line || line.length > 72 || /[.:]/.test(line) || /https?:\/\//.test(line)) {
    return false;
  }

  if (/[!?]$/.test(line)) {
    return true;
  }

  const words = line.split(/\s+/);
  if (words.length < 2 || words.length > 8) {
    return false;
  }

  return words.every((word) => /^[A-Z0-9“"'(][A-Za-z0-9“"'’()\/&+\-]*$/.test(word));
}

function hasLabelPattern(line) {
  return /^[A-Z0-9“"'(][^:]{1,48}:\s+\S+/.test(line);
}

function isLooseListLine(line) {
  if (
    !line ||
    startsNewBlock(line, true) ||
    line.length > 165 ||
    /https?:\/\//.test(line) ||
    /:\s/.test(line)
  ) {
    return false;
  }

  if (/^[a-z]/.test(line)) {
    return false;
  }

  return getSentences(line).length <= 2;
}

function isStandaloneUrlLine(line) {
  return /^https?:\/\/[^\s<]+$/i.test(stripListMarker(line));
}

function isImageLine(line) {
  return isImageUrl(stripListMarker(line));
}

function stripListMarker(line) {
  return line.replace(/^[*-]\s*/, "").trim();
}

function normalizeHeading(line) {
  return line.replace(/^\s+|\s+$/g, "");
}

function splitParagraphs(block) {
  if (block.length <= 520) {
    return [block];
  }

  const sentences = getSentences(block);
  const chunks = [];
  let current = "";

  for (const sentence of sentences) {
    const next = current ? `${current} ${sentence}` : sentence;
    if (next.length > 420 && current) {
      chunks.push(current);
      current = sentence;
    } else {
      current = next;
    }
  }

  if (current) {
    chunks.push(current);
  }

  return chunks;
}

function createArticleSections(text, defaultTitle = "Overview") {
  return groupBlocksIntoSections(parseRichBlocks(text), defaultTitle);
}

function parseSectionSegment(segment, defaultTitle) {
  const cleaned = stripIntroPrefix(segment).trim();
  if (!cleaned || /^\d+\.\s*$/.test(cleaned) || /^-\s*$/.test(cleaned)) {
    return null;
  }

  const explicitTitle = extractExplicitTitle(cleaned);
  if (explicitTitle) {
    const body = cleaned
      .replace(new RegExp(`^${escapeRegExp(explicitTitle)}\\s*:?\\s*`), "")
      .trim();
    const items = createBodyBlocks(body);
    return items.length ? { title: explicitTitle, items } : null;
  }

  const extracted = extractInlineHeading(cleaned);
  const title = cleanHeading(extracted?.title ?? defaultTitle);
  const body = extracted?.body ?? cleaned;
  const items = createBodyBlocks(body);

  return items.length ? { title, items } : null;
}

function prepareSectionText(text) {
  return stripIntroPrefix(text)
    .replace(/\u000b/g, "\n")
    .replace(/\u0011(?=\S)/g, "\u0011\n\n")
    .replace(/\s*\*\s*(https?:\/\/[^\s<]+)/g, "\n\n$1\n\n")
    .replace(/([^\n])\s+(?=([1-9]\.\s+[A-Z]))/g, "$1\n\n")
    .replace(/([^\n])\s+(?=(-\s+[A-Z]))/g, "$1\n\n")
    .replace(
      /([.!?\]\u0011])\s+(?=(Summary for the Gym|When to Call a Pro|When to See a Doctor Immediately|Red Flags\b|Quick Take\b|Key Takeaways?\b))/g,
      "$1\n\n",
    )
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function prepareBodyText(text) {
  return stripIntroPrefix(text)
    .replace(/\u000b/g, "\n")
    .replace(/\u0011(?=\S)/g, "\u0011\n")
    .replace(/\s*\*\s*(https?:\/\/[^\s<]+)/g, "\n$1\n")
    .replace(/([^\n])\s+(?=\*?\s*https?:\/\/)/g, "$1\n")
    .replace(
      /(?<!\d)([.!?])\s+(?=(?:[A-Z][A-Za-z0-9“"'’()[\]\/&+\-]+(?:\s+[A-Z][A-Za-z0-9“"'’()[\]\/&+\-]+)+:))/g,
      "$1\n",
    )
    .replace(/(\.\.\.)\s+(?=[A-Z])/g, "$1\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function stripIntroPrefix(text) {
  return text
    .replace(/^(Simple Explanation|SIMPLE EXPLANATION)\s*:\s*/i, "")
    .replace(/^HitSmart\s*:\s*/i, "")
    .trim();
}

function stripLeadingTitle(text) {
  const extracted = extractInlineHeading(text);
  if (!extracted) {
    return text;
  }

  if (/^\d+[.)]/.test(extracted.title) || /^[-–—]/.test(extracted.title)) {
    return text;
  }

  return extracted.body;
}

function splitDeepDiveSection(text) {
  const match = text.match(/(?:^|\s|[-–—])(?:Deep Dive|DEEP DIVE)\s*:/i);
  if (!match || match.index === undefined) {
    return { main: text.trim(), deepDive: "" };
  }

  const main = text.slice(0, match.index).trim();
  const deepDive = text.slice(match.index + match[0].length).trim();
  return { main, deepDive };
}

function expandBlock(block) {
  const tableParts = splitControlTables(block);
  if (tableParts.length > 1) {
    return tableParts.flatMap((part) => (part.type === "text" ? expandBlock(part.value) : [part]));
  }

  const mixedMediaBlocks = splitInlineImages(block);
  if (mixedMediaBlocks.length > 1) {
    return mixedMediaBlocks.flatMap((part) =>
      part.type === "image" ? [part] : expandBlock(part.value),
    );
  }

  if (isImageUrl(block)) {
    return [{ type: "image", value: block }];
  }

  const splitLinks = splitStandaloneLinks(block);
  if (splitLinks.length > 1 || splitLinks[0]?.type === "links") {
    return splitLinks.flatMap((part) => (part.type === "text" ? expandBlock(part.value) : [part]));
  }

  const linkPairs = extractLabeledLinks(block);
  if (linkPairs.length > 1) {
    return [{ type: "links", value: linkPairs }];
  }

  const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
  const numberedItems = lines
    .filter((line) => /^\d+[.)]\s+/.test(line))
    .map((line) => line.replace(/^\d+[.)]\s+/, "").trim());
  if (numberedItems.length >= 2 && numberedItems.length === lines.length) {
    return [{ type: "ordered-list", value: numberedItems }];
  }

  const listItems = lines
    .filter((line) => /^[-*]\s+/.test(line))
    .map((line) => line.replace(/^[-*]\s+/, "").trim());
  if (listItems.length >= 2 && listItems.length === lines.length) {
    return [{ type: "unordered-list", value: listItems }];
  }

  if (looksLikeHeading(block)) {
    return [{ type: "heading", value: block.replace(/[:\s]+$/, "") }];
  }

  return [{ type: "paragraphs", value: splitParagraphs(block) }];
}

function groupBlocksIntoSections(blocks, defaultTitle = "Overview") {
  const sections = [];
  let current = createSection(defaultTitle);

  for (const block of blocks) {
    if (block.type === "heading") {
      if (current.items.length || current.title !== defaultTitle) {
        sections.push(current);
      }
      current = createSection(cleanHeading(block.value));
      continue;
    }

    if (block.type === "paragraphs" && block.value.length) {
      const firstParagraph = block.value[0];
      const extracted = extractInlineHeading(firstParagraph);
      if (extracted && !current.items.length && current.title === defaultTitle) {
        current.title = extracted.title;

        const remaining = [extracted.body, ...block.value.slice(1)].filter(Boolean);
        if (remaining.length) {
          current.items.push({ type: "paragraphs", value: remaining });
        }
        continue;
      }
    }

    current.items.push(block);
  }

  if (current.items.length || current.title !== defaultTitle) {
    sections.push(current);
  }

  return sections.filter((section) => section.items.length);
}

function splitInlineImages(block) {
  const matches = [...block.matchAll(/(?:^|\s)\*?\s*(https?:\/\/\S+\.(?:png|jpe?g|gif|webp)(?:\?\S*)?)/gi)];
  if (matches.length === 0) {
    return [{ type: "text", value: block }];
  }

  const parts = [];
  let cursor = 0;

  for (const match of matches) {
    const matchIndex = match.index ?? 0;
    const url = match[1];
    const urlIndex = block.indexOf(url, matchIndex);
    const before = cleanSegment(block.slice(cursor, matchIndex));
    if (before) {
      parts.push({ type: "text", value: before });
    }

    parts.push({ type: "image", value: url });
    cursor = urlIndex + url.length;
  }

  const after = cleanSegment(block.slice(cursor));
  if (after) {
    parts.push({ type: "text", value: after });
  }

  return parts;
}

function splitStandaloneLinks(block) {
  const matches = [...block.matchAll(/https?:\/\/[^\s<]+/g)];
  if (matches.length === 0) {
    return [{ type: "text", value: block }];
  }

  const parts = [];
  let cursor = 0;

  for (const match of matches) {
    const rawUrl = match[0];
    const url = cleanUrl(rawUrl);
    const matchIndex = match.index ?? 0;
    const before = cleanSegment(block.slice(cursor, matchIndex).replace(/\*+\s*$/, ""));
    if (before) {
      parts.push({ type: "text", value: before });
    }

    if (url) {
      parts.push({
        type: "links",
        value: [{ label: getLinkLabel(url), url }],
      });
    }

    cursor = matchIndex + rawUrl.length;
  }

  const after = cleanSegment(block.slice(cursor));
  if (after) {
    parts.push({ type: "text", value: after });
  }

  return parts.length ? parts : [{ type: "text", value: block }];
}

function cleanSegment(value) {
  return value.replace(/^[*\s]+|[*\s]+$/g, "").trim();
}

function splitControlTables(block) {
  const parts = [];
  let cursor = 0;

  while (true) {
    const start = block.indexOf("\u0010", cursor);
    if (start === -1) {
      const tail = cleanControlText(block.slice(cursor));
      if (tail) {
        parts.push({ type: "text", value: tail });
      }
      break;
    }

    const before = cleanControlText(block.slice(cursor, start));
    if (before) {
      parts.push({ type: "text", value: before });
    }

    const end = block.indexOf("\u0011", start);
    if (end === -1) {
      const tail = cleanControlText(block.slice(start));
      if (tail) {
        parts.push({ type: "text", value: tail });
      }
      break;
    }

    const table = parseControlTable(block.slice(start, end + 1));
    if (table) {
      parts.push(table);
    }
    cursor = end + 1;
  }

  return parts.length ? parts : [{ type: "text", value: block }];
}

function parseControlTable(segment) {
  const cleaned = segment.replace(/[\u0010\u0011]/g, "");
  const rows = cleaned
    .split("\u0012")
    .map((row) => row.trim())
    .filter(Boolean)
    .map((row) => row.split("\u001c").map((cell) => cleanControlText(cell)).filter(Boolean));

  if (rows.length < 2) {
    return null;
  }

  const [headers, ...bodyRows] = rows;
  const normalizedRows = bodyRows
    .map((row) => {
      if (row.length < headers.length) {
        return [...row, ...Array(headers.length - row.length).fill("")];
      }
      return row.slice(0, headers.length);
    })
    .filter((row) => row.some(Boolean));

  if (!headers.length || !normalizedRows.length) {
    return null;
  }

  return {
    type: "table",
    headers,
    rows: normalizedRows,
  };
}

function cleanControlText(value) {
  return value
    .replace(/[\u0010\u0011]/g, " ")
    .replace(/\u001c/g, " ")
    .replace(/\u0012/g, "\n")
    .replace(/[^\S\n]+/g, " ")
    .trim();
}

function looksLikeHeading(block) {
  if (block.length > 84) {
    return false;
  }

  if (/^https?:\/\//.test(block)) {
    return false;
  }

  return (
    /:$/.test(block) ||
    /^[A-Z0-9][A-Za-z0-9“"'’()\-,/&\s]{3,}$/.test(block) ||
    /^(Simple Explanation|SIMPLE EXPLANATION|Deep Dive|Works cited)/.test(block)
  );
}

function extractLabeledLinks(block) {
  const matches = [...block.matchAll(/([^:\n]+):\s*(https?:\/\/\S+)/g)];
  return matches.map((match) => ({
    label: match[1].trim(),
    url: cleanUrl(match[2].trim()),
  }));
}

function isImageUrl(value) {
  return /^https?:\/\/\S+\.(png|jpe?g|gif|webp)(\?\S*)?$/i.test(value);
}

function linkify(text) {
  const matches = [...text.matchAll(/https?:\/\/[^\s<]+/g)];
  if (matches.length === 0) {
    return applyInlineEmphasis(escapeHtml(text));
  }

  let html = "";
  let cursor = 0;

  matches.forEach((match) => {
    const rawUrl = match[0];
    const url = cleanUrl(rawUrl);
    const index = match.index ?? 0;
    html += applyInlineEmphasis(escapeHtml(text.slice(cursor, index)));
    html += `<a href="${url}" target="_blank" rel="noreferrer">${escapeHtml(getLinkLabel(url))}</a>`;
    cursor = index + rawUrl.length;
  });

  html += applyInlineEmphasis(escapeHtml(text.slice(cursor)));
  return html;
}

function splitReferencesSection(text) {
  const referenceSection = findReferenceSection(text);
  if (!referenceSection) {
    return { body: text, references: null };
  }

  const { heading, index, offset = 0 } = referenceSection;
  const body = text.slice(0, index).trim();
  const refsText = text.slice(index + offset).trim();
  const items = extractReferenceItems(refsText);

  return {
    body,
    references: items.length
      ? {
          type: "references",
          heading,
          items,
        }
      : null,
  };
}

function findReferenceSection(text) {
  const explicitMatches = [
    ...text.matchAll(/(?:^|\n{1,2})(Works cited|Sources)\s*:?\s*(?=\n|$)/gim),
  ];
  const explicit = explicitMatches.at(-1);
  if (explicit?.index !== undefined) {
    const leading = explicit[0].match(/^\s*/)?.[0].length ?? 0;
    return {
      heading: explicit[1],
      index: explicit.index + leading,
      offset: explicit[0].trim().length,
    };
  }

  const tailStart = Math.max(0, text.length - 9000);
  const tail = text.slice(tailStart);
  const urlMatches = tail.match(/https?:\/\/[^\s<]+/g) ?? [];

  if (urlMatches.length < 4) {
    return null;
  }

  const citationMatch = tail.match(
    /(^|\s)(\d{1,3}[.)]\s+[\s\S]{12,240}?accessed [A-Z][a-z]+ \d{1,2}, \d{4},\s*https?:\/\/[^\s<]+)/i,
  );
  if (citationMatch?.index !== undefined) {
    const start = tailStart + citationMatch.index + citationMatch[1].length;
    return { heading: "Works cited", index: start, offset: 0 };
  }

  const accessedMatch = tail.match(
    /(^|\s)([\s\S]{12,240}?accessed [A-Z][a-z]+ \d{1,2}, \d{4},\s*https?:\/\/[^\s<]+)/i,
  );
  if (accessedMatch?.index !== undefined) {
    const start = tailStart + accessedMatch.index + accessedMatch[1].length;
    return { heading: "Works cited", index: start, offset: 0 };
  }

  return null;
}

function extractReferenceItems(text) {
  const lineItems = text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => parseReferenceLine(line))
    .filter((item) => item && (item.text || item.url));

  if (lineItems.length >= 2) {
    return lineItems;
  }

  const numberedItems = extractNumberedReferenceItems(text);
  if (numberedItems.length >= 2) {
    return numberedItems;
  }

  const urlItems = extractUrlReferenceItems(text);
  if (urlItems.length >= 2) {
    return urlItems;
  }

  const sentenceItems = text
    .replace(/\s+/g, " ")
    .split(/(?<=\.)\s+(?=[A-Z0-9])/)
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => parseReferenceLine(entry))
    .filter((item) => item && (item.text || item.url));

  if (sentenceItems.length >= 2) {
    return sentenceItems;
  }

  if (urlItems.length) {
    return urlItems;
  }

  return text
    .replace(/\s+/g, " ")
    .split(/(?<=\.)\s+(?=[A-Z0-9])/)
    .map((entry) => entry.replace(/^\s*\d+[.)]\s*/, "").trim())
    .filter(Boolean)
    .map((entry) => ({ text: entry, url: "" }));
}

function parseReferenceLine(line) {
  const cleaned = line.replace(/^\s*\d+[.)]\s*/, "").trim();
  if (!cleaned) {
    return null;
  }

  const urlMatch = cleaned.match(/(https?:\/\/[^\s<]+)/);
  if (!urlMatch) {
    return {
      text: cleaned.replace(/[-,:\s]+$/, "").trim(),
      url: "",
    };
  }

  const url = cleanUrl(urlMatch[1]);
  const textOnly = cleaned
    .replace(urlMatch[0], "")
    .replace(/[-,:\s]+$/, "")
    .trim();

  return {
    text: textOnly,
    url,
  };
}

function extractNumberedReferenceItems(text) {
  const normalized = text.replace(/\s+/g, " ").trim();
  const matches = [
    ...normalized.matchAll(/(?:^|\s)(\d{1,3}[.)]\s+[\s\S]*?)(?=(?:\s+\d{1,3}[.)]\s+)|$)/g),
  ];

  return matches
    .map((match) => parseReferenceLine(match[1].trim()))
    .filter((item) => item && (item.text || item.url));
}

function extractUrlReferenceItems(text) {
  const urlRegex = /https?:\/\/[^\s<]+/g;
  const items = [];
  let cursor = 0;
  let match;

  while ((match = urlRegex.exec(text)) !== null) {
    const rawUrl = match[0];
    const url = cleanUrl(rawUrl);
    const label = text
      .slice(cursor, match.index)
      .replace(/^\s*\d+[.)]\s*/, "")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/[-,:\s]+$/, "");

    items.push({
      text: label,
      url,
    });

    cursor = match.index + rawUrl.length;
  }

  return items.filter((item) => item.url);
}

function mergeReferences(primary, secondary) {
  const rawItems = [...(primary?.items ?? []), ...(secondary?.items ?? [])].filter(
    (item) => item?.text || item?.url,
  );

  const linkedItems = rawItems.filter((item) => item.url);
  const items = dedupeReferenceItems(linkedItems.length >= 2 ? linkedItems : rawItems);

  if (!items.length) {
    return null;
  }

  return {
    type: "references",
    heading: primary?.heading ?? secondary?.heading ?? "Sources",
    items,
  };
}

function dedupeReferenceItems(items) {
  const seen = new Set();

  return items.filter((item) => {
    const key = item.url || item.text;
    if (!key || seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderSectionItem(item, container, title) {
  if (item.type === "heading") {
    const heading = document.createElement("h4");
    heading.className = "section-card__subheading";
    heading.textContent = item.value;
    container.appendChild(heading);
    return;
  }

  if (item.type === "paragraphs") {
    item.value.forEach((paragraph) => {
      const p = document.createElement("p");
      p.innerHTML = linkify(paragraph);
      container.appendChild(p);
    });
    return;
  }

  if (item.type === "image") {
    const image = document.createElement("img");
    image.src = item.value;
    image.alt = title;
    image.loading = "lazy";
    image.className = "section-card__image";
    container.appendChild(image);
    return;
  }

  if (item.type === "links") {
    const stack = document.createElement("div");
    stack.className = "link-stack";
    item.value.forEach(({ label, url }) => {
      const link = document.createElement("a");
      link.className = "link-chip";
      link.href = url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = label || getLinkLabel(url);
      stack.appendChild(link);
    });
    container.appendChild(stack);
    return;
  }

  if (item.type === "ordered-list" || item.type === "unordered-list") {
    const list = document.createElement(item.type === "ordered-list" ? "ol" : "ul");
    list.className = "section-card__list";
    item.value.forEach((entry) => {
      const li = document.createElement("li");
      li.innerHTML = linkify(entry);
      list.appendChild(li);
    });
    container.appendChild(list);
    return;
  }

  if (item.type === "table") {
    const wrap = document.createElement("div");
    wrap.className = "table-wrap";
    const table = document.createElement("table");
    table.className = "data-table";
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    item.headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    item.rows.forEach((row) => {
      const tr = document.createElement("tr");
      row.forEach((cell) => {
        const td = document.createElement("td");
        td.innerHTML = linkify(cell);
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    wrap.appendChild(table);
    container.appendChild(wrap);
    return;
  }
}

function createSection(title) {
  return {
    title,
    items: [],
  };
}

function cleanHeading(value) {
  return value
    .replace(/^[-–—]\s*/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractInlineHeading(paragraph) {
  const working = paragraph
    .replace(/^(Simple Explanation|SIMPLE EXPLANATION)\s*:\s*/i, "")
    .replace(/^HitSmart\s*:\s*/i, "")
    .replace(/^[-–—]\s*/, "")
    .trim();

  const explicitTitle = extractExplicitTitle(working);
  if (explicitTitle) {
    return {
      title: explicitTitle,
      body: working
        .replace(new RegExp(`^${escapeRegExp(explicitTitle)}\\s*:?\\s*`), "")
        .trim(),
    };
  }

  const tokens = working.split(/\s+/);
  if (tokens.length < 5) {
    return null;
  }

  const titleTokens = [];
  const minTokens = 4;

  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];
    const next = tokens[index + 1];
    const nextNext = tokens[index + 2];

    if (
      index >= minTokens &&
      HARD_BREAK_WORDS.has(cleanToken(token))
    ) {
      break;
    }

    titleTokens.push(token);

    if (index + 1 >= minTokens) {
      if (!next) {
        break;
      }

      if (
        SECTION_BREAK_WORDS.has(cleanToken(next)) &&
        (
          !nextNext ||
          !/^[A-Z“"'(]/.test(nextNext) ||
          cleanToken(next) === cleanToken(nextNext)
        )
      ) {
        break;
      }
    }
  }

  if (titleTokens.length < minTokens) {
    return null;
  }

  const title = titleTokens.join(" ").trim();
  const body = tokens.slice(titleTokens.length).join(" ").trim();

  if (!title || !body || title.length > 110) {
    return null;
  }

  return { title, body };
}

function applyInlineEmphasis(html) {
  return html.replace(
    /^([A-Z][A-Za-z0-9“"'’()\/&+\- ]{1,60}:)\s/,
    "<strong>$1</strong> ",
  );
}

function cleanToken(token) {
  return token.replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9]+$/g, "");
}

function cleanUrl(url) {
  return url.replace(/[),.;:*]+$/, "");
}

function getLinkLabel(url) {
  try {
    const parsed = new URL(url);
    const lastSegment = decodeURIComponent(
      parsed.pathname
        .split("/")
        .filter(Boolean)
        .pop() ?? "",
    )
      .replace(/\.[a-z0-9]+$/i, "")
      .replace(/[._-]+/g, " ")
      .trim();

    if (lastSegment && lastSegment.length <= 64) {
      return lastSegment;
    }

    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return "Open source";
  }
}

function extractExplicitTitle(text) {
  const normalized = cleanHeading(text);
  return EXPLICIT_SECTION_TITLES.find((title) => normalized.startsWith(title)) ?? "";
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const SECTION_START_REGEX =
  /^\s*(?:[1-9]\.\s+|-\s+|Summary for the Gym\b|When to Call a Pro\b|When to See a Doctor Immediately\b|Red Flags\b|Quick Take\b|Key Takeaways?\b)/gm;

const EXPLICIT_SECTION_TITLES = [
  "Summary for the Gym",
  "When to Call a Pro",
  "When to See a Doctor Immediately",
  "Red Flags",
  "Quick Take",
  "Key Takeaway",
  "Key Takeaways",
];

const IMPLICIT_LIST_START_WORDS = [
  "Avoid",
  "Alcohol",
  "And",
  "Areas",
  "Bad",
  "Balanced",
  "Beverages",
  "Break",
  "But",
  "Choose",
  "Competition",
  "Devices",
  "Dim",
  "Distributed",
  "Don’t",
  "Don't",
  "Establish",
  "Free-range",
  "Get",
  "Good",
  "Heavy",
  "Hydration",
  "Light",
  "Maintaining",
  "Massed",
  "Maybe",
  "Minimum",
  "Non-Contact",
  "NPC",
  "Or",
  "Peaceful",
  "Physical",
  "Progressive",
  "Reading",
  "Reduce",
  "Remove",
  "Reserve",
  "Restore",
  "Saccades",
  "Secondary",
  "Sip",
  "Sitting",
  "Smooth",
  "Sport-Specific",
  "Support",
  "Switch",
  "Take",
  "Technical",
  "The Goal",
  "Track",
  "Turn",
  "Ultra-processed",
  "Unhealthy",
  "Use",
  "VOR",
  "Walking",
  "Wild",
  "Writing",
];

const NUMBERED_HEADING_BREAK_WORDS = new Set([
  "A",
  "After",
  "Bad",
  "Blood",
  "Because",
  "Doctors",
  "Establish",
  "For",
  "Get",
  "Heart",
  "If",
  "In",
  "It",
  "Light",
  "Massed",
  "Melatonin",
  "Once",
  "Our",
  "Recovery",
  "Secret",
  "Stop",
  "Take",
  "The",
  "This",
  "Usually",
  "Avoid",
  "When",
  "Why",
  "Within",
  "You",
  "Your",
]);

const HARD_BREAK_WORDS = new Set([
  "A",
  "After",
  "Alcohol",
  "Avoid",
  "Blood",
  "Doctors",
  "Get",
  "Heart",
  "Here",
  "If",
  "It",
  "Modern",
  "Once",
  "Research",
  "The",
  "This",
  "Those",
  "Within",
  "When",
]);

const SECTION_BREAK_WORDS = new Set([
  "A",
  "Alcohol",
  "After",
  "Active",
  "Aerobic",
  "Avoid",
  "Bad",
  "Because",
  "Blood",
  "Check",
  "Clinical",
  "Distributed",
  "Doctors",
  "Don",
  "Get",
  "Heart",
  "Here",
  "How",
  "If",
  "In",
  "It",
  "Keep",
  "Monitor",
  "Modern",
  "Moving",
  "Recovery",
  "Smooth",
  "Stop",
  "One",
  "Once",
  "Quickly",
  "Research",
  "The",
  "This",
  "Those",
  "Tracking",
  "Use",
  "Within",
  "When",
  "Why",
  "You",
  "Your",
]);
