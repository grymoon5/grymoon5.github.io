# Updating the publication

## Add an article

Create a Markdown file in `src/content/blog/` with this frontmatter:

```yaml
---
title: Your article title
description: A one-line description shown on the article card.
pubDate: 2026-08-03
category: build-in-public
tags:
  - JavaScript
  - Supabase
coverImage: /images/your-article-cover.jpg
coverAlt: A concise description of the image
featured: false
draft: false
---
```

Valid categories are `case-studies`, `build-in-public`, and `career`. The article automatically appears on its series page. Set `draft: true` to keep unfinished work out of the site and RSS feed.

## Add pictures

Put JPG, PNG, or WebP files in `public/images/`, then reference them with a path beginning `/images/`. A `1600 x 900` image works well as an article cover.

Add an image inside an article with Markdown:

```md
![Description of the image](/images/your-image.jpg)
```

## Replace the 2D portrait

Add the final illustration to `public/images/`, then change `profileImage` in `src/site.ts`:

```ts
profileImage: '/images/aishwarya-illustration.png',
```

A `4:5` portrait, such as `1200 x 1500`, fits the About section best. The current 2D illustration remains as the placeholder until the final portrait is available.
