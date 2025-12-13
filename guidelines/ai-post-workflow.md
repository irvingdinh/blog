# AI Post Workflow

This guideline is designed to be read by an AI agent.

## Overview

- **Content type**: Posts only (short-form, < 2 minutes read). Articles are written by the author, not AI.
- **Writing style**: Friendly and casual
- **Input method**: Raw ideas/content pasted directly in the chat
- **Autonomy**: You (AI agent) have my trust — do everything yourself without asking me, and please don't fail me ;)

## Example Request Format

```
Please help following the guideline at `guidelines/ai-post-workflow.md` to write me a post about:

[Your raw ideas, thoughts, or content here]
```

## Workflow

When you are requested to write a post, follow these steps:

### Step 0: Git Setup

Using Git to fetch all changes, checkout the `main` branch, and pull from origin to ensure everything is up to date.

### Step 1: Content Refinement

**Important**: Keep the content as raw and authentic as possible. Do NOT embellish, expand, or add new information that wasn't in the original input.

Your job is minimal editing only:
- Fix spelling and grammar errors
- Light rephrasing for clarity (only when sentences are confusing or awkward)
- Minor structural adjustments to improve readability (e.g., paragraph breaks, simple formatting)
- Maintain the author's voice and casual tone

**Do NOT**:
- Add examples, explanations, or details the author didn't provide
- Expand on ideas or "fill in the gaps"
- Make the content sound more polished or professional than the original
- Add transitions, conclusions, or filler content

### Step 2: Context Research

- Check at least 10 recent posts/articles to understand the blog's voice and themes
- Search for any related past content that could provide context
- Use this research to intelligently determine appropriate **tags** that are consistent with existing tag vocabulary
- Note: Do NOT add links to related posts — the author will handle linking themselves

### Step 3: Create the Post

Following `src/content/posts/README.md`:

- **Folder**: `src/content/posts/{year}/{month}/{slug}/index.md`
- **Slug**: Intelligently generate a descriptive, concise slug based on the content
- **Title**: Intelligently generate an appropriate title (or omit if the content works better without one)
- **Date**: Use the current date
- **Tags**: Based on research from Step 2
- **Description**: Add a short description (~120-160 chars) derived from the post content (usually the first sentence/paragraph). Do not invent new info.

### Step 4: Build & Verify

Run the build and any checks to ensure the new post is good to go. Fix any issues that arise.

### Step 5: Git Commit & Push

- Commit with message format: `feat: Added new post about ...`
- Push directly to the `main` branch
- Resolve any issues that occur during this process

