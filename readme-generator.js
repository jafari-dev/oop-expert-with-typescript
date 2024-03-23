const fs = require("node:fs");

const DOCUMENTATION_PATH = "./Documentations";

const documentationFileNames = fs.readdirSync(DOCUMENTATION_PATH);

const documentationContents = documentationFileNames.map((fileName, index) => {
  const fileContent = fs.readFileSync(
    `${DOCUMENTATION_PATH}/${fileName}`,
    "utf-8"
  );

  return fileContent.trim();
});

const JOINER = "\n[`⬆ BACK TO TOP ⬆`](#table-of-contents)\n\n";
const fullDocumentation = documentationContents.join(JOINER);

fs.writeFileSync("./README.md", fullDocumentation);
