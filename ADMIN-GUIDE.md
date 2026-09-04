# KOHO Visual — How to manage your portfolio

## Adding a new project

Open the file `src/data/projects.json` in any text editor and add a new block
inside the `[...]` array. Copy and paste this template:

```json
{
  "id": "project-04",
  "title": "Your Project Name",
  "category": "Residential",
  "year": "2025",
  "description": "One or two sentences about the project.",
  "cover": "/projects/project-04/cover.jpg",
  "images": [
    "/projects/project-04/01.jpg",
    "/projects/project-04/02.jpg",
    "/projects/project-04/03.jpg"
  ],
  "featured": true
}
```

Then put your images into the folder `public/projects/project-04/`.
That's it — no code changes needed.

---

## Recommended image sizes

| File     | Size           | Format | Weight       |
|----------|----------------|--------|--------------|
| cover    | 1200 × 900 px  | JPEG   | 200–400 KB   |
| gallery  | 1600 × 1200 px | JPEG   | 300–600 KB   |

Keep file names short and lowercase, e.g. `cover.jpg`, `01.jpg`, `kitchen.jpg`.

---

## Removing a project

Delete its block from `projects.json` and remove the image folder from `public/projects/`.

---

## Changing project order

Projects appear on the home page in the same order as they are listed in
`projects.json`. Move blocks up or down to reorder them.

---

## Updating studio info (About page)

Open `src/app/about/page.tsx` and edit the paragraph text and services list.
No design knowledge needed — just change the words inside the quote marks.

---

## Updating contact links

Two files to edit — both have a clearly labelled section at the top:

- `src/app/contact/page.tsx` — the Contact page list
- `src/components/Footer.tsx` — the footer links

To add a phone number later, find the commented block that starts with
`// Phone — uncomment when ready:` in each file and remove the `//` marks.

---

## Publishing changes

### First time (one-time setup, ~10 minutes)

1. Create a free account at [github.com](https://github.com)
2. Create a new repository and push this folder to it
3. Create a free account at [vercel.com](https://vercel.com)
4. Click **New Project** → import your GitHub repository → click **Deploy**
5. You get a free `*.vercel.app` address immediately

### Connecting your own domain

1. Buy a domain (e.g. `koho.studio`) at Namecheap or Cloudflare — ~$10–15/year
2. In Vercel: your project → **Settings** → **Domains** → type your domain → **Add**
3. Follow the DNS instructions shown — takes 5–10 minutes

### Publishing an update

After editing any file:

```bash
git add .
git commit -m "Add project: Desert Palisades"
git push
```

Vercel detects the push and rebuilds the site automatically in ~30 seconds.

---

## Local preview (optional)

If you want to see changes before publishing:

```bash
npm install   # run once
npm run dev   # open http://localhost:3000
```
