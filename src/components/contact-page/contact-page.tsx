import { Component, Element, h } from '@stencil/core';
import { ResponsiveContainer } from '@ionic-internal/ionic-ds';

import i18n from '../../stores/i18n.store';

@Component({
  tag: 'contact-page',
  styleUrl: 'contact-page.css',
})
export class ContactPage {
  @Element() el!: Element;

  constructor() {
    document.title = i18n.contact.title;
  }

  render() {
    return (
      <ResponsiveContainer>
        <h1>{i18n.contact.heading}</h1>
        <h2>&bdquo;The best ideas start as conversations&rdquo; &#8212; Jonathan Ive.</h2>
        <p class="landing-page_intro">{i18n.contact.claim}</p>
        <h3 class="contact-page__first-heading">{i18n.contact.welcomeOffice}</h3>
        <p>
          <img class="contact-page__officeimg" src="/assets/img/office.jpeg" loading="lazy" />
          <br />
          bitflower e.K. / Matthias Max
          <br />
          Gerberstraße 1
          <br />
          71665 Vaihingen an der Enz
          <br />
          Germany
          <br />
        </p>
        <h3>{i18n.contact.dropLine}</h3>
        <p>
          Email:&nbsp;
          <a href="mailto:hi@bitflower.net" target="blank">
            hi@bitflower.net
          </a>
          <br />
          Twitter:&nbsp;
          <a href="https://twitter.com/bitflowertweets" target="blank">
            @bitflowertweets
          </a>
          <br />
          LinkedIn:&nbsp;
          <a href="https://www.linkedin.com/in/bitflower/" target="blank">
            https://www.linkedin.com/in/bitflower/
          </a>
          <br />
        </p>
        <h3>{i18n.contact.donate}</h3>
        <p>
          {i18n.contact.buyMeACoffee}
          <a href="https://www.buymeacoffee.com/matthiasmax" target="_blank">
            {i18n.contact.buyMeACoffeeLink}
          </a>
        </p>
        <h3>{i18n.contact.commutingArea}</h3>
        <p>{i18n.contact.commutingAreaDescription}</p>
        <svg class="contact-page__logo-bg" width="1024px" height="1024px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
            <g id="logo-new" transform="translate(0.000000, 128.000000)">
              <g id="Group" transform="translate(64.000000, 144.000000)">
                <path d="M0,336 L192,96" id="A" stroke="#7510F7" stroke-width="128" fill-rule="nonzero"></path>
                <path d="M192,96 L384,336" id="A" stroke="#7510F7" stroke-width="128" fill-rule="nonzero"></path>
                <path d="M576,96 L768,336" id="A" stroke="#7510F7" stroke-width="128" fill-rule="nonzero"></path>
                <path d="M576,336 L832,0" id="B-Copy" stroke="#00FFF4" stroke-width="128" fill-rule="nonzero"></path>
                <path d="M384,96 L576,336" id="B" stroke="#00FFF4" stroke-width="128" fill-rule="nonzero"></path>
                <path d="M384,336 L576,96" id="A" stroke="#7510F7" stroke-width="128" fill-rule="nonzero"></path>
                <path d="M0,576 L384,96" id="B-Copy-2" stroke="#00FFF4" stroke-width="128" fill-rule="nonzero"></path>
              </g>
            </g>
          </g>
        </svg>
      </ResponsiveContainer>
    );
  }
}
