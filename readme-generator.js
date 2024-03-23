const fs = require("node:fs");

const DOCUMENTATION_PATH = "./Documentations";
const JOINER = "[`⬆ BACK TO TOP ⬆`](#table-of-contents)";

const documentationFileNames = fs.readdirSync(DOCUMENTATION_PATH);

const documentationContents = documentationFileNames.map((fileName) => {
  const fileContent = fs.readFileSync(
    `${DOCUMENTATION_PATH}/${fileName}`,
    "utf-8"
  );

  return `${fileContent.trim()}\n\n${JOINER}`;
});

const fullDocumentation = documentationContents.join("\n\n");

fs.writeFileSync("./README.md", fullDocumentation);
