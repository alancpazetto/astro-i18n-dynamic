import { defineConfig } from 'astro/config';
import paraglide from '@inlang/paraglide-astro';

export default defineConfig({
  // Use astro's i18n routing for deciding which language to use
  i18n: {
    locales: ['en', 'pt-br'],
    defaultLocale: 'en',
  },
  output: 'server',
  integrations: [
    paraglide({
      // recommended settings
      project: './project.inlang',
      outdir: './src/paraglide', //where your files should be
    }),
  ],
});
