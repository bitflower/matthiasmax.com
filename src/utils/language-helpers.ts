import { milestones, Project, projects } from '@matthiasmax/cv-api';

import i18nState from '../stores/i18n.store';

export const getProjects = (): Project[] => {
  return i18nState.lang === 'de' ? projects.de : projects.en;
};

export const getMilestones = () => {
  return i18nState.lang === 'de' ? milestones.de : milestones.en;
};
