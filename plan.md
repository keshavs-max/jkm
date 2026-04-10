# 🌞 Solar Lights Business Website – Execution Plan

## 📌 Overview

This project is a **static, scalable website** for a solar/garden lights business.
It uses **Google Sheets as a CMS**, processes data at build time using Node.js, and deploys via **GitHub Pages**.

---

# 🏗️ 1. Architecture

```
Google Sheets → Node Scripts → JSON + Images → React Build → GitHub Pages
```

### Key Principles

* Static-first (fast, secure, low cost)
* No backend required
* Non-technical content management via Google Sheets
* Strict validation at build time

---

# 🧰 2. Tech Stack

### Frontend

* React
* Tailwind CSS
* Redux Toolkit

### Build & Data Layer

* Node.js (scripts only)

### Hosting

* GitHub Pages (gh-pages)

### Integrations

* Google Sheets (data source)
* Google Forms (lead capture)
* WhatsApp (direct contact)
* Google Analytics + Tag Manager

---

# 📁 3. Project Structure

```
project-root/
│
├── scripts/
│   ├── fetchData.js
│   ├── validateData.js
│   ├── processProducts.js
│   ├── downloadImages.js
│   └── buildData.js
│
├── public/
│   ├── data/
│   ├── images/
│   │   └── products/
│   └── favicon.ico
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── store/
│   ├── hooks/
│   └── utils/
│
├── .env
├── package.json
└── tailwind.config.js
```

---

# ⚙️ 4. Environment Variables

```
GOOGLE_SHEET_URL=
WHATSAPP_NUMBER=
```

---

# 📊 5. Google Sheets Structure

## Tabs Required

1. site_config
2. products
3. categories
4. homepage
5. testimonials
6. about

---

## 5.1 site_config

| key              | value              |
| ---------------- | ------------------ |
| site_title       | Solar Lights Store |
| meta_description | Best solar lights  |
| favicon_url      | URL                |
| whatsapp_number  | 919999999999       |
| email            | email              |
| phone            | number             |
| address          | full address       |
| google_form_link | URL                |
| google_map_embed | iframe             |
| ga_id            | GA ID              |
| gtm_id           | GTM ID             |

---

## 5.2 products (CORE)

### Required Columns

| column        |
| ------------- |
| product_code  |
| name          |
| description   |
| category      |
| min_order_qty |
| image_1       |

### Optional Columns

| column  |
| ------- |
| image_2 |
| image_3 |
| price   |

### Custom Fields (Dynamic)

Any extra column becomes a product attribute.

Example:

| product_code | name | wattage | material |
| ------------ | ---- | ------- | -------- |

---

## 5.3 categories

| id | name | description |

---

## 5.4 homepage

| type | title | description | link |

Types:

* hero
* service

---

## 5.5 testimonials

| name | message | rating |

---

## 5.6 about

| order | heading | paragraph |

---

# 🔄 6. Data Pipeline

## Step 1: Fetch Data

* Fetch Google Sheets

---

## Step 2: Validate Data

### Rules:

* Required fields must exist
* product_code must be unique
* category must match categories sheet
* image URLs must be valid

❌ Fail build on error

---

## Step 3: Process Products

### Extract Standard Fields

```
product_code, name, description, category,
min_order_qty, image_1, image_2, image_3, price
```

### Extract Custom Fields

```
attributes = all remaining columns
```

---

## Step 4: Download Images

### Input:

Image URLs from sheet

### Output:

```
/public/images/products/{product_code}/1.jpg
```

---

## Step 5: Generate JSON

```
/public/data/products.json
/public/data/site.json
/public/data/home.json
/public/data/categories.json
```

---

# 🧾 7. Output JSON Format

## Product Example

```json
{
  "product_code": "SL001",
  "name": "Solar Lamp",
  "description": "...",
  "category": "solar_lights",
  "min_order_qty": 10,
  "price": 500,
  "images": [
    "/images/products/SL001/1.jpg"
  ],
  "attributes": {
    "wattage": "12W",
    "material": "ABS"
  }
}
```

---

# 🎨 8. Frontend Pages

## Home

* Hero
* Services
* Testimonials
* CTA

---

## Products

* Category filter
* Product grid
* Product details page

### Product Page

* Image gallery
* Description
* Attributes table
* Enquiry button

---

## About

* Dynamic sections

---

## Contact

* Address
* Phone / Email
* Google Map (iframe)
* Google Form
* WhatsApp button

---

# 💬 9. WhatsApp Integration

```
https://wa.me/<number>?text=Hi I'm interested in PRODUCT_NAME (CODE)
```

---

# 🧠 10. Redux Usage

Use for:

* Product state
* Filters
* UI state (modal)

---

# 📊 11. Analytics

Add to `index.html`:

* Google Analytics
* Google Tag Manager

---

# 🚀 12. Build & Deployment

## Scripts

```
npm run fetch-data
npm run build-data
npm run build
npm run deploy
```

---

## gh-pages Setup

```
npm install gh-pages
```

package.json:

```
"homepage": "https://<username>.github.io/<repo>"
```

---

# 🔁 13. CI/CD (Recommended)

GitHub Actions:

1. Fetch data
2. Validate
3. Build
4. Deploy

---

# 🔒 14. Validation Rules

Build should FAIL if:

* Missing required fields
* Duplicate product_code
* Invalid category
* Broken image URL

---

# 📈 15. Scalability

Future-ready for:

* CMS migration
* Multi-language
* SEO pre-rendering
* Admin panel
* Blog

---

# ⚠️ 16. Limitations

* SEO limited (SPA)
* No backend logic
* Google Sheets dependency

---

# ✅ 17. Final Checklist

* [ ] Google Sheet ready
* [ ] Node scripts working
* [ ] Validation implemented
* [ ] Images processed
* [ ] JSON generated
* [ ] UI complete
* [ ] WhatsApp working
* [ ] Google Form embedded
* [ ] Analytics added
* [ ] Deployed

---

# 🎯 18. Optional Enhancements

* Slug-based URLs
* Image caching
* Pre-rendering (react-snap / Next.js)
* Attribute grouping system

---

# 🧭 Final Note

This architecture is:

* Low cost
* Easy to maintain
* Highly flexible
* Business-friendly

Perfect for **lead-generation websites** without e-commerce complexity.

---

If you want next step, I can:

* Generate **Node.js scripts (ready-to-use)**
* Create a **starter GitHub repo**
* Or design **UI components with Tailwind + React**
