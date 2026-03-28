import { lessonSourceMap } from "./lesson-mapping.js";

const lessonCache = new Map();
const sourceFixes = [
  [/text-white\/60\/60/g, "text-white/60"],
  [/bg-emerald-500\/100\/5/g, "bg-emerald-500/5"],
];

const iconGlyphs = {
  Activity: "*",
  AlertTriangle: "!",
  Apple: "*",
  ArrowLeft: "<",
  Ban: "x",
  BookOpen: "=",
  Brain: "*",
  Check: "+",
  ChevronDown: "v",
  ChevronUp: "^",
  Clock: "o",
  Droplets: "*",
  Dumbbell: "*",
  Eye: "*",
  EyeOff: "*",
  Footprints: "*",
  Frown: "*",
  Heart: "*",
  Lamp: "*",
  Leaf: "*",
  Mic: "*",
  Moon: "*",
  Pill: "*",
  RefreshCw: "*",
  Shield: "*",
  Smile: "*",
  Smartphone: "*",
  Sun: "*",
  TestTube: "*",
  Thermometer: "*",
  Timer: "*",
  TreePine: "*",
  Users: "*",
  UtensilsCrossed: "*",
  Wind: "*",
  Wine: "*",
  Zap: "*",
};

export async function renderLessonArticle(article, container) {
  const filename = lessonSourceMap[article.id];

  if (!filename) {
    return false;
  }

  try {
    const lesson = await getLesson(article.id, filename);

    if (!lesson.simpleHtml) {
      return false;
    }

    container.innerHTML = "";

    const root = document.createElement("div");
    root.className = "lesson-root";
    container.appendChild(root);

    const renderSimpleView = () => {
      root.innerHTML = "";
      root.appendChild(htmlToFragment(lesson.simpleHtml));

      if (lesson.deepSections.length) {
        root.appendChild(
          createActionButton("Read the Deep Dive", "lesson-button-shell lesson-button-shell--secondary", renderDeepView),
        );
      }
    };

    const renderDeepView = () => {
      root.innerHTML = "";
      root.appendChild(
        createActionButton("Back to Overview", "lesson-button-shell lesson-button-shell--ghost lesson-button-shell--small", renderSimpleView),
      );

      if (lesson.deepIntroHtml) {
        root.appendChild(htmlToFragment(lesson.deepIntroHtml));
      }

      lesson.deepSections.forEach((section) => {
        root.appendChild(createAccordionCard(section));
      });

      if (lesson.references.length) {
        root.appendChild(createReferencesBlock(lesson.references));
      }
    };

    renderSimpleView();
    return true;
  } catch (error) {
    console.warn(`Unable to render lesson for ${article.id}.`, error);
    return false;
  }
}

async function getLesson(articleId, filename) {
  if (lessonCache.has(articleId)) {
    return lessonCache.get(articleId);
  }

  const response = await fetch(`./lesson-components/${filename}`);

  if (!response.ok) {
    throw new Error(`Failed to load lesson source: ${filename}`);
  }

  let source = await response.text();
  sourceFixes.forEach(([pattern, replacement]) => {
    source = source.replace(pattern, replacement);
  });

  const lesson = parseLessonSource(source);
  lessonCache.set(articleId, lesson);
  return lesson;
}

function parseLessonSource(source) {
  const constants = extractConstants(source);
  const simpleFunction = source.includes("function SimpleView")
    ? "SimpleView"
    : extractDefaultExportName(source);
  const simpleJsx = extractFunctionReturnJsx(source, simpleFunction);
  const simpleHtml = sanitizeSimpleHtml(convertJsxToHtml(simpleJsx, constants));

  if (!source.includes("function DeepDiveView")) {
    return {
      simpleHtml,
      deepIntroHtml: "",
      deepSections: [],
      references: [],
    };
  }

  const deepReturnJsx = extractFunctionReturnJsx(source, "DeepDiveView");
  const deepCards = extractCardBlocks(deepReturnJsx);
  const deepIntroHtml = deepCards.length ? sanitizeDeepIntroHtml(convertJsxToHtml(deepCards[0], constants)) : "";
  const references = deepCards.length ? extractReferencesFromCard(deepCards[deepCards.length - 1], constants) : [];
  const deepSections = extractDeepSections(source, constants);

  return {
    simpleHtml,
    deepIntroHtml,
    deepSections,
    references,
  };
}

function extractConstants(source) {
  const scope = {};
  const beforeViews = source.split("function SimpleView")[0].split("export default function")[0];
  const constMatches = beforeViews.matchAll(/\bconst\s+([A-Z0-9_]+)\s*=\s*[\[{]/g);

  for (const match of constMatches) {
    const name = match[1];
    const assignIndex = beforeViews.indexOf("=", match.index);
    const start = beforeViews.slice(assignIndex).search(/[\[{]/);

    if (start === -1) {
      continue;
    }

    const valueStart = assignIndex + start;
    const openChar = beforeViews[valueStart];
    const closeChar = openChar === "{" ? "}" : "]";
    const valueEnd = findMatchingPair(beforeViews, valueStart, openChar, closeChar);
    const rawValue = beforeViews.slice(valueStart, valueEnd + 1);

    scope[name] = evaluateExpression(rawValue, scope);
  }

  return scope;
}

function extractDefaultExportName(source) {
  const match = source.match(/export\s+default\s+function\s+([A-Za-z0-9_]+)/);

  if (!match) {
    throw new Error("Unable to find default exported lesson function.");
  }

  return match[1];
}

function extractFunctionReturnJsx(source, functionName) {
  const matcher = new RegExp(
    `function\\s+${functionName}[\\s\\S]*?return\\s*\\(([\\s\\S]*?)\\n\\s*\\);`,
  );
  const match = source.match(matcher);

  if (!match) {
    throw new Error(`Unable to locate return block for ${functionName}.`);
  }

  return match[1].trim();
}

function extractCardBlocks(fragment) {
  return fragment.match(/<Card[\s\S]*?<\/Card>/g) ?? [];
}

function extractDeepSections(source, constants) {
  const deepViewIndex = source.indexOf("function DeepDiveView");

  if (deepViewIndex === -1) {
    return [];
  }

  const sectionsIndex = source.indexOf("const sections =", deepViewIndex);

  if (sectionsIndex === -1) {
    return [];
  }

  const arrayMatch = source
    .slice(sectionsIndex)
    .match(/const sections = \[([\s\S]*?)\n\s*\];\n\s*\n\s*return/);

  if (!arrayMatch) {
    return [];
  }

  const arrayBody = arrayMatch[1];
  const sections = [];
  let cursor = 0;

  while (cursor < arrayBody.length) {
    const objectStart = arrayBody.indexOf("{", cursor);

    if (objectStart === -1) {
      break;
    }

    const objectEnd = findBalancedIndex(arrayBody, objectStart, "{", "}");
    const block = arrayBody.slice(objectStart, objectEnd + 1);
    const keyMatch = block.match(/\bkey:\s*"([^"]+)"/);
    const titleMatch = block.match(/\btitle:\s*"([^"]+)"/);
    const contentIndex = block.indexOf("content:");

    if (!keyMatch || !titleMatch || contentIndex === -1) {
      cursor = objectEnd + 1;
      continue;
    }

    const contentStart = block.indexOf("(", contentIndex);
    const contentEnd = findBalancedIndex(block, contentStart, "(", ")");
    const contentJsx = block.slice(contentStart + 1, contentEnd).trim();

    sections.push({
      key: keyMatch[1],
      title: titleMatch[1],
      html: convertJsxToHtml(contentJsx, constants),
    });

    cursor = objectEnd + 1;
  }

  return sections;
}

function extractReferencesFromCard(cardJsx, constants) {
  const html = convertJsxToHtml(cardJsx, constants);
  return Array.from(html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g))
    .map((match) => stripTags(match[1]))
    .map((text) => text.trim())
    .filter(Boolean)
    .filter((text) => !text.startsWith("Disclaimer:"));
}

function convertJsxToHtml(jsx, scope) {
  let output = jsx
    .replace(/\s+onClick=\{[^}]*\}/g, "")
    .replace(/\s+variant="[^"]*"/g, "")
    .replace(/\s+size="[^"]*"/g, "");

  output = replaceExpressions(output, scope);
  output = output
    .replace(/<([A-Z][A-Za-z0-9]*)\b([^>]*)\/>/g, (_, tag, attrs) => convertSelfClosingComponent(tag, attrs))
    .replace(/<Card\b([^>]*)>/g, "<section$1>")
    .replace(/<\/Card>/g, "</section>")
    .replace(/<Button\b([^>]*)>/g, "<button$1>")
    .replace(/<\/Button>/g, "</button>")
    .replace(/\bclassName=/g, "class=")
    .replace(/\s+(?:data-testid|key)="[^"]*"/g, "")
    .replace(/\s+loading="lazy"/g, "")
    .replace(/\s+variant="[^"]*"/g, "")
    .replace(/\s+size="[^"]*"/g, "");

  return output.trim();
}

function replaceExpressions(input, scope) {
  let output = "";

  for (let index = 0; index < input.length; index += 1) {
    const char = input[index];

    if (char !== "{") {
      output += char;
      continue;
    }

    const end = findMatchingPair(input, index, "{", "}");
    const expression = input.slice(index + 1, end).trim();
    const attrContext = isAttributeExpression(input, index);
    output += renderExpression(expression, scope, attrContext);
    index = end;
  }

  return output;
}

function renderExpression(expression, scope, attrContext) {
  if (!expression || expression.startsWith("/*")) {
    return "";
  }

  if (looksLikeMapExpression(expression)) {
    return renderMapExpression(expression, scope);
  }

  try {
    const value = evaluateExpression(expression, scope);

    if (value == null || typeof value === "function") {
      return attrContext ? '""' : "";
    }

    const stringValue = String(value);
    return attrContext ? `"${escapeAttribute(stringValue)}"` : escapeHtml(stringValue);
  } catch {
    return attrContext ? '""' : "";
  }
}

function renderMapExpression(expression, scope) {
  const match = expression.match(/^([\s\S]+)\.map\(\(([^)]*)\)\s*=>\s*\(([\s\S]*)\)\)\s*$/);

  if (!match) {
    return "";
  }

  const iterable = evaluateExpression(match[1].trim(), scope);
  const params = match[2]
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
  const body = match[3].trim();

  if (!Array.isArray(iterable)) {
    return "";
  }

  return iterable
    .map((item, index) => {
      const localScope = { ...scope };

      if (params[0]) {
        localScope[params[0]] = item;
      }

      if (params[1]) {
        localScope[params[1]] = index;
      }

      return convertJsxToHtml(body, localScope);
    })
    .join("");
}

function looksLikeMapExpression(expression) {
  return expression.includes(".map(") && expression.includes("=>");
}

function evaluateExpression(expression, scope) {
  const names = Object.keys(scope);
  const values = Object.values(scope);
  return new Function(...names, `return (${expression});`)(...values);
}

function isAttributeExpression(input, braceIndex) {
  for (let index = braceIndex - 1; index >= 0; index -= 1) {
    const char = input[index];

    if (/\s/.test(char)) {
      continue;
    }

    return char === "=";
  }

  return false;
}

function convertSelfClosingComponent(tag, attrs) {
  if (tag === "img") {
    return `<img${attrs}>`;
  }

  const classMatch = attrs.match(/\bclass(?:Name)?="([^"]*)"/);
  const className = classMatch?.[1] ?? "";
  const glyph = iconGlyphs[tag] ?? "*";
  const classAttr = className ? ` ${className}` : "";
  return `<span class="lesson-icon${classAttr}" data-icon="${tag}">${glyph}</span>`;
}

function sanitizeSimpleHtml(html) {
  return html
    .replace(/<button[\s\S]*?<\/button>/g, "")
    .replace(/<section[\s\S]*?<\/section>/g, (block) => {
      const text = stripTags(block).replace(/\s+/g, " ").trim();
      return text === "Works Cited" || text.startsWith("Disclaimer") ? "" : block;
    })
    .trim();
}

function sanitizeDeepIntroHtml(html) {
  return html.replace(/<button[\s\S]*?<\/button>/g, "").trim();
}

function htmlToFragment(html) {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content;
}

function createActionButton(label, className, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function createAccordionCard(section) {
  const card = document.createElement("section");
  card.className = "lesson-card-shell overflow-hidden";

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "lesson-accordion-toggle";

  const title = document.createElement("span");
  title.textContent = section.title;
  toggle.appendChild(title);

  const chevron = document.createElement("span");
  chevron.className = "lesson-icon lesson-accordion-toggle__icon";
  chevron.textContent = "v";
  toggle.appendChild(chevron);

  const content = document.createElement("div");
  content.className = "lesson-accordion-content";
  content.hidden = true;
  content.appendChild(htmlToFragment(section.html));

  toggle.addEventListener("click", () => {
    const isOpen = !content.hidden;
    content.hidden = isOpen;
    toggle.classList.toggle("is-open", !isOpen);
    chevron.textContent = isOpen ? "v" : "^";
  });

  card.appendChild(toggle);
  card.appendChild(content);
  return card;
}

function createReferencesBlock(references) {
  const card = document.createElement("section");
  card.className = "lesson-card-shell lesson-works-cited p-4 space-y-2";

  const heading = document.createElement("h3");
  heading.className = "text-sm font-bold";
  heading.textContent = "Works Cited";
  card.appendChild(heading);

  const list = document.createElement("ul");
  list.className = "lesson-references-list";

  references.forEach((reference) => {
    const item = document.createElement("li");
    item.textContent = reference;
    list.appendChild(item);
  });

  card.appendChild(list);
  return card;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function stripTags(value) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function findMatchingPair(text, start, openChar, closeChar) {
  let depth = 0;

  for (let index = start; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === "'" || char === '"') {
      index = skipQuoted(text, index, char);
      continue;
    }

    if (char === "`") {
      index = skipTemplate(text, index);
      continue;
    }

    if (char === "/" && next === "*") {
      index = skipBlockComment(text, index);
      continue;
    }

    if (char === "/" && next === "/") {
      index = skipLineComment(text, index);
      continue;
    }

    if (char === openChar) {
      depth += 1;
      continue;
    }

    if (char === closeChar) {
      depth -= 1;

      if (depth === 0) {
        return index;
      }
    }
  }

  throw new Error(`Unmatched ${openChar}${closeChar} pair in lesson source.`);
}

function skipQuoted(text, start, quote) {
  for (let index = start + 1; index < text.length; index += 1) {
    const char = text[index];

    if (char === "\\") {
      index += 1;
      continue;
    }

    if (char === quote) {
      return index;
    }
  }

  return text.length - 1;
}

function skipTemplate(text, start) {
  for (let index = start + 1; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === "\\") {
      index += 1;
      continue;
    }

    if (char === "`") {
      return index;
    }

    if (char === "$" && next === "{") {
      index = findMatchingPair(text, index + 1, "{", "}");
    }
  }

  return text.length - 1;
}

function skipBlockComment(text, start) {
  const end = text.indexOf("*/", start + 2);
  return end === -1 ? text.length - 1 : end + 1;
}

function skipLineComment(text, start) {
  const end = text.indexOf("\n", start + 2);
  return end === -1 ? text.length - 1 : end;
}

function findBalancedIndex(text, start, openChar, closeChar) {
  let depth = 0;

  for (let index = start; index < text.length; index += 1) {
    const char = text[index];

    if (char === openChar) {
      depth += 1;
      continue;
    }

    if (char === closeChar) {
      depth -= 1;

      if (depth === 0) {
        return index;
      }
    }
  }

  throw new Error(`Unable to balance ${openChar}${closeChar} in lesson source.`);
}

export const __test = {
  convertJsxToHtml,
  extractConstants,
  extractDeepSections,
  extractFunctionReturnJsx,
  parseLessonSource,
};
