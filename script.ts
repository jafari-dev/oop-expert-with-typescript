import fs from "node:fs";

const JOINER = "\n\n[`⬆ BACK TO TOP ⬆`](#table-of-contents)";

const DOCS_DIRECTORY = "./Documentations";
const subDirectoriesOfDocs = fs.readdirSync(DOCS_DIRECTORY);

const contentOfDocs = subDirectoriesOfDocs.reduce((docs, subDirectory) => {
  const fileNames = fs.readdirSync(`${DOCS_DIRECTORY}/${subDirectory}`);

  const contents = fileNames.map((fileName) => {
    const fileContent = fs.readFileSync(`${DOCS_DIRECTORY}/${subDirectory}/${fileName}`, "utf-8");

    return `${fileContent.trim()}${JOINER}`;
  });

  return [...docs, ...contents];
}, [] as string[]);

const fullDocumentation = contentOfDocs.join("\n\n");

fs.writeFileSync("./README.md", fullDocumentation);
