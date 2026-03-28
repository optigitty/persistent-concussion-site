import { siteData } from "./site-data.js";
import { hasLessonSource } from "./lesson-mapping.js";
import { renderLessonArticle } from "./lesson-renderer.js";
import {
  getSummary,
  normalizeText,
  parseArticleContent,
  renderReferences,
  renderSections,
} from "./content-utils.js";

const detailEyebrow = document.querySelector("#detail-eyebrow");
const detailTitle = document.querySelector("#detail-title");
const detailDescription = document.querySelector("#detail-description");
const detailSummary = document.querySelector("#detail-summary");
const detailSummaryCard = detailSummary.closest(".article-detail__summary");
const detailContent = document.querySelector("#detail-content");
const hiddenTabs = new Set(["disclaimer", "media-library"]);
const articleTabs = siteData.tabs.filter((tab) => !hiddenTabs.has(tab.id));

const articleId = new URLSearchParams(window.location.search).get("id");
const matchedArticle = articleTabs.find((tab) => tab.id === articleId);

if (articleId && !matchedArticle) {
  window.location.replace("./index.html#course");
}

const article = matchedArticle ?? articleTabs[0];

document.title = `${article.title} | Persistent Concussion`;
detailEyebrow.textContent = article.eyebrow;
detailTitle.textContent = article.title;
detailDescription.textContent = article.description;
detailContent.innerHTML = "";
detailContent.classList.remove("article-detail__content--lesson");

const renderedFromLesson = hasLessonSource(article.id)
  ? await renderLessonArticle(article, detailContent)
  : false;

if (renderedFromLesson) {
  detailSummaryCard.hidden = true;
  detailContent.classList.add("article-detail__content--lesson");
} else {
  const normalized = normalizeText(article.content);
  const parsed = parseArticleContent(normalized);

  detailSummaryCard.hidden = false;
  detailSummary.textContent = getSummary(normalized);

  const sectionsContainer = document.createElement("div");
  sectionsContainer.className = "article-detail__sections";
  detailContent.appendChild(sectionsContainer);
  renderSections(parsed.sections, sectionsContainer, article.title);

  if (parsed.deepDiveSections.length) {
    detailContent.appendChild(createDeepDive(parsed.deepDiveSections, article.title));
  }

  renderReferences(parsed.references, detailContent);
}

function createDeepDive(sections, title) {
  const details = document.createElement("details");
  details.className = "deep-dive";

  const summary = document.createElement("summary");
  summary.className = "deep-dive__toggle";
  summary.textContent = "Read the Deep Dive";
  details.appendChild(summary);

  const content = document.createElement("div");
  content.className = "deep-dive__content";
  details.appendChild(content);
  renderSections(sections, content, title);

  return details;
}
