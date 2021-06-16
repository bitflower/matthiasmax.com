import { Component, Fragment, h, State } from '@stencil/core';
import { ResponsiveContainer } from '@ionic-internal/ionic-ds';
import { milestones } from '@matthiasmax/cv-api';

import i18n from '../../stores/i18n.store';

@Component({
  tag: 'cv-page',
  styleUrl: 'cv-page.css',
})
export class cvPage {
  constructor() {
    document.title = i18n.cv.title;
  }

  @State()
  private selectedIndustry: string | undefined = undefined;
  @State()
  private selectedDeliverable: string | undefined = undefined;

  private onIndustryChange = (e: CustomEvent<string>) => {
    this.selectedIndustry = e.detail === 'all' ? undefined : e.detail;
  };
  private onDeliverableChange = (e: CustomEvent<string>) => {
    this.selectedDeliverable = e.detail === 'all' ? undefined : e.detail;
  };

  render() {
    return (
      <Fragment>
        <header class="hide-screen">
          <div class="bla">
            <app-icon name="logo" />
            <h1 class="cv-page__kopfzeiletitle">{i18n.cv.heading}</h1>
          </div>
        </header>
        <ResponsiveContainer>
          <div class="page new-page">
            <div class="left">
              <h1 class="hide-print">{i18n.cv.heading}</h1>
              <h2 class="cv-page__first-heading">{i18n.cv.cv}</h2>
              <time-line items={milestones.reverse()} />

              <h2>{i18n.cv.education}</h2>
              <p>
                Studium der Wirtschaftsinformatik - Fachhochschule Pforzheim, 2001 – 2006 <br />
                Thema der Diplomarbeit: TITEL DIPLOMARBEIT
              </p>
              <h2>{i18n.cv.languages}</h2>
              <p>
                Englisch: fließend in Wort und Schrift <br />
                Französisch: Schulkenntnisse
              </p>
            </div>
            <div class="right">
              <div class="profile">
                <h2>Matthias Max</h2>
                <h3>Diplom-Wirtschaftsinformatiker (FH)</h3>
                <img class="cv-page__profileimg" src="/assets/img/profile.jpg" loading="lazy" />
              </div>
            </div>
          </div>
          <div class="new-page">
            <h2>{i18n.cv.experience}</h2>
            <div class="filters hide-print">
              <h4>
                {i18n.industry.plural}: {this.selectedIndustry || i18n.industries.all}
              </h4>
              <project-industry-filter onMmChange={this.onIndustryChange} />
              <h4>
                {i18n.deliverable.singular}: {this.selectedDeliverable || i18n.deliverables.all}
              </h4>
              <project-deliverables-filter onMmChange={this.onDeliverableChange} />
            </div>
            <project-list industry={this.selectedIndustry} deliverable={this.selectedDeliverable} />
          </div>
        </ResponsiveContainer>
      </Fragment>
    );
  }
}
