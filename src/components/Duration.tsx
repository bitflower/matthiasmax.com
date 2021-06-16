import { FunctionalComponent } from '@stencil/core';

import { SingularPlural } from '../stores/i18n.interface';

interface DurationProps {
  value: number;
  i18nKey: SingularPlural;
}

export const Duration: FunctionalComponent<DurationProps> = ({ value, i18nKey }) => `${value} ${value === 1 ? i18nKey.singular : i18nKey.plural}` as any;
