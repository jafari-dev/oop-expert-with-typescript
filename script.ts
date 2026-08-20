import fs from "node:fs";

const JOINER = "\n\n[`⬆ BACK TO TOP ⬆`](#table-of-contents)";
const CODE_ADDRESS = "[EXAMPLE-FILE-ADDRESS]";
const DOCS_DIRECTORY = "./Documentations";

function wrapInTypeScriptBlock(content: string) {
  const PREFIX = "```typescript";
  const SUFFIX = "```";

  return `${PREFIX}\n${content}\n${SUFFIX}`;
}

/**
 * `readdirSync` returns entries in filesystem order, which is alphabetical on
 * macOS but arbitrary on Linux. The documents must be concatenated in the order
 * of their numeric prefix, otherwise the README comes out scrambled on CI.
 */
function getDocumentFileNames(): Array<string> {
  const leadingNumberOf = (fileName: string) => Number.parseInt(fileName, 10);

  return fs
    .readdirSync(DOCS_DIRECTORY)
    .filter((fileName) => fileName.endsWith(".md"))
    .sort((first, second) => leadingNumberOf(first) - leadingNumberOf(second) || first.localeCompare(second));
}

const contents = getDocumentFileNames().map((fileName) => {
  const fileContent = fs.readFileSync(`${DOCS_DIRECTORY}/${fileName}`, "utf-8");

  const lines = fileContent.split("\n");

  const newLines = lines.map((line) => {
    if (line.startsWith(CODE_ADDRESS)) {
      const codeFileAddress = line.replace(CODE_ADDRESS, "").slice(1, -1);
      const code = fs.readFileSync(`.${codeFileAddress}`, "utf-8");

      return wrapInTypeScriptBlock(code);
    } else {
      return line;
    }
  });

  const joinedLines = newLines.join("\n").trim();

  return `${joinedLines}${JOINER}`;
});

const fullDocumentation = contents.join(`\n\n`);

fs.writeFileSync("./README.md", fullDocumentation);
