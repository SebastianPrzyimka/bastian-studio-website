// Services shown in the homepage accordion. Edit text and prices here.
export interface Service { group: string; name: string; short: string; price: string; when: string; what: string; note?: string; teaser: string; benefits: { t: string; d: string }[] }
export const services: Service[] = [
  {
    "group": "Get online",
    "name": "Websites",
    "short": "a website",
    "price": "From £495 (one page) · £1,195 (up to 5 pages)",
    "when": "Live in around 2–4 weeks",
    "what": "A custom-designed website, WordPress or hand-built, that looks great on every phone, loads fast and is built to turn visitors into calls, bookings and enquiries.",
    "benefits": [
      {
        "t": "More enquiries from the same visitors",
        "d": "Clear calls-to-action, quote forms and click-to-call on every page."
      },
      {
        "t": "Look like the best choice",
        "d": "Professional design that builds trust before they’ve even called."
      },
      {
        "t": "Easy to update",
        "d": "Change prices, photos and text yourself, or ask me."
      },
      {
        "t": "Ready for Google",
        "d": "Built with SEO, speed and Google Business Profile in mind from day one."
      }
    ],
    "teaser": "Fast sites that bring in enquiries"
  },
  {
    "group": "Get online",
    "name": "E-commerce",
    "short": "an online shop",
    "price": "From £2,495",
    "when": "Selling in around 4–6 weeks",
    "what": "An online shop that’s easy to run (products, payments, delivery and stock), so you can sell around the clock.",
    "benefits": [
      {
        "t": "Sell 24/7",
        "d": "Take orders while the shop is closed."
      },
      {
        "t": "Every way to pay",
        "d": "Card, Apple Pay, Google Pay and PayPal."
      },
      {
        "t": "Simple to manage",
        "d": "Add products, track orders and stock from one dashboard."
      },
      {
        "t": "Reach beyond Glasgow",
        "d": "Ship UK-wide and appear in Google Shopping."
      }
    ],
    "teaser": "Sell online, 24/7"
  },
  {
    "group": "Get online",
    "name": "Logos & branding",
    "short": "a logo",
    "price": "From £149 · free with the Business package",
    "when": "Ready in around 1–2 weeks",
    "what": "A professional logo, refined and delivered as proper vector files, plus a simple brand kit (colours, fonts and files) so you look consistent everywhere.",
    "benefits": [
      {
        "t": "Look established",
        "d": "A professional identity helps you charge what you’re worth."
      },
      {
        "t": "Consistent everywhere",
        "d": "Signage, vans, uniforms, social media and your website."
      },
      {
        "t": "Every file you need",
        "d": "Print, web and social versions, ready to hand to any printer."
      },
      {
        "t": "Free with the Business package",
        "d": "Choose the Business website package and your logo & brand kit are included."
      }
    ],
    "teaser": "Look established everywhere"
  },
  {
    "group": "Get found",
    "name": "SEO",
    "short": "SEO",
    "price": "From £195 / month · no long contract",
    "when": "Growing results over 3–6+ months",
    "what": "Search engine optimisation: improving your website and Google profile so you show up for free when locals search for what you do.",
    "benefits": [
      {
        "t": "Found by people ready to buy",
        "d": "Appear for searches like “physio Glasgow” or “electrician near me”."
      },
      {
        "t": "Free, ongoing traffic",
        "d": "You don’t pay per click. Good rankings keep working month after month."
      },
      {
        "t": "Stronger on Google Maps",
        "d": "Optimised Google Business Profile, reviews and local pages."
      },
      {
        "t": "Less reliance on ads",
        "d": "Over time, SEO lowers your cost per customer."
      }
    ],
    "teaser": "Get found on Google for free"
  },
  {
    "group": "Get found",
    "name": "Google Ads",
    "short": "Google Ads",
    "price": "From £195 / month + your ad budget",
    "when": "Enquiries within days",
    "what": "Paid adverts at the top of Google. I set up, write and manage campaigns that bring calls and enquiries, and track every pound.",
    "benefits": [
      {
        "t": "Top of Google, straight away",
        "d": "No waiting for rankings. Appear the day it goes live."
      },
      {
        "t": "Only pay for clicks",
        "d": "Set a budget you’re comfortable with and change it any time."
      },
      {
        "t": "Reach the right people",
        "d": "Target by postcode, time of day and exact search terms."
      },
      {
        "t": "See what you get back",
        "d": "Calls and forms tracked, in a plain-English monthly report."
      }
    ],
    "teaser": "Top of Google from day one"
  },
  {
    "group": "Get found",
    "name": "Social media graphics",
    "short": "social media graphics",
    "price": "From £149 for 10 templates",
    "when": "First set in around 1 week",
    "what": "On-brand graphics and templates for Instagram, Facebook and more: offers, before-and-afters, reviews and announcements.",
    "benefits": [
      {
        "t": "A professional feed",
        "d": "Consistent posts that match your brand and website."
      },
      {
        "t": "Save hours every week",
        "d": "Reusable templates you can update in minutes."
      },
      {
        "t": "Promote what pays",
        "d": "Graphics for offers, new services and seasonal campaigns."
      }
    ],
    "teaser": "A professional, consistent feed"
  },
  {
    "group": "Get more customers",
    "name": "Landing Pages & Lead Tracking",
    "short": "landing pages",
    "price": "From £395",
    "when": "Live in around 1–2 weeks",
    "what": "A focused landing page with one clear offer, plus call and form tracking, so you know exactly which enquiries come from where.",
    "note": "This sets up the page and tracking. Bringing visitors to it through Google Ads or SEO is a separate service.",
    "benefits": [
      {
        "t": "More enquiries from the same visitors",
        "d": "A focused page with one clear next step."
      },
      {
        "t": "Know where every lead came from",
        "d": "Track calls and forms back to Google, ads or social."
      },
      {
        "t": "Faster follow-up",
        "d": "Leads land in one place, ready to call back."
      }
    ],
    "teaser": "Turn visitors into enquiries"
  },
  {
    "group": "Get more customers",
    "name": "Automation",
    "short": "automation",
    "price": "From £295 per setup",
    "when": "Saving time from week one",
    "what": "Connecting your website, email, booking and CRM so the repetitive admin happens on its own.",
    "benefits": [
      {
        "t": "Instant replies",
        "d": "Every enquiry gets a response in seconds, even at midnight."
      },
      {
        "t": "Fewer no-shows",
        "d": "Automatic booking confirmations and reminders by email or text."
      },
      {
        "t": "More reviews",
        "d": "Automatic review requests after each job or appointment."
      },
      {
        "t": "Evenings back",
        "d": "Less copying, pasting and chasing."
      }
    ],
    "teaser": "Less admin, faster replies"
  },
  {
    "group": "Get more customers",
    "name": "Ongoing support",
    "short": "support",
    "price": "From £35 / month",
    "when": "From day one",
    "what": "Hosting, security, backups, updates and changes, plus a monthly check on what could work harder.",
    "benefits": [
      {
        "t": "Safe and up to date",
        "d": "Security updates, backups and monitoring handled for you."
      },
      {
        "t": "Changes when you need them",
        "d": "New prices, photos or pages? Just send a message."
      },
      {
        "t": "A real person to call",
        "d": "Someone local who knows your business."
      }
    ],
    "teaser": "Hosting, updates, a person to call"
  }
];
export const serviceGroups = ['Get online', 'Get found', 'Get more customers'];
