import { Project } from '@matthiasmax/cv-api';

export const calcAverageDuration = (projects: Project[]) => {
  const inDays: number[] = projects.map(p => {
    const { duration } = p;
    const value = duration[0];
    const unit = duration[1];

    let finalValueInDays = 0;

    switch (unit) {
      case 'years':
        finalValueInDays = value * 365;
        break;

      case 'months':
        finalValueInDays = value * 30;
        break;

      case 'weeks':
        finalValueInDays = value * 7;
        break;

      default:
        finalValueInDays = value;
        break;
    }

    return finalValueInDays;
  });

  return inDays.reduce((all, current) => all + current, 0) / projects.length;
};
