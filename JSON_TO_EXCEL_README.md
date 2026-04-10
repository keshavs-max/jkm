# JSON to Excel Conversion Script

## Overview
This script converts your JSON data files into an Excel (.xlsx) file with multiple sheets, making it easy to import the data into Google Sheets or other spreadsheet applications.

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Script
```bash
npm run json-to-excel
```

## What It Does

The script reads JSON files from `public/data/` and creates an Excel file with the following sheets:

| Sheet Name | Source File | Description |
|-----------|------------|-------------|
| `site_config` | `site.json` | Website configuration (title, contact, links, etc.) |
| `products` | `products.json` | Product catalog with details and attributes |
| `categories` | `categories.json` | Product categories |
| `homepage` | `home.json` | Homepage content sections |
| `testimonials` | `testimonials.json` | Customer testimonials/reviews |
| `about` | `about.json` | About page sections |

## Output

The Excel file is saved to: `public/data/export.xlsx`

## Features

- **Automatic Flattening**: Nested objects are automatically flattened with underscore-separated column names (e.g., `attributes_wattage`)
- **Array Handling**: Arrays are converted to JSON strings for Excel compatibility
- **Error Handling**: Gracefully handles missing files or parsing errors
- **Column Headers**: First row contains field names for easy identification

## Importing to Google Sheets

1. Generate the Excel file:
   ```bash
   npm run json-to-excel
   ```

2. Open Google Sheets
3. Click "File" → "Import"
4. Upload the `export.xlsx` file from `public/data/`
5. Select import options:
   - Choose "Replace spreadsheet" or "Insert new sheets"
   - Click "Import data"

## Example Output

### Site Config Sheet
| site_title | meta_description | favicon_url | whatsapp_number | ... |
|-----------|-----------------|-------------|-----------------|-----|
| Solar Lights Store | Premium solar... | /favicon.ico | 919999999999 | ... |

### Products Sheet
| product_code | name | description | category | price | attributes_wattage | attributes_material | ... |
|-------------|------|-------------|----------|-------|-------------------|-------------------|-----|
| SL001 | Garden Path Solar Light | ... | garden | 450 | 1W | ABS plastic | ... |

## Notes

- The script uses the `xlsx` package to handle Excel file generation
- Nested objects are flattened to make them compatible with spreadsheet applications
- All array values are preserved and converted to JSON format
- The script is independent and can be run separately from the main development workflow
