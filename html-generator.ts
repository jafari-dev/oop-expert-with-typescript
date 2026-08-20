import fs from "node:fs";
import { HighlightJS } from "highlight.js";
import { marked } from "marked";
import { gfmHeadingId } from "marked-gfm-heading-id";
import { markedHighlight } from "marked-highlight";

const README_PATH = "./README.md";
const TEMPLATE_PATH = "./build/template.html";
const OUTPUT_PATH = "./website/index.html";

/** Set INLINE=1 to emit a single self-contained file (used for previews). */
const SHOULD_INLINE_ASSETS = process.env.INLINE === "1";

type NavItem = { label: string; anchor: string; group: string | null };
type NavSection = { label: string; anchor: string; items: Array<NavItem> };

marked.use(gfmHeadingId());
marked.use(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, language) {
      if (HighlightJS.getLanguage(language) == null) {
        return HighlightJS.highlightAuto(code).value;
      }

      return HighlightJS.highlight(code, { language }).value;
    },
  }),
);

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/**
 * The README repeats a "back to top" link after every section. A sidebar makes
 * those links redundant, so they are dropped from the website build only.
 */
function removeBackToTopLinks(markdown: string): string {
  return markdown.replace(/\n*\[`⬆ BACK TO TOP ⬆`\]\(#table-of-contents\)/g, "");
}

/** The handwritten table of contents becomes the sidebar instead of page content. */
function extractTableOfContents(markdown: string): { markdown: string; toc: string } {
  const match = /\n## Table of Contents\n([\s\S]*?)(?=\n## )/.exec(markdown);

  if (match == null) {
    throw new Error("Could not locate the Table of Contents section in README.md");
  }

  return { markdown: markdown.replace(match[0], "\n"), toc: match[1] };
}

/** The first heading and paragraph of the README become the hero copy. */
function extractIntro(markdown: string): { markdown: string; title: string; lede: string } {
  const match = /^#\s+(.+)\n+([\s\S]*?)\n\n/.exec(markdown);

  if (match == null) {
    throw new Error("Could not locate the intro heading and paragraph in README.md");
  }

  return { markdown: markdown.replace(match[0], ""), title: match[1].trim(), lede: match[2].trim() };
}

/**
 * Design pattern entries are labelled "Creational - Abstract Factory" and often
 * carry alternative names ("Command or Action or Transaction"). Split the
 * category off and keep only the primary name so the sidebar stays scannable.
 */
function parseNavLabel(rawLabel: string): { label: string; group: string | null } {
  const grouped = /^(Creational|Structural|Behavioral)\s+-\s+(.+)$/.exec(rawLabel);
  const label = grouped == null ? rawLabel : grouped[2];

  return { label: label.split(" or ")[0].trim(), group: grouped == null ? null : grouped[1] };
}

function parseNavigation(toc: string): Array<NavSection> {
  const sections: Array<NavSection> = [];

  for (const line of toc.split("\n")) {
    const section = /^\d+\.\s+\[(.+?)\]\(#(.+?)\)/.exec(line);

    if (section != null) {
      sections.push({ label: section[1], anchor: section[2], items: [] });
      continue;
    }

    const item = /^\s+-\s+\[(.+?)\]\(#(.+?)\)/.exec(line);

    if (item != null && sections.length > 0) {
      const { label, group } = parseNavLabel(item[1]);

      sections[sections.length - 1].items.push({ label, anchor: item[2], group });
    }
  }

  return sections;
}

const COPY_ICON =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>';

/** Wrap every highlighted block in a titled card with a copy button. */
function decorateCodeBlocks(html: string): string {
  return html.replace(/<pre><code class="([^"]*)">([\s\S]*?)<\/code><\/pre>/g, (_match, className, code) => {
    const language = /language-([\w-]+)/.exec(className)?.[1] ?? "code";
    const label = language === "typescript" ? "TypeScript" : language;

    return [
      '<figure class="code-card">',
      '<figcaption class="code-card__bar">',
      `<span class="code-card__lang">${escapeHtml(label)}</span>`,
      `<button class="code-card__copy" type="button" aria-label="Copy code to clipboard">${COPY_ICON}<span>Copy</span></button>`,
      "</figcaption>",
      `<pre><code class="${className}">${code}</code></pre>`,
      "</figure>",
    ].join("");
  });
}

/** Give every linkable heading a hover anchor. */
function decorateHeadings(html: string): string {
  return html.replace(/<(h[2-4]) id="([^"]+)">([\s\S]*?)<\/\1>/g, (_match, tag, id, text) => {
    return `<${tag} id="${id}">${text}<a class="heading-anchor" href="#${id}" aria-label="Link to this section">#</a></${tag}>`;
  });
}

/** The SOLID sections mark their before/after snippets with ❌ and ✔️. */
function decorateComparisonHeadings(html: string): string {
  return html.replace(/<h5([^>]*)>([\s\S]*?)<\/h5>/g, (match, attrs, text) => {
    if (text.includes("❌")) {
      return `<h5${attrs} class="compare compare--bad">${text}</h5>`;
    }

    if (text.includes("✔️")) {
      return `<h5${attrs} class="compare compare--good">${text}</h5>`;
    }

    return match;
  });
}

function buildSidebar(sections: Array<NavSection>): string {
  const parts: Array<string> = [];

  for (const section of sections) {
    parts.push('<li class="nav__section">');
    parts.push(`<a class="nav__section-link" href="#${section.anchor}">${escapeHtml(section.label)}</a>`);

    if (section.items.length > 0) {
      parts.push('<ul class="nav__list">');

      let currentGroup: string | null = null;

      for (const item of section.items) {
        if (item.group !== currentGroup && item.group != null) {
          parts.push(`<li class="nav__group">${escapeHtml(item.group)}</li>`);
        }

        currentGroup = item.group;

        parts.push(
          `<li><a class="nav__link" href="#${item.anchor}" data-search="${escapeHtml(
            `${item.label} ${item.group ?? ""} ${section.label}`.toLowerCase(),
          )}">${escapeHtml(item.label)}</a></li>`,
        );
      }

      parts.push("</ul>");
    }

    parts.push("</li>");
  }

  return parts.join("");
}

function buildHero(title: string, lede: string, sections: Array<NavSection>): string {
  const countOf = (anchor: string) => sections.find((section) => section.anchor === anchor)?.items.length ?? 0;

  // "What's ...?" entries are prose, not pillars/patterns, so they are excluded.
  const stats = [
    { value: String(countOf("fundamentals") - 1), label: "OOP pillars" },
    { value: String(countOf("solid-principles") - 1), label: "SOLID principles" },
    { value: String(countOf("design-patterns") - 1), label: "Design patterns" },
  ];

  return [
    '<section class="hero">',
    '<div class="hero__glow" aria-hidden="true"></div>',
    '<div class="hero__inner">',
    '<p class="hero__eyebrow">TypeScript · Object-Oriented Programming</p>',
    `<h1 class="hero__title">${escapeHtml(title)}</h1>`,
    `<p class="hero__lede">${escapeHtml(lede)}</p>`,
    '<div class="hero__actions">',
    '<a class="button button--primary" href="#fundamentals">Start learning</a>',
    '<a class="button button--ghost" href="#design-patterns">Browse patterns</a>',
    "</div>",
    '<dl class="hero__stats">',
    ...stats.map(
      (stat) => `<div class="hero__stat"><dt>${escapeHtml(stat.label)}</dt><dd>${escapeHtml(stat.value)}</dd></div>`,
    ),
    "</dl>",
    "</div>",
    "</section>",
  ].join("");
}

function inlineAssets(html: string): string {
  const css = fs.readFileSync("./website/styles.css", "utf-8");
  const js = fs.readFileSync("./website/app.js", "utf-8");

  return html
    .replace('<link rel="stylesheet" href="./styles.css" />', `<style>\n${css}\n</style>`)
    .replace('<script src="./app.js" defer></script>', `<script>\n${js}\n</script>`);
}

async function generateHTML() {
  const template = fs.readFileSync(TEMPLATE_PATH, "utf-8");

  const withoutBackLinks = removeBackToTopLinks(fs.readFileSync(README_PATH, "utf-8"));
  const { markdown: withoutToc, toc } = extractTableOfContents(withoutBackLinks);
  const { markdown, title, lede } = extractIntro(withoutToc);

  const sections = parseNavigation(toc);

  const parsed = await marked.parse(markdown, { gfm: true });
  const content = decorateComparisonHeadings(decorateHeadings(decorateCodeBlocks(parsed)));

  const html = template
    .replace("<!-- HERO -->", buildHero(title, lede, sections))
    .replace("<!-- SIDEBAR -->", buildSidebar(sections))
    .replace("<!-- CONTENT -->", content);

  fs.writeFileSync(OUTPUT_PATH, SHOULD_INLINE_ASSETS ? inlineAssets(html) : html);
}

generateHTML();
