# AGENT Instructions

This repository holds the marketing site for **Obod Soft**. It is built with Next.js, React and TypeScript. The project is primarily a static website that can be exported and hosted on platforms such as GitHub Pages.

## Using the Application

- Install dependencies with `npm install`.
- For local development, run `npm run dev` and visit `http://localhost:3000`.
- To create a production build, run `npm run build`.
- A static export can be generated with `npm run build && npm run export` which outputs the site in the `out/` directory.

## Testing and Linting

- Run unit tests with `npm test`.
- Check lint rules using `npm run lint`.

## Project Layout

- `src/app/` contains the Next.js pages and layout files.
- `src/components/` holds reusable React components.
- `src/utils/` includes utility functions (e.g., animations).
- Static assets such as images reside in `public/`.

Please make sure tests and lint checks pass before submitting changes.
