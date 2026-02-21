# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # funfacts — React + TypeScript + Vite

    Small demo app showing a Vite + React + TypeScript setup with ESLint configured. Use this README for local development and quick reference.

    Project structure

    - `src/` — application source
    - `public/` — static assets
    - `index.html`, `vite.config.ts`, `package.json` — Vite app files

    Quick start (local)

    Prerequisites: Node.js 18+, npm or yarn

    Install dependencies and run dev server:

    ```bash
    cd funfacts
    npm install
    npm run dev
    ```

    Build for production:

    ```bash
    cd funfacts
    npm run build
    ```

    Linting

    ```bash
    cd funfacts
    npm run lint
    ```

    Notes

    - This project includes ESLint configuration examples in `eslint.config.js`.
    - To enable type-aware ESLint rules, ensure `tsconfig.app.json` and `tsconfig.node.json` are present and referenced by ESLint.

    Customization

    - Swap React compiler or change plugins in `vite.config.ts`.
    - Update styles in `src/App.css` or add components to `src/`.

    If you'd like, I can add CONTRIBUTING.md, ISSUE templates, or a short demo script next.
