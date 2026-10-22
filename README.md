# Elite Aura Farmhouse — Static Website

A vanilla HTML, CSS and JavaScript version of the Elite Aura Farmhouse public website, prepared for GitHub Pages. It preserves the original project's venue imagery and luxury green/gold visual direction while removing React, Vite, Express, the owner portal, and local booking/financial data.

## Features

- Responsive layout for desktop and mobile
- Venue overview, gallery with lightbox, event types, package pricing and guidelines
- Booking inquiry form that prepares a WhatsApp message
- Floating WhatsApp contact button
- No backend, database, build tools, or package installation required

## WhatsApp configuration

The configured WhatsApp number is stored in `script.js` as `WHATSAPP_NUMBER` and in the floating link in `index.html`. It is set to `923139535424` (Pakistan country code, without the leading zero). Update both places if the business number changes.

## Run locally

Open `index.html` in a browser. For a more realistic local web-server test, run Python from this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new **public** GitHub repository, for example `elite-aura-farmhouse`.
2. Upload the contents of this folder (the `index.html`, `style.css`, `script.js`, and `assets` folder) to the repository root. Do not upload the original React project or its private data file.
3. In the repository, open **Settings → Pages**.
4. Under build and deployment, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site. The URL will be shown in the Pages settings.

## Booking behavior and limitations

The form does not save information to this website or any database. It composes a message and opens WhatsApp; the visitor must review and send the message in WhatsApp. Availability is not automatically checked, and a WhatsApp enquiry is not a confirmed reservation.

The original owner portal and financial management features are intentionally excluded from this public static version. The swimming pool image is presented as a concept/upcoming feature; visitors are prompted to confirm its status. Package prices are shown as indicative and should be verified with management.

## Privacy and security

This static build intentionally excludes the original `src/data/farmhouse_store.json`, Express server, owner portal, environment files, and all app dependencies. Never add customer records, owner credentials, API keys, or financial data to a public repository.
