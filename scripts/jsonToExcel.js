import fs from 'node:fs/promises';
import path from 'node:path';
import XLSX from 'xlsx';

const DEFAULT_SHEETS = ['site_config', 'products', 'categories', 'homepage', 'testimonials', 'about'];

// Map JSON filenames to sheet names
const FILE_TO_SHEET_MAP = {
  'site.json': 'site_config',
  'products.json': 'products',
  'categories.json': 'categories',
  'home.json': 'homepage',
  'testimonials.json': 'testimonials',
  'about.json': 'about',
};

// Flatten nested objects for Excel display
const flattenObject = (obj, prefix = '') => {
  const flattened = {};

  for (const key in obj) {
    if (obj[key] === null || obj[key] === undefined) {
      flattened[prefix ? `${prefix}_${key}` : key] = '';
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      // Recursively flatten nested objects
      const nested = flattenObject(obj[key], prefix ? `${prefix}_${key}` : key);
      Object.assign(flattened, nested);
    } else if (Array.isArray(obj[key])) {
      // Convert arrays to JSON string
      flattened[prefix ? `${prefix}_${key}` : key] = JSON.stringify(obj[key]);
    } else {
      flattened[prefix ? `${prefix}_${key}` : key] = obj[key];
    }
  }

  return flattened;
};

const convertJsonToWorksheet = (data) => {
  let rows = [];

  if (Array.isArray(data)) {
    // For array data, flatten each object
    rows = data.map((item) => {
      if (typeof item === 'object' && item !== null) {
        return flattenObject(item);
      }
      return item;
    });
  } else if (typeof data === 'object') {
    // For object data, flatten it
    rows = [flattenObject(data)];
  } else {
    rows = [{ value: data }];
  }

  return XLSX.utils.json_to_sheet(rows);
};

const main = async () => {
  try {
    const dataDir = path.resolve('public/data');
    const workbook = XLSX.utils.book_new();

    for (const sheetName of DEFAULT_SHEETS) {
      // Find the corresponding JSON file
      let jsonFile = null;
      for (const [file, sheet] of Object.entries(FILE_TO_SHEET_MAP)) {
        if (sheet === sheetName) {
          jsonFile = file;
          break;
        }
      }

      if (!jsonFile) {
        console.warn(`No JSON file mapping found for sheet: ${sheetName}`);
        continue;
      }

      const filePath = path.join(dataDir, jsonFile);

      try {
        const fileContent = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileContent);

        // Convert to worksheet
        const worksheet = convertJsonToWorksheet(data);

        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
        console.log(`✓ Added sheet: ${sheetName} (from ${jsonFile})`);
      } catch (error) {
        console.error(`✗ Error processing ${jsonFile}:`, error.message);
      }
    }

    // Save the workbook
    const outputPath = path.resolve('public/data', 'export.xlsx');
    XLSX.writeFile(workbook, outputPath);
    console.log(`\n✓ Excel file created successfully: ${outputPath}`);
  } catch (error) {
    console.error('Error creating Excel file:', error);
    process.exit(1);
  }
};

if (process.argv[1].endsWith('jsonToExcel.js')) {
  main();
}

export { convertJsonToWorksheet, flattenObject };
