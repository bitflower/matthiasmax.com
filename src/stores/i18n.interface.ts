interface I18nCV {
  cv: string;
  education: string;
  experience: string;
  heading: string;
  languages: string;
  title: string;
}
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
interface I18nIndustries {
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
  cv: I18nCV;
  deliverable: {
    singular: string;
    plural: string;
  };
  deliverables: I18nDeliverables;
  industry: {
    singular: string;
    plural: string;
  };
  industries: I18nIndustries;
}

export type Languages = 'en' | 'de';