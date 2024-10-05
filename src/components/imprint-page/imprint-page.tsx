import { Component, Element, h } from '@stencil/core';
import { ResponsiveContainer } from '@ionic-internal/ionic-ds';

import i18n from '../../stores/i18n.store';

@Component({
  tag: 'imprint-page',
  styleUrl: 'imprint-page.css',
})
export class ImprintPage {
  @Element() el!: Element;

  constructor() {
    document.title = i18n.global.imprint;
  }

  render() {
    return (
      <ResponsiveContainer>
        <h1>{i18n.global.imprint}</h1>
      </ResponsiveContainer>
    );
  }
}
