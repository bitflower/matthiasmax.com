export interface SingularPlural {
  singular: string;
  plural: string;
}

interface I18nCV {
  cv: string;
  education: string;
  experience: string;
  heading: string;
  languages: string;
  title: string;
}
interface I18nCommon {
  durations: {
    days: SingularPlural;
    weeks: SingularPlural;
    months: SingularPlural;
    years: SingularPlural;
  };
}
interface I18nLandingPage {
  brands: string;
  cta: string;
  explore: string;
  greeting: string;
  interactiveCV: string;
  intro: string;
  intro2: string;
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
  common: I18nCommon;
  lang: Languages;
  cv: I18nCV;
  deliverable: SingularPlural;
  deliverables: I18nDeliverables;
  industry: SingularPlural;
  industries: I18nIndustries;
  landingPage: I18nLandingPage;
}

export type Languages = 'en' | 'de';
