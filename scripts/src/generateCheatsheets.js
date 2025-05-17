const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const inquirer = require("inquirer");
const csvWriter = require("csv-writer");

const { PROMPT_CATEGORIES, HEADERS } = require("./constants.js");

const DEBUGGING = false;
const NO_PROMPT = process.argv.includes("--no-prompt");

// Define the project root (Assumes the script is in "scripts/src/")
const PROJECT_ROOT = path.resolve(__dirname, "../../");

// Ensure a directory exists (create if missing)
const ensureDirectoryExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Prompt the user to choose a category
const promptUser = async () => {
  if (NO_PROMPT) {
    return null; // Skip prompt in CI/CD mode
  }
  const { categoryChoice } = await inquirer.prompt([
    {
      type: "list",
      name: "categoryChoice",
      message: "Select a category for which you want to generate cheatsheets:",
      choices: Object.entries(PROMPT_CATEGORIES).map(([key, value]) => ({
        name: `${key}. ${value.replace("-", " ").toUpperCase()}`,
        value: value,
      })),
    },
  ]);
  return categoryChoice;
};

// Get all Markdown files recursively within a directory
const getMarkdownFiles = (dir) => {
  let results = [];
  if (!fs.existsSync(dir)) {
    console.warn(`Warning: Directory "${dir}" does not exist.`);
    return results;
  }
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
const generateCheatsheet = async (category) => {
  const NOTES_DIR = path.join(PROJECT_ROOT, category); // Ensure correct path
  const CHEATSHEET_DIR = path.join(PROJECT_ROOT, "cheatsheets");
  const OUTPUT_CSV = path.join(CHEATSHEET_DIR, `${category}.csv`);

  if (!fs.existsSync(NOTES_DIR)) {
    console.error(`❌ Error: Directory "${category}" does not exist.`);
    return;
  }

  // Ensure cheatsheets directory exists
  ensureDirectoryExists(CHEATSHEET_DIR);

  const markdownFiles = getMarkdownFiles(NOTES_DIR);
  console.log(`📝 Found ${markdownFiles.length} markdown files in ${category}`);

  const data = markdownFiles
    .sort((a, b) => {
      const nameA = path.basename(a, ".md");
      const nameB = path.basename(b, ".md");

      const numA = parseInt(nameA.match(/^\d+/)?.[0] || 0, 10);
      const numB = parseInt(nameB.match(/^\d+/)?.[0] || 0, 10);

      return numA - numB;
    })
    .map((file) => {
      const content = fs.readFileSync(file, "utf8");
      const parsed = matter(content);

      if (Object.keys(parsed.data).length === 0) {
        return null; // Skip files without front-matter
      }

      if (DEBUGGING === true) {
        console.log(`📂 File: ${file}`);
        console.log("🛠 Extracted front matter:", parsed.data);
      }

      const filename = path.basename(file, ".md");
      return { Filename: filename, ...parsed.data };
    })
    .filter(Boolean); // Remove null entries

  if (data.length === 0) {
    console.warn(
      `⚠️ Warning: No markdown files with front-matter found in "${category}".`
    );
    return;
  }

  // Get headers for this category
  const columnHeaders = HEADERS[category] || [];
  const writer = csvWriter.createObjectCsvWriter({
    path: OUTPUT_CSV,
    header: [
      { id: "Filename", title: "FILENAME" },
      ...columnHeaders.map((key) => ({ id: key, title: key.toUpperCase() })),
    ],
  });

  await writer.writeRecords(data);
  console.log(`✅ Cheatsheet generated: ${OUTPUT_CSV}`);
};

// Run the script
(async () => {
  if (NO_PROMPT) {
    console.log(
      "🚀 Running in CI/CD mode - Generating cheatsheets for all categories"
    );
    for (const category of Object.values(PROMPT_CATEGORIES)) {
      await generateCheatsheet(category);
    }
  } else {
    const selectedCategory = await promptUser();
    if (selectedCategory) await generateCheatsheet(selectedCategory);
  }
})();

module.exports = { generateCheatsheet };
