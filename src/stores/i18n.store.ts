import { createStore } from '@stencil/store';
import { Env } from '@stencil/core';

// import { set } from 'idb-keyval';

import { I18n, Languages } from './i18n.interface';

import de from '../assets/i18n/de.json';
import en from '../assets/i18n/en.json';

// Read language from environment variable: LANG=de npm run build
const LANG = Env.LANG;
const initialState = !LANG || LANG === 'de' ? de : en;

const { state, onChange } = createStore<I18n>({
  lang: LANG, // TODO: war 'en'
  ...(initialState as Partial<I18n>),
} as I18n);

// const esI18n = async (): Promise<I18n> => {
//   return {
//     lang: 'es',
//     ...(await import(`../../assets/i18n/es.json`)),
//   };
// };

// const deI18n = async (): Promise<I18n> => {
//   return {
//     lang: 'de',
//     ...(await import(`../../assets/i18n/de.json`)),
//   };
// };

const deI18n = (): I18n => {
  return {
    lang: 'de',
    ...(de as Partial<I18n>),
  } as I18n;
};

onChange('lang', async (lang: Languages) => {
  let bundle: I18n;

  switch (lang) {
    // case 'es':
    //   bundle = await esI18n();
    //   break;
    // case 'de':
    //   bundle = await deI18n();
    //   break;
    default:
      bundle = deI18n();
  }

  Object.assign(state, bundle);
});

// onChange('lang', (lang: Languages) => {
//   set('deckdeckgo_lang', lang).catch(err => {
//     console.error('Failed to update IDB with new language', err);
//   });
// });

export default state;
