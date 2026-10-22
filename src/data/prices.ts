// "Do it yourself vs hire a pro" comparison rows.
export const diy = [
  {
    "k": "Your time",
    "diy": "Evenings and weekends learning the tool",
    "pro": "A couple of short calls and a review"
  },
  {
    "k": "Design",
    "diy": "The same templates thousands of others use",
    "pro": "Designed around your business and customers"
  },
  {
    "k": "Words",
    "diy": "You write it all yourself",
    "pro": "Copy written to sell, with you"
  },
  {
    "k": "Speed & mobile",
    "diy": "Often slow and clunky on phones",
    "pro": "Built fast and tested on every device"
  },
  {
    "k": "Google & SEO",
    "diy": "Basics only, and easy to get wrong",
    "pro": "Set up properly, including Google Maps"
  },
  {
    "k": "Enquiries",
    "diy": "Looks nice, but passive",
    "pro": "Built around calls, forms and bookings"
  },
  {
    "k": "When it breaks",
    "diy": "Help forums and support tickets",
    "pro": "A local person who picks up the phone"
  },
  {
    "k": "True cost",
    "diy": "Monthly fees + your time + missed enquiries",
    "pro": "A one-off investment that pays for itself"
  }
];
// Typical UK price ranges (chart on the Prices page). lo/hi in £; `text` overrides the label.
export const priceRanges = [
  {
    "label": "DIY website builder",
    "note": "Wix, Squarespace etc., plus your time",
    "lo": 0,
    "hi": 400,
    "text": "£200–£400 / year"
  },
  {
    "label": "One-page website",
    "note": "Single scrolling page",
    "lo": 500,
    "hi": 1200
  },
  {
    "label": "Small business site, up to 5 pages",
    "note": "From a freelancer",
    "lo": 800,
    "hi": 3000
  },
  {
    "label": "Online shop",
    "note": "Products, payments, delivery",
    "lo": 2000,
    "hi": 10000,
    "plus": true
  },
  {
    "label": "Larger site or agency build",
    "note": "More pages, bespoke design, features",
    "lo": 3000,
    "hi": 12000
  }
];
// Website packages. `msg` pre-fills the contact form.
export const packages = [
  {
    "msg": "Hi Sebastian, I’m interested in the Starter package (from £1,195). ",
    "name": "Starter",
    "for": "New and small businesses who need a professional presence, fast.",
    "price": "£1,195",
    "popular": false,
    "inc": [
      "Up to 5 pages",
      "Custom design, mobile-first",
      "Contact form & click-to-call",
      "Google Business Profile setup",
      "Basic on-page SEO",
      "1 month of support included"
    ]
  },
  {
    "msg": "Hi Sebastian, I’m interested in the Business package (from £1,995). ",
    "name": "Business",
    "for": "Established businesses that want a steady flow of enquiries.",
    "price": "£1,995",
    "popular": true,
    "inc": [
      "Up to 10 pages",
      "Free logo & brand kit",
      "Copywriting included",
      "Online booking or quote form",
      "Full local SEO setup",
      "Call & form tracking",
      "Reviews & gallery sections"
    ]
  },
  {
    "msg": "Hi Sebastian, I’m interested in the E-commerce package (from £2,495). ",
    "name": "E-commerce",
    "for": "Shops ready to sell online across the UK.",
    "price": "£2,495",
    "popular": false,
    "inc": [
      "Up to 25 products loaded for you",
      "Card, Apple Pay & Google Pay",
      "Delivery & click-and-collect",
      "Stock & order management",
      "Google Shopping ready",
      "Training on running your shop"
    ]
  }
];
