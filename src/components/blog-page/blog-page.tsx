import { Component, h, Prop } from '@stencil/core';
import { ResponsiveContainer } from '@ionic-internal/ionic-ds';

import i18n from '../../stores/i18n.store';

@Component({
  tag: 'blog-page',
  styleUrl: 'blog-page.css',
})
export class BlogPage {
  // --------------------------------------------------------------------------
  //
  //  Public Properties
  //
  // --------------------------------------------------------------------------

  @Prop()
  max?: number | undefined;

  // --------------------------------------------------------------------------
  //
  //  Render
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <ResponsiveContainer>
        <div class="blog-index">
          <h1 class="hero-heading">Let's get better together.</h1>
          <h2 class="no-print-font hero-subheading">I've learned a lot from the community. This blog is where I give back.</h2>
          <p class="intro-paragraph no-print-font">
            From time to time I share my knowledge, experiences and thoughts on topics like business, technology and design. Feel free to&nbsp;
            <stencil-route-link url={i18n.contact.link}>get in touch for feedback or to raise questions.</stencil-route-link>
          </p>
          <blog-list />
        </div>
      </ResponsiveContainer>
    );
  }
}
