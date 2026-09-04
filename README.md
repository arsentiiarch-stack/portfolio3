# KOHO Visual — Portfolio Site

A minimal, dark-themed portfolio site for **KOHO Visual**, an architectural visualization studio.

Built with **Next.js 14 + Tailwind CSS**, hosted for free on **Vercel**.

---

## Stack

| Layer | Tool |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + CSS custom properties |
| Fonts | Inter + Syne (Google Fonts) |
| Hosting | Vercel (free) |
| Domain | Any registrar (Namecheap, Cloudflare, etc.) |

---

## Project structure

```
koho/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, fonts, SEO metadata
│   │   ├── globals.css         # Design tokens, base styles
│   │   ├── page.tsx            # Home — project grid
│   │   ├── about/page.tsx      # About page
│   │   ├── contact/page.tsx    # Contact page
│   │   ├── not-found.tsx       # 404 page
│   │   └── work/[id]/page.tsx  # Individual project page
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── data/
│       └── projects.json       # ← Edit this to manage your portfolio
├── public/
│   └── projects/               # Put your render images here
│       ├── project-01/
│       │   ├── cover.jpg
│       │   ├── 01.jpg
│       │   └── ...
│       └── ...
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## How to add / update a project

Open `src/data/projects.json` and add a new entry:

```json
{
  "id": "project-04",
  "title": "Your Project Name",
  "category": "Residential",
  "year": "2025",
  "description": "Short description shown on the project page.",
  "cover": "/projects/project-04/cover.jpg",
  "images": [
    "/projects/project-04/01.jpg",
    "/projects/project-04/02.jpg"
  ],
  "featured": true
}
```

Then drop your images into `public/projects/project-04/`. That's it — no code changes needed.

**Recommended image sizes:**
- Cover: 1200 × 900 px (4:3), JPEG, ~200–400 KB
- Gallery images: 1600 × 1200 px, JPEG, ~300–600 KB

---

## How to add a phone number later

In two files, uncomment the phone block:

**`src/components/Footer.tsx`**
```ts
// Phone — uncomment when ready:
{
  label: "Phone",
  href: "tel:+10000000000",
  external: false,
},
```

**`src/app/contact/page.tsx`** — same block, same comment.

---

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel (free)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project → import your repo
3. Click Deploy — done, you get a free `.vercel.app` URL instantly

## Connect your own domain

1. Buy a domain (e.g. `koho.studio`) on Namecheap or Cloudflare — ~$10–15/year
2. In Vercel dashboard → your project → Settings → Domains → add your domain
3. Follow the DNS instructions (takes 5–10 minutes)

---

## Update contact links

Edit the `contacts` array in `src/app/contact/page.tsx` and the `contactLinks` array in `src/components/Footer.tsx`.

---

## SEO

Metadata is in `src/app/layout.tsx`. Update:
- `title` — studio name
- `description` — one-line description
- `url` — your actual domain once live
- Replace `/public/og-image.jpg` with a 1200 × 630 px preview image
