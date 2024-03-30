const fs = require("node:fs");

const INTRODUCTION_DOCS_PATH = "./1 - Introduction";
const FUNDAMENTALS_DOCS_PATH = "./2 - Fundamentals";
const SOLID_DOCS_PATH = "./3 - SOLID";
const DESIGN_PATTERNS_DOCS_PATH = "./4 - Design Patterns";
const OUTRO_DOCS_PATH = "./5 - Outro";

const JOINER = "\n\n[`⬆ BACK TO TOP ⬆`](#table-of-contents)";

function getFilesContent(path) {
  const fileNames = fs.readdirSync(path);

  return fileNames.map((fileName) => {
    const fileContent = fs.readFileSync(`${path}/${fileName}`, "utf-8");

    return `${fileContent.trim()}${JOINER}`;
  })
}

const INTRODUCTION_DOCS_CONTENTS = getFilesContent(INTRODUCTION_DOCS_PATH);
const FUNDAMENTALS_DOCS_CONTENTS = getFilesContent(FUNDAMENTALS_DOCS_PATH);
const SOLID_DOCS_CONTENTS = getFilesContent(SOLID_DOCS_PATH);
const DESIGN_PATTERNS_DOCS_CONTENTS = getFilesContent(DESIGN_PATTERNS_DOCS_PATH);
const OUTRO_DOCS_CONTENTS = getFilesContent(OUTRO_DOCS_PATH);

const contentOfDocs = [
  ...INTRODUCTION_DOCS_CONTENTS,
  ...FUNDAMENTALS_DOCS_CONTENTS,
  ...SOLID_DOCS_CONTENTS,
  ...DESIGN_PATTERNS_DOCS_CONTENTS,
  ...OUTRO_DOCS_CONTENTS,
];

const fullDocumentation = contentOfDocs.join("\n\n");

fs.writeFileSync("./README.md", fullDocumentation);
