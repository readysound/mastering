// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Readysound',
          social: {
              github: 'https://github.com/withastro/starlight',
          },
          sidebar: [
              {
                  label: 'Introduction',
                  autogenerate: { directory: 'introduction' },
              },
              {
                label: 'Fundamentals',
                autogenerate: { directory: 'fundamentals' },
            },
              {
                  label: 'Signal Processing',
                  autogenerate: { directory: 'signal processing' },
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
          ],
      }),
	],

  adapter: vercel(),
});