---
date: 2025-11-28T13:16:50+07:00
title: "Today I Learned: AWS CloudFormation in TypeScript"
tags: [aws, cloud, infrastructure]
---

Today I learned that AWS has a way to define CloudFormation stacks using TypeScript — which, in practice, feels a lot like “Terraform but in TypeScript.”

Instead of writing big YAML or JSON templates, you write regular TypeScript code that defines your infrastructure. You get all the nice things from a real language: variables, loops, functions, types, and editor autocomplete. Then it gets synthesized down into CloudFormation templates that AWS understands.

The workflow is pretty similar to Terraform in spirit: you describe your desired state, run a command, and AWS figures out how to create or update the resources. The twist is that your “config” is now code, which makes it easier to reuse patterns, share constructs across projects, and keep things DRY.

What I like most is that it lowers the mental barrier to spinning up infrastructure. If I’m already in a TypeScript codebase, staying in that world while defining infrastructure feels oddly natural — like I’m just importing one more library instead of switching to a completely different tooling stack.

I’m still very early in exploring this, but it’s exciting to know that I can lean on my existing TypeScript skills to manage AWS infrastructure, not just application code.

