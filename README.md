# Bastian Studio website

The website for Bastian Studio, web design and digital marketing in Glasgow. Built with [Astro](https://astro.build) as a fast static site, hosted on Cloudflare Pages.

## Run it on your computer

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install      # first time only
npm run dev      # opens a live preview at http://localhost:4321
npm run build    # builds the finished site into the dist/ folder
npm run preview  # previews the built site
```

## Where to change things

| What | File |
|---|---|
| Phone, email, WhatsApp, Calendly, domain, form key | `src/data/site.ts` |
| Services (text, prices, timings) | `src/data/services.ts` |
| Website packages, UK price ranges, DIY vs pro table | `src/data/prices.ts` |
| FAQs (homepage, web design page, salon page) | `src/data/faqs.ts` |
| "Your kind of business" tabs | `src/data/industries.ts` |
| Hero "while you're busy" examples | `src/data/feed.ts` |
| Page text and layout | `src/pages/*.astro` |
| Header, footer, contact form, logo | `src/components/` |
| Colours, spacing, responsive rules | `src/styles/global.css` |
| Menu, accordions, tabs, form sending | `src/scripts/site.ts` |
| Favicon, link-preview image, robots.txt | `public/` |

Pages and their web addresses:

| File | Address |
|---|---|
| `src/pages/index.astro` | `/` |
| `src/pages/prices.astro` | `/prices` |
| `src/pages/about.astro` | `/about` |
| `src/pages/web-design-glasgow.astro` | `/web-design-glasgow` (service page template) |
| `src/pages/websites-for-salons.astro` | `/websites-for-salons` (industry page template) |
| `src/pages/guides/index.astro` | `/guides` |
| `src/pages/guides/website-cost-scotland.astro` | `/guides/website-cost-scotland` |
| `src/pages/privacy.astro`, `terms.astro` | `/privacy`, `/terms` |
| `src/pages/404.astro` | shown for any page that doesn't exist |

**Add a new service or industry page:** copy `web-design-glasgow.astro` or `websites-for-salons.astro`, rename it (the file name becomes the web address), change the text, and add its FAQs to `src/data/faqs.ts`. **Add a guide:** copy `guides/website-cost-scotland.astro` and add a row for it in `guides/index.astro`.

## Contact forms (Web3Forms)

The contact form and the free website check send emails through [Web3Forms](https://web3forms.com) (free, 250 submissions a month).

1. Go to web3forms.com, enter `bastianstudioweb@gmail.com` and get your **access key** (sent by email).
2. Paste it into `src/data/site.ts`: `web3formsKey: 'your-key-here'`.
3. Commit and push. Cloudflare rebuilds the site automatically.

Until the key is added, the forms show a message asking people to email or call instead.

## Deploy on Cloudflare Pages (free)

1. Sign up at [dash.cloudflare.com](https://dash.cloudflare.com).
2. **Workers & Pages → Create → Pages → Connect to Git** and choose this GitHub repository.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variable: `NODE_VERSION` = `22`
4. **Save and Deploy.** You'll get a free `*.pages.dev` address straight away.
5. Every push to the `main` branch updates the live site automatically.

### Connect your domain

1. Buy `bastianstudio.co.uk` (Cloudflare Registrar sells domains at cost, or use any registrar).
2. In your Pages project: **Custom domains → Set up a custom domain** and follow the steps.
3. If the domain isn't `bastianstudio.co.uk`, update `url` in `src/data/site.ts` and the sitemap line in `public/robots.txt`.

## After launch

- Add the site to [Google Search Console](https://search.google.com/search-console) and submit `https://bastianstudio.co.uk/sitemap-index.xml`.
- Create your [Google Business Profile](https://www.google.com/business/) for Bastian Studio, linking to the website.
