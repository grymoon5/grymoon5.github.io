# Articles by Aishwarya

My personal publication for writing about full-stack engineering, geospatial systems, community tools, and career lessons.

**Live site:** [grymoon5.github.io](https://grymoon5.github.io/)

## About the project

This is a custom Astro publication designed around my work as a geospatial software engineer and technical writer. It includes:

- Case studies that break down geospatial and engineering concepts
- Build in Public notes from tools and systems I am developing
- Career Notes about hiring, confidence, and professional growth
- #SpotMe recordings from talks, panels, and community sessions
- Light and dark themes
- Article view counts and an RSS feed

The Midnight Contour visual system uses warm timber black, dark bark, paper white, copper, and olive. Space Mono leads the interface, Inter carries body copy, and JetBrains Mono handles article metadata and spatial coordinates.

## Built with

- [Astro](https://astro.build/)
- Markdown and MDX content collections
- TypeScript
- Tailwind CSS
- GitHub Actions
- GitHub Pages

## Run locally

Install [Node.js](https://nodejs.org/) 24 or later, then run:

```bash
npm install
npm run dev
```

Astro will print the local development URL in the terminal.

Other useful commands:

```bash
npm run build
npm run preview
```

## Publish an article

Create a Markdown or MDX file in `src/content/blog/`:

```yaml
---
title: Your article title
description: A one-line summary shown on the article card.
pubDate: 2026-08-05
category: build-in-public
tags:
  - JavaScript
  - Supabase
coverImage: /images/your-article-cover.jpg
coverAlt: A concise description of the cover image
featured: false
draft: false
---
```

Valid categories are:

- `case-studies`
- `build-in-public`
- `career`

Articles are sorted by publication date, newest first. Set `draft: true` to exclude an unfinished article from the website and RSS feed.

Place article images in `public/images/` and reference them from Markdown like this:

```md
![Description of the image](/images/your-image.jpg)
```

See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for the complete content workflow.

## Project structure

```text
src/
  components/       Reusable article and page components
  content/blog/     Markdown and MDX articles
  layouts/          Shared page and article layouts
  pages/            Website routes and RSS feed
  site.ts           Navigation, social links, talks, and site metadata
  styles.css        Global theme and responsive styles
public/images/      Portrait, covers, and article images
.github/workflows/  GitHub Pages deployment workflow
```

## Deployment

Every push to the `main` branch starts the GitHub Actions workflow in `.github/workflows/deploy.yml`. The workflow installs dependencies, builds the static Astro site, and deploys the generated `dist/` directory to GitHub Pages.

```bash
git add .
git commit -m "Publish new article"
git push origin main
```

Deployment progress is available under the repository's **Actions** tab.

## Author

**Aishwarya Elango**

Full-Stack Engineer (Geospatial), Community & Programs Lead at Women Devs SG, and Technical Writer.

- [LinkedIn](https://www.linkedin.com/in/aishwarya-elango/)
- [Women Devs SG](https://womendevssg.netlify.app/)

## License

Copyright (c) 2026 Aishwarya Elango. All rights reserved.
