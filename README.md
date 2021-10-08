# NextJS (+ Typescript, Chakra-UI) on Github-pages template

This is NextJS SPA Template for Deploying Github Pages with using github actions.  
It is very easy to start your own spa page!

Preinnstalled stuffs.

- NextJS
- Typescript
- eslint
- prettier
- chakra-ui
- GoogleFont (Noto Sans JP)
- Fixed Header / Footer Layout.

## Prepare

### 1. Replace for your own project

- `package.json`

```diff
{
--  "name": "nextjs-githubpages-template",
++  "name": "<your-project-name>",
  "version": "0.1.0",
  "private": true,
  ....
```

- `nuxt.config.js`

```diff
const optimizedImages = require('next-optimized-images');
-- const repositoryName = 'nextjs-githubpages-template';
++ const repositoryName = '<your-github-repository-name>';
const nextConfig = {
....
```

### 2. Initial Deploy

1. Push the code to `main` branch.
2. Github actions will build the code and deploy to `gh-pages` branch. Wait a minutes.
3. Set `gh-pages` branch's `/root` as Github pages at your github repository setting page.

### 3. Done!!

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```
