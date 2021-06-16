interface I18nDeliverables {
  all: string;
  app: string;
  content: string;
  desktop: string;
  library: string;
  masterRecording: string;
  pwa: string;
  spa: string;
  website: string;
}

export interface I18n {
  lang: Languages;
  deliverables: I18nDeliverables;
}

export type Languages = 'en' | 'de';
