# Suryabanshi Suraj — Official Website

Live site: [surajdemoportfolio.vercel.app](https://surajdemoportfolio.vercel.app/)

Official website for **Suryabanshi Suraj**, MLA from Dhamnagar Constituency and Cabinet Minister, Government of Odisha, India. The site serves as a public-facing platform for political presence, constituency development updates, and citizen engagement.

---

## Tech Stack

- **Next.js 15** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** — custom Navy/Gold design system
- **Google Sheets API** — server-side form submission logging via service account
- **Vercel** — hosting and deployment

---

## Features

### Bilingual Support (EN / ଓଡ଼ିଆ)
Full English and Odia translation via React Context API. Language can be toggled from the navbar. All UI text lives in [`/lib/translations.ts`](lib/translations.ts).

### Contact Form with Validation
- Fields: Name, Phone, Email, Subject, Constituency, Message
- Validates Indian phone numbers (10-digit, starting with 6–9) and email format
- Subject categories: Grievance, Meeting Request, Feedback, Media Enquiry, Other
- Submissions are posted to `/api/contact` and appended to a private Google Sheet with a timestamp

### Sections
| Section | Description |
|---|---|
| Hero | Full-screen intro with profile image and CTAs |
| About | Biography and political journey timeline (2014–2024) |
| Constituency | Development stats (200+ projects, ₹500Cr+ mobilised) and 6 key initiatives |
| News & Media | Lazy-loaded Facebook social feed |
| Gallery | Masonry image grid with hover effects |
| Contact | Validated form with Google Sheets backend |

### Other
- Floating WhatsApp button
- SEO: JSON-LD Person schema, OpenGraph, Twitter Card, canonical URL
- Responsive and mobile-friendly with hamburger nav
- Scroll-triggered navbar and smooth transitions throughout

---

## Project Structure

```
app/
  page.tsx              # Main single-page layout
  api/contact/route.ts  # Form submission API endpoint
  layout.tsx            # Root layout with metadata
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Constituency.tsx
  NewsMedia.tsx
  Gallery.tsx
  ContactForm.tsx
  WhatsAppButton.tsx
  Footer.tsx
lib/
  translations.ts       # All EN/Odia UI strings
  LanguageContext.tsx   # Language toggle context
```

---

## Environment Variables

Create a `.env.local` file with the following for the Google Sheets integration:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=...
GOOGLE_PRIVATE_KEY=...
GOOGLE_SHEET_ID=...
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
