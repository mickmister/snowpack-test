/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  exclude: ['server/**'],
  workspaceRoot: '..',
  alias: {
    "@shared": "../shared"
  },
  mount: {
    /* ... */
  },
  plugins: [
    // ["tsconfig-paths-snowpack-plugin", {/* See Options */}],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
