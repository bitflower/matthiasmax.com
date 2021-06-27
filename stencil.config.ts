import { Config } from '@stencil/core';
import dotenvPlugin from 'rollup-plugin-dotenv';

const LANG = process.env.MMLANG || 'de';
console.log(`Rendering Language: `, LANG);

export const config: Config = {
  taskQueue: 'async',
  buildEs5: true,
  env: {
    LANG: LANG,
  },
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    safari10: true,
    scriptDataOpts: true,
    shadowDomShim: true,
  },
  srcIndexHtml: `src/index.${LANG}.html`,
  outputTargets: [
    {
      type: 'www',
      baseUrl: `https://matthiasmax.${LANG === 'de' ? 'de' : 'com'}/`,
      prerenderConfig: './prerender.config.ts',
      serviceWorker: {
        unregister: true,
      },
      copy: [
        { src: 'cli.ts.deno', dest: 'cli.ts' },
        { src: '../node_modules/@ionic-internal/ionic-ds/www/assets/fonts', dest: 'assets/fonts' },
      ],
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/prerender',
    },
  ],
  globalStyle: 'src/global/style/app.css',
  plugins: [dotenvPlugin()],
};
