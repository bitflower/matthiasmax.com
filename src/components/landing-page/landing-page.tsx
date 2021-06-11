import { Component, h } from '@stencil/core';
import { ResponsiveContainer } from '@ionic-internal/ionic-ds';

@Component({
  tag: 'landing-page',
  styleUrl: 'landing-page.css',
})
export class LandingPage {
  constructor() {
    document.title = `Matthias Max Web Technologies Expert`;
  }

  render() {
    return (
      <div>
        <ResponsiveContainer class="hero">
          <hgroup>
            <h1>Let‘s build your best digital self.</h1>
            <h2>Hi 👋 I'm Matt!</h2>
            <p>
              I help companies utilize web technologies to their advantage to create real business value. <br />
              As former professional platin songwriter & EDM artist I share my creative experiences to turn challenges into success.
            </p>
            <stencil-route-link url="/docs/getting-started" class="hero-button" anchorClass="btn-get-started">
              Let's talk
            </stencil-route-link>
          </hgroup>
          <img class="landing-page__bg" src="/assets/img/profile.jpg" loading="lazy" />
        </ResponsiveContainer>
      </div>
    );
  }
}
