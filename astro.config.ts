// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  build: {
    inlineStylesheets: 'auto',
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true, // don't touch this!
  },
});
