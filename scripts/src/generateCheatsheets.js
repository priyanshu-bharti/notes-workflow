import fs from "fs";
import path from "path";
import matter from "gray-matter";
import csvWriter from "csv-writer";

// Configurable folders
const NOTES_DIR = "./notes";
const OUTPUT_CSV = "./cheatsheet.csv";

// Recursively find Markdown files
/**
 *
 * @param {string} dir
 * @returns {string[]}
 */
const getMarkdownFiles = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getMarkdownFiles(filePath));
    } else if (file.endsWith(".md")) {
      results.push(filePath);
    }
  });
  return results;
};

// Extract front-matter and write to CSV
const generateCheatsheet = async () => {
  const files = getMarkdownFiles(NOTES_DIR);
  const data = files.map((file) => {
    const content = fs.readFileSync(file, "utf8");
    const parsed = matter(content);
    return { file: file.replace(NOTES_DIR, ""), ...parsed.data };
  });

  const writer = csvWriter.createObjectCsvWriter({
    path: OUTPUT_CSV,
    header: Object.keys(data[0] || {}).map((key) => ({
      id: key,
      title: key.toUpperCase(),
    })),
  });

  await writer.writeRecords(data);
  console.log("Cheatsheet generated:", OUTPUT_CSV);
};

generateCheatsheet();
