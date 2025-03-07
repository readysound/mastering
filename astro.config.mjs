// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'My Docs',
          social: {
              github: 'https://github.com/withastro/starlight',
          },
          sidebar: [
              {
                  label: 'Introduction',
                  autogenerate: { directory: 'introduction' },
              },
              {
                  label: 'Guides',
                  autogenerate: { directory: 'guides' },
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