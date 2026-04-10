import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fetchCsvSheet, normalizeSheetUrl, DEFAULT_SHEETS } from './fetchData.js';
import { processProducts } from './processProducts.js';
import { validateData } from './validateData.js';
import { downloadImages } from './downloadImages.js';

const SHEET_NAMES = {
  site_config: 'site',
  products: 'products',
  categories: 'categories',
  homepage: 'home',
  testimonials: 'testimonials',
  about: 'about',
};

const buildOutput = async (data) => {
  const publicDir = path.resolve('public', 'data');
  await fs.mkdir(publicDir, { recursive: true });

  await fs.writeFile(path.join(publicDir, 'site.json'), JSON.stringify(data.site, null, 2), 'utf8');
  await fs.writeFile(path.join(publicDir, 'home.json'), JSON.stringify(data.home, null, 2), 'utf8');
  await fs.writeFile(path.join(publicDir, 'categories.json'), JSON.stringify(data.categories, null, 2), 'utf8');
  await fs.writeFile(path.join(publicDir, 'testimonials.json'), JSON.stringify(data.testimonials, null, 2), 'utf8');
  await fs.writeFile(path.join(publicDir, 'about.json'), JSON.stringify(data.about, null, 2), 'utf8');
  await fs.writeFile(path.join(publicDir, 'products.json'), JSON.stringify(data.products, null, 2), 'utf8');
};

const ensureSampleData = async () => {
  const sampleDataPath = path.resolve('public', 'data');
  const files = ['site.json', 'home.json', 'categories.json', 'testimonials.json', 'about.json', 'products.json'];
  const missing = await Promise.all(files.map(async (file) => {
    try {
      await fs.access(path.join(sampleDataPath, file));
      return false;
    } catch {
      return true;
    }
  }));

  return missing.some(Boolean);
};

const buildFromSheet = async (sheetUrl) => {
  const normalizedUrl = normalizeSheetUrl(sheetUrl);

  const rawData = {};
  for (const sheetName of DEFAULT_SHEETS) {
    console.log(`Fetching sheet: ${sheetName}`);
    rawData[sheetName] = await fetchCsvSheet(normalizedUrl, sheetName);
  }

  const site = rawData.site_config.length > 0 ? rawData.site_config[0] : {};
  const products = processProducts(rawData.products);
  const categories = rawData.categories.map((row) => ({ id: row.id.trim(), name: row.name.trim(), description: row.description.trim() }));
  const home = rawData.homepage.map((row) => ({ type: row.type.trim(), title: row.title.trim(), description: row.description.trim(), link: row.link.trim() }));
  const testimonials = rawData.testimonials.map((row) => ({ name: row.name.trim(), message: row.message.trim(), rating: row.rating.trim() }));
  const about = rawData.about.map((row) => ({ order: Number(row.order) || 0, heading: row.heading.trim(), paragraph: row.paragraph.trim() }));

  about.sort((a, b) => a.order - b.order);

  const errors = validateData({ site, products, categories });
  if (errors.length > 0) {
    errors.forEach((error) => console.error(`Validation error: ${error}`));
    throw new Error('Data validation failed. Build aborted.');
  }

  console.log('Downloading product images...');
  await downloadImages(products);

  await buildOutput({ site, home, categories, testimonials, about, products });
  console.log('Data pipeline complete. Wrote files to public/data.');
};

const main = async () => {
  const sheetUrl = process.env.GOOGLE_SHEET_URL;

  if (sheetUrl) {
    await buildFromSheet(sheetUrl);
    return;
  }

  console.warn('GOOGLE_SHEET_URL is not configured. Using sample data already present in public/data.');

  if (await ensureSampleData()) {
    throw new Error('Sample data is missing from public/data. Please add sample files or configure GOOGLE_SHEET_URL.');
  }
};

if (process.argv[1].endsWith('buildData.js')) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
