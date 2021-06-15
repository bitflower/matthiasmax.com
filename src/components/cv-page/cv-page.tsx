import { Component, Fragment, h, State } from '@stencil/core';
import { ResponsiveContainer } from '@ionic-internal/ionic-ds';
import { TimeLineItem } from '../time-line/time-line-item.interface';

// Kunden: Auftakt Medien e.K. BeOne Stuttgart GmbH Bosch.IO GmbH P3 automotive GmbH Remondis Süd GmbH RTS Steuerberatungsgesellschaft KG Securikett Ulrich & Horn GmbH Als Sublieferant: Wohnbau Oberriexingen Daimler Postbank Commerzbank Equens Worldline
// Freelancer, Qtobe AG, 2006 – 2010
// Diplomarbeit - Qtobe AG, 2006
// Freelancer, 2001 - ecce AG Schweiz Qtobe AG Schweiz
// Verleger & Plattenlabel - Breeze Records, 2004 - 2006

const items: TimeLineItem[] = [
  {
    label: '1998 - 2001',
    content: 'Schüler, Softwareentwickler',
  },
  {
    label: '2001',
    content: 'Abitur',
  },
  {
    label: '2000 – 2006',
    content: 'EDM-Artist & Musikproduzent',
  },
  {
    label: '2002 - 2006',
    content: 'Studium',
  },
  {
    label: '2006',
    content: 'Diplom Wirtschaftsinformatik (FH)',
  },
  {
    label: '2010 – 2014',
    content: 'Songwriter und Autor',
  },
  {
    label: 'seit 2014',
    content: 'Geschäftsführer – bitflower',
  },
];

@Component({
  tag: 'cv-page',
  styleUrl: 'cv-page.css',
})
export class cvPage {
  constructor() {
    document.title = `CV of Matthias Max`;
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
            <h1 class="cv-page__kopfzeiletitle">Web Technologie Consultant und Fullstack Developer</h1>
          </div>
        </header>
        <ResponsiveContainer>
          <div class="page new-page">
            <div class="left">
              <h1>Web Technologie Consultant und Fullstack Developer</h1>
              <h2 class="cv-page__first-heading">Praxiserfahrung</h2>
              <time-line items={items.reverse()} />

              <h2>Ausbildung</h2>
              <p>
                Studium der Wirtschaftsinformatik - Fachhochschule Pforzheim, 2001 – 2006 <br />
                Thema der Diplomarbeit: Integrationsmöglichkeiten geographischer Daten in relationalen Datenbanken
              </p>
              <h2>Fremdsprachen</h2>
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
            <h2>Projekterfahrung</h2>
            <h4>Branchen: {this.selectedIndustry || 'Alle'}</h4>
            <project-industry-filter onMmChange={this.onIndustryChange} />
            <h4>Deliverables: {this.selectedDeliverable || 'Alle'}</h4>
            <project-deliverables-filter onMmChange={this.onDeliverableChange} />
            <project-list industry={this.selectedIndustry} deliverable={this.selectedDeliverable} />
          </div>
        </ResponsiveContainer>
      </Fragment>
    );
  }
}
