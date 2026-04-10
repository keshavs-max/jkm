import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { parse } from 'csv-parse/sync';
import 'dotenv/config';

const DEFAULT_SHEETS = ['site_config', 'products', 'categories', 'homepage', 'testimonials', 'about'];

const normalizeSheetUrl = (sheetUrl) => {
  try {
    const url = new URL(sheetUrl);
    if (url.hostname.includes('google.com')) {
      if (url.pathname.includes('/d/')) {
        const match = url.pathname.match(/\/d\/([^/]+)/);
        if (match) {
          return `https://docs.google.com/spreadsheets/d/${match[1]}`;
        }
      }
      return `${url.origin}${url.pathname}`;
    }
  } catch {
    return sheetUrl;
  }
  return sheetUrl;
};

const readCsv = (csvText) => {
  const records = parse(csvText, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  });
  return records;
};

const fetchCsvSheet = async (sheetUrl, sheetName) => {
  const sheetEndpoint = `${sheetUrl}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
  const response = await fetch(sheetEndpoint);
  if (!response.ok) {
    throw new Error(`Unable to fetch sheet ${sheetName} from ${sheetEndpoint}`);
  }
  const text = await response.text();
  if (sheetName === 'testimonials') {
    console.log('RAW CSV for testimonials:');
    console.log(text);
    console.log('---END RAW CSV---');
  }
  return readCsv(text);
};

const main = async () => {
  const sheetUrl = process.env.GOOGLE_SHEET_URL;
  if (!sheetUrl) {
    console.warn('GOOGLE_SHEET_URL is not configured. Skipping sheet fetch.');
    return;
  }

  const normalizedUrl = normalizeSheetUrl(sheetUrl);
  const data = {};

  for (const sheetName of DEFAULT_SHEETS) {
    console.log(`Fetching sheet: ${sheetName}`);
    data[sheetName] = await fetchCsvSheet(normalizedUrl, sheetName);
  }

  const outputFile = path.resolve('scripts', 'sheetData.json');
  await fs.writeFile(outputFile, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Saved raw sheet data to ${outputFile}`);
};

if (process.argv[1].endsWith('fetchData.js')) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

export { readCsv, fetchCsvSheet, normalizeSheetUrl, DEFAULT_SHEETS };
