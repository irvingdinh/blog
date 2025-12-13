# Posts

Short-form content that takes **less than 2 minutes to read**. Quick thoughts, updates, observations — anything you'd
share on social media but want to own on your blog.

## Folder Structure

```
posts/{year}/{month}/{slug}/index.md
```

Example:

```
posts/2025/11/quick-thought-on-ai/index.md
```

Keep all related assets (images, audio, video) inside the same folder as the post.

## Frontmatter

```yaml
---
date: 2025-11-28                   # required (date only)
date: 2025-11-28T14:30:00          # required (with time, for multiple posts per day)
title: "Optional Title"            # optional
tags: [ tag1, tag2 ]               # optional
description: "Short summary..."    # optional (recommended, ~120-160 chars)
---
```

When posting multiple times per day, include the time (ISO 8601 format) to ensure correct ordering.

## Slug Guidelines

- Use lowercase letters
- Separate words with hyphens
- Keep it descriptive but concise
- Examples: `quick-thought-on-ai`, `new-desk-setup`
