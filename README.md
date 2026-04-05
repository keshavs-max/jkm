# Solar Lighting Solutions Website

A modern, responsive static website for a company specializing in solar lighting solutions and custom lighting systems.

## Features

- Clean, modern UI with eco-friendly colors
- Fully responsive design (mobile-first)
- Multiple pages: Home, About Us, Products, Custom Solutions, Projects, Contact
- SEO-friendly meta tags
- Basic animations and smooth scrolling
- Lazy loading for images
- Accessibility features (alt text, semantic HTML)

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Vite (build tool)
- GitHub Pages (deployment)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

Build the project:
```bash
npm run build
```

The production files will be generated in the `/dist` folder.

### Preview Production Build

Preview the production build:
```bash
npm run preview
```

### Deployment

Deploy to GitHub Pages:
```bash
npm run deploy
```

This will build the project and deploy the `/dist` folder to GitHub Pages.

**Note:** Make sure your repository is set up for GitHub Pages deployment. If deploying to a project repository (not user/organization), you may need to update the `deploy` script in `package.json` to include the repository name:

```json
"deploy": "gh-pages -d dist -r https://github.com/your-username/your-repo-name.git"
```

## Project Structure

```
├── dist/               # Production build output
├── public/             # Static assets
│   ├── favicon.svg
│   ├── styles.css
│   └── script.js
├── src/                # Source files (if using Vite features)
├── index.html          # Home page
├── about.html          # About Us page
├── products.html       # Products page
├── custom-solutions.html # Custom Solutions page
├── projects.html       # Projects page
├── contact.html        # Contact page
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies and scripts
└── README.md           # This file
```

## Customization

- Replace placeholder images in `/public/` with actual images
- Update contact information in `contact.html`
- Modify colors and styles in `/public/styles.css`
- Add more pages or sections as needed

## License

This project is licensed under the MIT License.