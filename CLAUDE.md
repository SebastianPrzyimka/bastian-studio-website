# Bastian Studio website: project notes

Website for **Bastian Studio**, a one-person web design & digital marketing studio in Glasgow run by **Sebastian Przyimka** (sole trader). Astro 5 static site, deployed to Cloudflare Workers (static assets) from `main`.

## Commands
- `npm run dev`: local preview at http://localhost:4321
- `npm run build`: builds to `dist/` (must pass before every push)
- Deploy: push to `main`. Cloudflare runs `npm run build` + `npx wrangler deploy` (config in `wrangler.jsonc`).

## Where things live
- `src/data/site.ts`: name, phone, email, WhatsApp, Calendly, domain (`url`), Web3Forms key. Change contact details here only.
- `src/data/*.ts`: services, packages/price ranges/DIY table, FAQs, industry tabs, hero feed.
- `src/pages/`: one `.astro` file per page (file name = URL). `web-design-glasgow.astro` is the service-page template, `websites-for-salons.astro` the industry-page template, `guides/website-cost-scotland.astro` the guide template.
- `src/components/`: Header, Footer, ActionBar (phone bar), Logo (B mark), ContactSection, FreeCheck, Faq, ServicesAccordion, IndustryTabs.
- `src/layouts/BaseLayout.astro`: `<head>` (title, description, canonical, OG tags, favicons, business schema), header/footer.
- `src/styles/global.css`: all shared styles and breakpoints (1100 / 1000 / 760 / 640px).
- `src/scripts/site.ts`: vanilla JS for menu, accordion, FAQ, tabs, enquiry pre-fill (`data-enquiry` / `?enquiry=`) and Web3Forms submit.
- `public/`: favicon.svg/.ico, apple-touch-icon.png, share.png (1200×630 link preview), robots.txt, brand/ logo files.

## Brand
- Palette "Midnight & Ice Blue": midnight `#0A1020`, surfaces `#0F1830` / `#14203D`, ice blue accent `#9FD3F5`, deep blue on light `#1F6FB2`, text `#EEF4FA`, muted `#9AA8BC`, light sections `#F3F7FB`.
- Fonts (self-hosted via Fontsource, no Google Fonts requests): Geist (UI/body), Geist Mono (small uppercase labels), Instrument Serif italic (accent words in headings).
- Logo: the "B" mark (`src/components/Logo.astro`) + "Bastian" white / "Studio" ice blue.
- Look: elegant, modern, tech-premium, not flashy. Mostly dark sections with a few light ones.

## Writing rules (Sebastian's preferences)
- Plain English for small-business owners (salons, trades, dentists, physios, cafés…).
- First person **"I"**, never "we" (one-person studio). Don't say the studio is "new".
- **No em dashes (—)** in visible copy. Use commas, full stops, colons or brackets. En dashes in ranges (£500–£1,200) are fine.
- No invented statistics, reviews or client work. Real stats need a named source.
- Glasgow-based but serves the whole UK. Don't publish a street address.
- Don't scare people with costs: running costs are shown as "domain & hosting from around £20 a year", extras as optional.

## Current prices
One page from £495 · Starter (up to 5 pages) £1,195 · Business (up to 10 pages + booking + free logo) £1,995 · E-commerce £2,495.
Logos £149 · Social graphics £149 (10 templates) · Landing pages £395 · Automation £295 per setup · SEO from £195/month · Google Ads from £195/month + ad budget · Support from £35/month. Extra revisions £35/hour.

## Conventions
- External links: `target="_blank" rel="noopener"` plus a visible ↗ and an sr-only "(opens in a new tab)".
- Every page ends with `<ContactSection />` (except privacy, terms, 404); its "Get a quote" links point to `#contact`, otherwise `/#contact`.
- Before pushing: `npm run build`, then check pages at 360, 820 and 1440px wide for horizontal overflow.

## Not done yet
- Domain not bought yet (`site.url` is a placeholder `https://bastianstudio.co.uk`; also in `public/robots.txt`).
- No portfolio, reviews or Google Ads certification badge yet; add when available.
