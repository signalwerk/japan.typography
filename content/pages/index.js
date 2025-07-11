import fs from "fs";
import path from "path";

async function mergeJsonChildren() {
  const pages = [
    "/introduction",
    "/reference-mark",
    "/brackets",
    "/markers-of-approval-disapproval",
    "/setting-aesthetic-accents",
    "/typographic-strategies-for-webpage-integrations",
    "/finals-stroke",
  ];
  const basePath = "./content/pages/"; // Update this with the actual path to your JSON files
  const outputFile = "index.json";

  // Function to get file path, replace empty string with "/index"
  function getFile(page) {
    return path.join(basePath, `${page}.json`);
  }

  try {
    // Read and parse the first JSON file
    let firstFilePath = getFile(pages[0]);
    let mainJson = JSON.parse(fs.readFileSync(firstFilePath, "utf8"));
    mainJson.path = "/"; // Set the "path"

    // Merge children from the other JSON files
    for (let i = 1; i < pages.length; i++) {
      let filePath = getFile(pages[i]);
      let currentJson = JSON.parse(fs.readFileSync(filePath, "utf8"));

      if (currentJson.children && Array.isArray(currentJson.children)) {
        mainJson.children = mainJson.children.concat(currentJson.children);
      } else {
        console.warn(
          `Warning: Skipping file ${filePath} as it does not contain a valid 'children' array.`,
        );
      }
    }

    function walk(node) {
      if (node.type === "image") {
        let alt = node.alt || node.caption || "";

        // remove <small></small> tags
        alt = alt.replace(/<small>.*<\/small>/g, "");

        // reomve markdown links but keep text
        alt = alt.replace(/\[(.*?)\]\(.*?\)/g, "$1");

        node.alt = alt;
      }
      if (node.children) {
        node.children.forEach(walk);
      }
    }
    walk(mainJson);

    // Write the merged JSON to a new file
    const outputPath = path.join(basePath, outputFile);
    fs.writeFileSync(outputPath, JSON.stringify(mainJson, null, 2));
    console.log(`Merged JSON saved to ${outputPath}`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

mergeJsonChildren();
