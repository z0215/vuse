# V(Vite + Vue)use

This is a project template built with [Vue 3.x](https://vuejs.org/) and [Vite 6.x](https://vite.dev/), inspired by [Vitesse](https://github.com/antfu-collective/vitesse).

## Features

- [UnoCSS](https://unocss.dev/): I really love its philosophy, and it works amazingly well with AI programming.

- [Icones](https://icones.js.org/): a comprehensively rich icon source

- TypeScript: the type checking benefits me greatly, helping us write robust code

- File-based routing: reduces manual maintenance overhead

- Layout & Theme systems

- [Auto-imported](https://github.com/unplugin/unplugin-auto-import) core APIs: Based on project experience, more auto-imports mean higher maintenance costs. I only
  auto-import Vue APIs/types and APIs under the auto-imports directory

- VS Code Perks: Recommended extensions, code snippets, and file nesting, delivering a clean directory structure and developer-friendly experience

- Style Enforcement: Code and commit message standardization via ESLint, and Commitlint

- Balanced encapsulation: Moderate encapsulation delights, excessive encapsulation frustrates

## Try it now!

> Vuse requires Node >= 23.9.0 & pnpm = 10.8.1

### Development

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

## Why

### Why this project?

I want to kickstart projects with full customizability while keeping things dead simple.

### Why not Vitesse?

Vitesse is an excellent template (this project is actually inspired by it). I needed something fully customizable yet minimalist, so Vitesse wasn't the right fit.

### Why not Nuxt?

Nuxt is a full-featured framework - it's overkill for my lean projects.
