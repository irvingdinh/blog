---
date: 2025-11-28T13:58:02+07:00
title: "Writing Blog Posts From Telegram With n8n and Codex CLI"
tags: [automation, n8n, blogging, ai]
---

Today I set up a small n8n workflow that lets me turn a Telegram message into a blog post — including this one.

The flow is simple: I drop a rough idea into Telegram, n8n picks it up, sends the text to Codex CLI, and lets it shape everything into a short, readable post before committing it to this repo and pushing it live.

What I love most is how little friction there is now. I don’t have to open an editor, think about formatting, or worry about polishing every sentence. I just write like I’m texting a friend, and the automation handles the rest, which makes it way more likely I’ll actually publish quick updates like this.

I’ll write a proper article soon that walks through the whole setup — from the Telegram trigger, to how Codex CLI fits into the pipeline, to how the final Markdown post ends up on the blog automatically.

