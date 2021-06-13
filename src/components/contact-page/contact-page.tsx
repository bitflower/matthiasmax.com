import { Component, Element, Listen, State, h } from '@stencil/core';
import { ResponsiveContainer } from '@ionic-internal/ionic-ds';

@Component({
  tag: 'contact-page',
  //   styleUrl: 'contact-page.css',
})
export class ContactPage {
  @Element() el!: Element;

  constructor() {
    document.title = `Get in touch with Matthias Max Web Technologies Expert`;
  }

  render() {
    return (
      <ResponsiveContainer>
        <p>
          Matthias Max
          <br />
          Ludwigstraße 23-2
          <br />
          74372 Sersheim
          <br />
          Germany
          <br />
        </p>
        <p>
          Email: <a href="mailto:hi@bitflower.net">hi@bitflower.net</a>
        </p>
      </ResponsiveContainer>
    );
  }
}
