// @ts-check
import { defineConfig } from 'astro/config';

// Organisation (user) Pages site → served at the domain root.
// The apairo package docs live alongside it as a project page under /apairo/.
export default defineConfig({
  site: 'https://apairo-robotics.github.io',
  build: {
    inlineStylesheets: 'always',
  },
});
