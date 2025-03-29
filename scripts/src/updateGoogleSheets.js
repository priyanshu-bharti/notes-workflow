const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const csvParser = require("csv-parser");
const { GoogleSpreadsheet } = require("google-spreadsheet");

dotenv.config();

const SHEET_ID = process.env.SHEET_ID;
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");

const CHEATSHEETS_DIR = path.join(__dirname, "../../cheatsheets");

const readCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (error) => reject(error));
  });
};

const updateGoogleSheets = async () => {
  const doc = new GoogleSpreadsheet(SHEET_ID);
  await doc.useServiceAccountAuth({
    client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  });
  await doc.loadInfo();

  // Read all CSV files from the cheatsheets directory
  const csvFiles = fs
    .readdirSync(CHEATSHEETS_DIR)
    .filter((file) => file.endsWith(".csv"));

  for (const file of csvFiles) {
    const filePath = path.join(CHEATSHEETS_DIR, file);
    const sheetName = path.basename(file, ".csv");
    const data = await readCSV(filePath);

    if (data.length === 0) {
      console.warn(`⚠️ Skipping empty file: ${file}`);
      continue;
    }

    // Check if sheet already exists, otherwise create a new one
    let sheet = doc.sheetsByTitle[sheetName];
    if (!sheet) {
      sheet = await doc.addSheet({
        title: sheetName,
        headerValues: Object.keys(data[0]),
      });
    } else {
      await sheet.clear(); // Clear existing data
      await sheet.setHeaderRow(Object.keys(data[0]));
    }

    await sheet.addRows(data);
    console.log(`✅ Updated sheet: ${sheetName}`);
  }

  console.log("🚀 Google Sheets update complete!");
};

updateGoogleSheets().catch(console.error);
