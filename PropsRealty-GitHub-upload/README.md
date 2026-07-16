# Props Realty Inc. — Coming Soon

Static Astro + Tailwind landing page for Props Realty Inc.

## Images

The supplied Jax and Mario portraits, full Props Realty logo, and pin favicon are stored in `public/images/` and `public/favicon.png`. Add an optional custom background as `public/images/hero.jpg`; otherwise the configured architectural image is used.

## Google Sheets form connection

Deploy a Google Apps Script Web App that accepts POST fields named `name`, `email`, `phone`, and `interest`. Copy `.env.example` to `.env` and set `PUBLIC_GOOGLE_SCRIPT_URL` to the deployed Web App URL.

## Local use

Install dependencies with `npm install`, start with `npm run dev`, and create the production site with `npm run build`.
