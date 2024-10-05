import { Component, Element, Fragment, h } from '@stencil/core';
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
        {i18n.lang === 'de' ? (
          <Fragment>
            <h1>{i18n.global.imprint}</h1>
            <p>
              Matthias Max
              <br />
              bitflower e.K.
              <br />
              Ludwigstra&szlig;e 23-2
              <br />
              74372 Sersheim
            </p>

            <p>
              Handelsregister: HRA 729998
              <br />
              Registergericht: Stuttgart
            </p>

            <h2>Kontakt</h2>
            <p>
              Telefon: +49 7042 959424
              <br />
              E-Mail: info@matthiasmax.de
            </p>

            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:
              <br />
              DE282769214
            </p>

            <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>
              Berufsbezeichnung:
              <br />
              Dipl. Wirtschaftsinformatiker
            </p>
            <h2>Redaktionell verantwortlich</h2>
            <p>
              Matthias Max
              <br />
              Ludwigstra&szlig;e 23-2
              <br />
              74372 Sersheim
            </p>

            <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </Fragment>
        ) : (
          <Fragment>
            <h1>{i18n.global.imprint}</h1>
            <p>
              Matthias Max
              <br />
              bitflower e.K.
              <br />
              Ludwigstraße 23-2
              <br />
              74372 Sersheim
            </p>

            <p>
              Commercial Register: HRA 729998
              <br />
              Register Court: Stuttgart
            </p>

            <h2>Contact</h2>
            <p>
              Phone: +49 7042 959424
              <br />
              Email: info@matthiasmax.de
            </p>

            <h2>VAT ID</h2>
            <p>
              VAT Identification Number according to § 27 a of the German VAT Act:
              <br />
              DE282769214
            </p>

            <h2>Professional Title and Professional Regulations</h2>
            <p>
              Professional Title:
              <br />
              Dipl. Wirtschaftsinformatiker
            </p>
            <h2>Editorially Responsible</h2>
            <p>
              Matthias Max
              <br />
              Ludwigstraße 23-2
              <br />
              74372 Sersheim
            </p>

            <h2>Consumer Dispute Resolution/Universal Arbitration Board</h2>
            <p>We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
          </Fragment>
        )}
      </ResponsiveContainer>
    );
  }
}
