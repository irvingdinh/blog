# Articles

Long-form content that takes **5+ minutes to read**. Think in-depth essays, tutorials, deep dives, or thoughtful
explorations of a topic.

## Folder Structure

```
articles/{year}/{month}/{slug}/index.md
```

Example:

```
articles/2025/11/building-a-better-blog/index.md
```

Keep all related assets (images, audio, video) inside the same folder as the article.

## Frontmatter

```yaml
---
title: "Your Article Title"        # required
date: 2025-11-28                   # required
tags: [ tag1, tag2 ]               # optional
description: "A brief summary"     # optional
draft: false                       # optional, defaults to false
---
```

## Slug Guidelines

- Use lowercase letters
- Separate words with hyphens
- Keep it descriptive but concise
- Examples: `building-a-better-blog`, `why-i-switched-to-rust`
