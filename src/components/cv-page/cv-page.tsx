import { Component, Fragment, h } from '@stencil/core';
import { ResponsiveContainer } from '@ionic-internal/ionic-ds';

@Component({
  tag: 'cv-page',
  styleUrl: 'cv-page.css',
})
export class cvPage {
  constructor() {
    document.title = `CV of Matthias Max`;
  }

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
              <h1 class="cv-page__first-heading">Praxiserfahrung</h1>
              <p>
                Geschäftsführer – bitflower, seit 2014 <br />
                Kunden: Auftakt Medien e.K. BeOne Stuttgart GmbH Bosch.IO GmbH P3 automotive GmbH Remondis Süd GmbH RTS Steuerberatungsgesellschaft KG Securikett Ulrich & Horn GmbH
                Als Sublieferant: Wohnbau Oberriexingen Daimler Postbank Commerzbank Equens Worldline <br />
                Songwriter / Autor - BMG Rights Management, 2010 – 2014 <br />
                Freelancer, Qtobe AG, 2006 – 2010 <br />
                Diplomarbeit - Qtobe AG, 2006 <br />
                Freelancer, 2001 - ecce AG Schweiz Qtobe AG Schweiz <br />
                Verleger & Plattenlabel - Breeze Records, 2004 - 2006 <br />
                EDM-Artist & Musikproduzent, Mind One, 2000 – 2006 Schüler, <br />
                Softwareentwickler, 1998 - 2001
              </p>
              <h1>Ausbildung</h1>
              <p>
                Studium der Wirtschaftsinformatik - Fachhochschule Pforzheim, 2001 – 2006 <br />
                Thema der Diplomarbeit: Integrationsmöglichkeiten geographischer Daten in relationalen Datenbanken
              </p>
              <h1>Fremdsprachen</h1>
              <p>
                Englisch: fließend in Wort und Schrift <br />
                Französisch: Schulkenntnisse
              </p>
            </div>
            <div class="right">
              <div class="profile">
                <h1>Matthias Max</h1>
                <h3>Diplom-Wirtschaftsinformatiker (FH)</h3>
                <img class="cv-page__profileimg" src="/assets/img/profile.jpg" loading="lazy" />
              </div>
            </div>
          </div>
          <div class="new-page">
            <h1>Projekterfahrung</h1>
            <project-list />
          </div>
        </ResponsiveContainer>
      </Fragment>
    );
  }
}
