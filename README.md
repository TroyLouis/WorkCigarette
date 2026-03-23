# Brand Site

A Next.js landing page with email signup to gauge interest in your product.

## Getting Started

1. **Install dependencies**

   ```bash
   cd brand-site && npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## What's Included

- **Landing page** — Clean, responsive layout with a headline and waitlist signup
- **Email signup** — Form that collects emails and stores them in `data/signups.json`
- **API route** — `POST /api/signup` for form submissions (validates email, avoids duplicates)
- **Tailwind CSS** — Custom colors (cream, ink, warm, accent) you can tweak in `tailwind.config.ts`

## Customization

- **Brand name / copy** — Edit `src/app/page.tsx` and `src/app/layout.tsx` (metadata)
- **Colors** — Update the `colors` section in `tailwind.config.ts`
- **Fonts** — Change `Outfit` and `DM_Sans` in `src/app/layout.tsx`

## Production Email Setup

The signup API stores emails in a JSON file for local testing. For production, consider:

- **Resend** — Transactional email + audience
- **ConvertKit** or **Mailchimp** — Marketing lists
- **Airtable** or **Google Sheets** — Simple data storage

Update `src/app/api/signup/route.ts` to call your chosen service instead of writing to a file.

## Adding More Pages

Create new files in `src/app/`, for example:

- `src/app/about/page.tsx` → `/about`
- `src/app/contact/page.tsx` → `/contact`

Add a shared header/navigation in `src/app/layout.tsx` if you want links between pages.
