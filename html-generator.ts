import { marked } from "marked";
import { gfmHeadingId } from "marked-gfm-heading-id";
import fs from "node:fs";

marked.use(gfmHeadingId());

async function generateHTML() {
  const htmlFileContent = fs.readFileSync("./website/template.html", "utf-8");
  const markdownFileContent = fs.readFileSync("./README.md", "utf-8");
  const convertedContent = await marked.parse(markdownFileContent, {
    gfm: true,
  });
  const newHTMLContent = htmlFileContent.replace("<!-- CONTENT -->", convertedContent);

  fs.writeFileSync("./website/index.html", newHTMLContent);
}

generateHTML();
