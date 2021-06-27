// import { TaskType } from '@matthiasmax/cv-api';

export interface SingularPlural {
  singular: string;
  plural: string;
}

interface I18nContact {
  claim: string;
  welcomeOffice: string;
  dropLine: string;
  title: string;
  heading: string;
  commutingArea: string;
  commutingAreaDescription: string;
}
interface I18nCV {
  cv: string;
  dataSource: string;
  downloadCV: string;
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
interface I18nGlobal {
  dsgvo: string;
  sayHello: string;
  phone: string;
  mobile: string;
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
// type I18nTasks = {
//   [key in keyof typeof TaskType]?: string;
// };
// type I18nTasks = {
//   [key in keyof typeof TaskType]?: string;
// };

// type I18nTasks = Partial<Record<TaskType, number>>;

export interface I18n {
  common: I18nCommon;
  contact: I18nContact;
  global: I18nGlobal;
  lang: Languages;
  cv: I18nCV;
  deliverable: SingularPlural;
  deliverables: I18nDeliverables;
  industry: SingularPlural;
  industries: I18nIndustries;
  landingPage: I18nLandingPage;
  task: SingularPlural;
  tasks: any; // TODO: Find better way!
  // tasks: I18nTasks;
}

export type Languages = 'en' | 'de';
