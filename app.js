import { siteData } from "./site-data.js";
import { createBlocks, normalizeText } from "./content-utils.js";

const articlesGrid = document.querySelector("#articles-grid");
const hiddenTabs = new Set(["disclaimer", "media-library"]);
const articleTabs = siteData.tabs.filter((tab) => !hiddenTabs.has(tab.id));

renderArticlePreviews();

function renderArticlePreviews() {
  articlesGrid.innerHTML = "";

  for (const tab of articleTabs) {
    const normalized = normalizeText(tab.content);
    const blocks = createBlocks(normalized);
    const preview = document.createElement("a");
    preview.className = "preview-card";
    preview.href = `./article.html?id=${encodeURIComponent(tab.id)}`;

    const imageUrl = blocks.find((block) => block.type === "image")?.value;
    const mediaMarkup = imageUrl
      ? `<div class="preview-card__media">
          <img src="${imageUrl}" alt="${tab.title}" loading="lazy" />
        </div>`
      : `<div class="preview-card__media preview-card__media--fallback">
          <p class="preview-card__media-label">${tab.eyebrow}</p>
          <p class="preview-card__media-title">${tab.title}</p>
        </div>`;

    preview.innerHTML = `
      ${mediaMarkup}
      <div class="preview-card__header">
        <p class="preview-card__eyebrow">${tab.eyebrow}</p>
        <h3 class="preview-card__title">${tab.title}</h3>
      </div>
    `;

    articlesGrid.appendChild(preview);
  }
}
