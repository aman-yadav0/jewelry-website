# Auren India Jewellery

Auren India is a static, information-first jewellery catalogue built with React and JavaScript. It presents jewellery categories, subcategories, styling details, reference prices, ratings, customer feedback and bridal inspiration without cart, checkout or purchase controls.

## Features

- Minimal white-and-gold presentation for Auren India
- Pendants, rings, earrings, bracelets, necklaces and bridal jewellery
- Informational product cards with reference prices and ratings
- Enquiry links using email rather than cart or checkout actions
- Responsive desktop and mobile layout
- GitHub Pages and custom-domain ready

## Local setup

```bash
npm install
npm start
```

Open `http://localhost:3000` in your browser. Product imagery is loaded from Unsplash while the page is being developed; replace those URLs with owned product photography before launch.

## Deploy to GitHub Pages

```bash
npm run deploy
```

The `homepage` in `package.json` and `CNAME` file are configured for `aurenindia.com`.

## Update contact details

Change `contactEmail` near the top of `src/App.js` to the official Auren India enquiry address. Replace the placeholder reviews, statistics and reference prices with verified business information before publishing.
