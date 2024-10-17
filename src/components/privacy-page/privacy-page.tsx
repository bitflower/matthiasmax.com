import { Component, Element, Fragment, h } from '@stencil/core';
import { ResponsiveContainer } from '@ionic-internal/ionic-ds';

import i18n from '../../stores/i18n.store';

@Component({
  tag: 'privacy-page',
  styleUrl: 'privacy-page.css',
})
export class PrivacyPage {
  @Element() el!: Element;

  constructor() {
    document.title = i18n.global.imprint;
  }

  render() {
    return (
      <ResponsiveContainer>
        {i18n.lang === 'de' ? (
          <Fragment>
            <h1>Datenschutz&shy;erkl&auml;rung</h1>
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>{' '}
            <p>
              Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema Datenschutz
              entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.
            </p>
            <h3>Datenerfassung auf dieser Website</h3> <h4>Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?</h4>{' '}
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen
              Stelle&ldquo; in dieser Datenschutzerkl&auml;rung entnehmen.
            </p>{' '}
            <h4>Wie erfassen wir Ihre Daten?</h4>{' '}
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>{' '}
            <p>
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B.
              Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>{' '}
            <h4>Wof&uuml;r nutzen wir Ihre Daten?</h4>{' '}
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres Nutzerverhaltens
              verwendet werden.
            </p>{' '}
            <h4>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</h4>{' '}
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben
              au&szlig;erdem ein Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k&ouml;nnen
              Sie diese Einwilligung jederzeit f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
            </p>{' '}
            <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit an uns wenden.</p>
            <h3>Analyse-Tools und Tools von Dritt&shy;anbietern</h3>{' '}
            <p>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.</p>{' '}
            <p>Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerkl&auml;rung.</p>
            <h2>2. Hosting</h2>
            <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
            <h3>Externes Hosting</h3>{' '}
            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert.
              Hierbei kann es sich v.&nbsp;a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
              Daten, die &uuml;ber eine Website generiert werden, handeln.
            </p>{' '}
            <p>
              Das externe Hosting erfolgt zum Zwecke der Vertragserf&uuml;llung gegen&uuml;ber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im
              Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern
              eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1
              TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne
              des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>{' '}
            <p>
              Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erf&uuml;llung seiner Leistungspflichten erforderlich ist und unsere Weisungen in
              Bezug auf diese Daten befolgen.
            </p>{' '}
            <p>Wir setzen folgende(n) Hoster ein:</p>
            <p>
              Vercel
              <br />
              8 Northumberland Avenue
              <br />
              London WC2N 5BY
              <br />
              United Kingdom
            </p>
            <h2>3. Allgemeine Hinweise und Pflicht&shy;informationen</h2>
            <h3>Datenschutz</h3>{' '}
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
              gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.
            </p>{' '}
            <p>
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie pers&ouml;nlich identifiziert
              werden k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und
              zu welchem Zweck das geschieht.
            </p>{' '}
            <p>
              Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein
              l&uuml;ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.
            </p>
            <h3>Hinweis zur verantwortlichen Stelle</h3> <p>Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser Website ist:</p>{' '}
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
              Telefon: 01714177266
              <br />
              E-Mail: info@matthiasmax.de
            </p>
            <p>
              Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von
              personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.
            </p>
            <h3>Speicherdauer</h3>{' '}
            <p>
              Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck
              f&uuml;r die Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
              werden Ihre Daten gel&ouml;scht, sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde f&uuml;r die Speicherung Ihrer personenbezogenen Daten haben
              (z.&nbsp;B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die L&ouml;schung nach Fortfall dieser Gr&uuml;nde.
            </p>
            <h3>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>{' '}
            <p>
              Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2
              lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung
              personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung au&szlig;erdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von
              Cookies oder in den Zugriff auf Informationen in Ihr Endger&auml;t (z.&nbsp;B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung
              zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserf&uuml;llung oder zur
              Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir
              Ihre Daten, sofern diese zur Erf&uuml;llung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann
              ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. &Uuml;ber die jeweils im Einzelfall einschl&auml;gigen Rechtsgrundlagen
              wird in den folgenden Abs&auml;tzen dieser Datenschutzerkl&auml;rung informiert.
            </p>
            <h3>Empfänger von personenbezogenen Daten</h3>{' '}
            <p>
              Im Rahmen unserer Gesch&auml;ftst&auml;tigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine &Uuml;bermittlung von
              personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer
              Vertragserf&uuml;llung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an Steuerbeh&ouml;rden), wenn wir ein
              berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
              Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines g&uuml;ltigen Vertrags &uuml;ber Auftragsverarbeitung weiter. Im Falle
              einer gemeinsamen Verarbeitung wird ein Vertrag &uuml;ber gemeinsame Verarbeitung geschlossen.
            </p>
            <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>{' '}
            <p>
              Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung jederzeit
              widerrufen. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
            </p>
            <h3>Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>{' '}
            <p>
              WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN
              SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES
              PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN
              WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG
              NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON
              RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
            </p>{' '}
            <p>
              WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER
              PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN
              SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
            </p>
            <h3>Beschwerde&shy;recht bei der zust&auml;ndigen Aufsichts&shy;beh&ouml;rde</h3>{' '}
            <p>
              Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat ihres
              gew&ouml;hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht unbeschadet anderweitiger
              verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
            </p>
            <h3>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</h3>{' '}
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in
              einem g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie die direkte &Uuml;bertragung der Daten an einen anderen Verantwortlichen
              verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>
            <h3>Auskunft, Berichtigung und L&ouml;schung</h3>{' '}
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten personenbezogenen Daten,
              deren Herkunft und Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren
              Fragen zum Thema personenbezogene Daten k&ouml;nnen Sie sich jederzeit an uns wenden.
            </p>
            <h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3>{' '}
            <p>
              Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich jederzeit an uns wenden. Das
              Recht auf Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen:
            </p>{' '}
            <ul>
              {' '}
              <li>
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der Regel Zeit, um dies zu &uuml;berpr&uuml;fen.
                F&uuml;r die Dauer der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>{' '}
              <li>
                Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt der L&ouml;schung die Einschr&auml;nkung der
                Datenverarbeitung verlangen.
              </li>{' '}
              <li>
                Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung von Rechtsanspr&uuml;chen
                ben&ouml;tigen, haben Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>{' '}
              <li>
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abw&auml;gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch
                nicht feststeht, wessen Interessen &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>{' '}
            </ul>{' '}
            <p>
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer Speicherung abgesehen &ndash; nur mit
              Ihrer Einwilligung oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen nat&uuml;rlichen oder
              juristischen Person oder aus Gr&uuml;nden eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet werden.
            </p>
            <h3>SSL- bzw. TLS-Verschl&uuml;sselung</h3>{' '}
            <p>
              Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns
              als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
              &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>{' '}
            <p>Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.</p>
            <h2>4. Datenerfassung auf dieser Website</h2>
            <h3>Cookies</h3>{' '}
            <p>
              Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;. Cookies sind kleine Datenpakete und richten auf Ihrem Endger&auml;t keinen Schaden an. Sie werden
              entweder vor&uuml;bergehend f&uuml;r die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endger&auml;t gespeichert.
              Session-Cookies werden nach Ende Ihres Besuchs automatisch gel&ouml;scht. Permanente Cookies bleiben auf Ihrem Endger&auml;t gespeichert, bis Sie diese selbst
              l&ouml;schen oder eine automatische L&ouml;schung durch Ihren Webbrowser erfolgt.
            </p>{' '}
            <p>
              Cookies k&ouml;nnen von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies erm&ouml;glichen die Einbindung
              bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z.&nbsp;B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
            </p>{' '}
            <p>
              Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren w&uuml;rden
              (z.&nbsp;B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies k&ouml;nnen zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
            </p>{' '}
            <p>
              Cookies, die zur Durchf&uuml;hrung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erw&uuml;nschter Funktionen (z.&nbsp;B.
              f&uuml;r die Warenkorbfunktion) oder zur Optimierung der Website (z.&nbsp;B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der
              Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und
              vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a
              DSGVO und &sect; 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.
            </p>{' '}
            <p>
              Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von
              Cookies f&uuml;r bestimmte F&auml;lle oder generell ausschlie&szlig;en sowie das automatische L&ouml;schen der Cookies beim Schlie&szlig;en des Browsers aktivieren.
              Bei der Deaktivierung von Cookies kann die Funktionalit&auml;t dieser Website eingeschr&auml;nkt sein.
            </p>{' '}
            <p>Welche Cookies und Dienste auf dieser Website eingesetzt werden, k&ouml;nnen Sie dieser Datenschutzerkl&auml;rung entnehmen.</p>
            <h2>5. Plugins und Tools</h2>
            <h3>Google Fonts (lokales Hosting)</h3>{' '}
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal
              installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
            </p>{' '}
            <p>
              Weitere Informationen zu Google Fonts finden Sie unter{' '}
              <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer">
                https://developers.google.com/fonts/faq
              </a>{' '}
              und in der Datenschutzerkl&auml;rung von Google:{' '}
              <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">
                https://policies.google.com/privacy?hl=de
              </a>
              .
            </p>
          </Fragment>
        ) : (
          <Fragment>
            <h1>Privacy Policy</h1>
            <h2>1. Data Protection at a Glance</h2>
            <h3>General Information</h3>{' '}
            <p>
              The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you can be
              personally identified. Detailed information on the subject of data protection can be found in our privacy policy listed below this text.
            </p>
            <h3>Data Collection on this Website</h3> <h4>Who is responsible for data collection on this website?</h4>{' '}
            <p>
              The data processing on this website is carried out by the website operator. You can find their contact details in the section "Notice concerning the responsible
              party" in this privacy policy.
            </p>{' '}
            <h4>How do we collect your data?</h4>{' '}
            <p>Your data is collected on the one hand by you providing it to us. This can be, for example, data that you enter in a contact form.</p>{' '}
            <p>
              Other data is collected automatically or after your consent when you visit the website by our IT systems. This is mainly technical data (e.g. internet browser,
              operating system, or time of the page call). This data is collected automatically as soon as you enter this website.
            </p>{' '}
            <h4>What do we use your data for?</h4>{' '}
            <p>Part of the data is collected to ensure the error-free provision of the website. Other data can be used to analyze your user behavior.</p>{' '}
            <h4>What rights do you have regarding your data?</h4>{' '}
            <p>
              You have the right to receive information about the origin, recipient, and purpose of your stored personal data free of charge at any time. You also have the right to
              request the correction or deletion of this data. If you have given your consent to data processing, you can revoke this consent at any time for the future. You also
              have the right to request the restriction of the processing of your personal data under certain circumstances. Furthermore, you have the right to lodge a complaint
              with the competent supervisory authority.
            </p>{' '}
            <p>You can contact us at any time regarding this and other questions on the subject of data protection.</p>
            <h3>Analysis Tools and Tools from Third-Party Providers</h3>{' '}
            <p>When visiting this website, your surfing behavior can be statistically evaluated. This is mainly done with so-called analysis programs.</p>{' '}
            <p>Detailed information on these analysis programs can be found in the following privacy policy.</p>
            <h2>2. Hosting</h2>
            <p>We host the content of our website with the following provider:</p>
            <h3>External Hosting</h3>{' '}
            <p>
              This website is hosted externally. The personal data collected on this website is stored on the servers of the host(s). This may include IP addresses, contact
              requests, meta and communication data, contract data, contact details, names, website accesses, and other data generated via a website.
            </p>{' '}
            <p>
              External hosting is carried out for the purpose of fulfilling contracts with our potential and existing customers (Art. 6 para. 1 lit. b GDPR) and in the interest of
              a secure, fast, and efficient provision of our online offer by a professional provider (Art. 6 para. 1 lit. f GDPR). If a corresponding consent has been requested,
              the processing is carried out exclusively on the basis of Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TDDG, insofar as the consent includes the storage of cookies or
              access to information in the user's terminal device (e.g. device fingerprinting) within the meaning of the TDDG. The consent can be revoked at any time.
            </p>{' '}
            <p>Our host(s) will only process your data to the extent necessary to fulfill their performance obligations and follow our instructions regarding this data.</p>{' '}
            <p>We use the following host(s):</p>
            <p>
              Vercel
              <br />
              8 Northumberland Avenue
              <br />
              London WC2N 5BY
              <br />
              United Kingdom
            </p>
            <h2>3. General Information and Mandatory Information</h2>
            <h3>Data Protection</h3>{' '}
            <p>
              The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory
              data protection regulations and this privacy policy.
            </p>{' '}
            <p>
              When you use this website, various personal data is collected. Personal data is data with which you can be personally identified. This privacy policy explains what
              data we collect and what we use it for. It also explains how and for what purpose this happens.
            </p>{' '}
            <p>
              We would like to point out that data transmission over the Internet (e.g. when communicating by e-mail) can have security gaps. A complete protection of the data
              against access by third parties is not possible.
            </p>
            <h3>Notice Concerning the Responsible Party</h3> <p>The responsible party for data processing on this website is:</p>{' '}
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
              Phone: 01714177266
              <br />
              Email: info@matthiasmax.de
            </p>
            <p>
              The responsible party is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g. names, email
              addresses, etc.).
            </p>
            <h3>Storage Duration</h3>{' '}
            <p>
              Unless a more specific storage period has been specified within this privacy policy, your personal data will remain with us until the purpose for the data processing
              no longer applies. If you assert a legitimate request for deletion or revoke your consent to data processing, your data will be deleted unless we have other legally
              permissible reasons for storing your personal data (e.g. tax or commercial law retention periods); in the latter case, the deletion will take place after these
              reasons cease to apply.
            </p>
            <h3>General Information on the Legal Bases of Data Processing on this Website</h3>{' '}
            <p>
              If you have consented to data processing, we process your personal data on the basis of Art. 6 para. 1 lit. a GDPR or Art. 9 para. 2 lit. a GDPR, if special
              categories of data are processed according to Art. 9 para. 1 GDPR. In the case of explicit consent to the transfer of personal data to third countries, the data
              processing is also carried out on the basis of Art. 49 para. 1 lit. a GDPR. If you have consented to the storage of cookies or access to information in your terminal
              device (e.g. via device fingerprinting), the data processing is additionally carried out on the basis of § 25 para. 1 TDDG. The consent can be revoked at any time. If
              your data is required for the fulfillment of a contract or for the implementation of pre-contractual measures, we process your data on the basis of Art. 6 para. 1
              lit. b GDPR. Furthermore, we process your data if this is necessary for the fulfillment of a legal obligation on the basis of Art. 6 para. 1 lit. c GDPR. The data
              processing can also be carried out on the basis of our legitimate interest according to Art. 6 para. 1 lit. f GDPR. Information on the relevant legal bases in each
              individual case is provided in the following paragraphs of this privacy policy.
            </p>
            <h3>Recipients of Personal Data</h3>{' '}
            <p>
              In the course of our business activities, we work with various external parties. In some cases, it is also necessary to transmit personal data to these external
              parties. We only pass on personal data to external parties if this is necessary in the context of contract fulfillment, if we are legally obliged to do so (e.g.
              transfer of data to tax authorities), if we have a legitimate interest in the transfer according to Art. 6 para. 1 lit. f GDPR, or if another legal basis allows the
              data transfer. When using processors, we only pass on personal data of our customers on the basis of a valid contract for order processing. In the case of joint
              processing, a contract for joint processing is concluded.
            </p>
            <h3>Revocation of Your Consent to Data Processing</h3>{' '}
            <p>
              Many data processing operations are only possible with your explicit consent. You can revoke an already given consent at any time. The legality of the data processing
              carried out until the revocation remains unaffected by the revocation.
            </p>
            <h3>Right to Object to Data Collection in Special Cases and to Direct Advertising (Art. 21 GDPR)</h3>{' '}
            <p>
              IF THE DATA PROCESSING IS BASED ON ART. 6 PARA. 1 LIT. E OR F GDPR, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA AT ANY TIME FOR REASONS
              ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH A PROCESSING IS BASED CAN BE
              FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE
              PROCESSING THAT OVERRIDE YOUR INTERESTS, RIGHTS, AND FREEDOMS OR THE PROCESSING IS FOR THE PURPOSE OF ASSERTING, EXERCISING, OR DEFENDING LEGAL CLAIMS (OBJECTION
              ACCORDING TO ART. 21 PARA. 1 GDPR).
            </p>{' '}
            <p>
              IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF PERSONAL DATA CONCERNING YOU FOR THE
              PURPOSE OF SUCH ADVERTISING; THIS ALSO APPLIES TO PROFILING INSOFAR AS IT IS ASSOCIATED WITH SUCH DIRECT MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL NO LONGER
              BE USED FOR DIRECT MARKETING PURPOSES (OBJECTION ACCORDING TO ART. 21 PARA. 2 GDPR).
            </p>
            <h3>Right to Lodge a Complaint with the Competent Supervisory Authority</h3>{' '}
            <p>
              In the event of violations of the GDPR, the data subjects have the right to lodge a complaint with a supervisory authority, in particular in the member state of their
              habitual residence, their place of work, or the place of the alleged violation. The right to lodge a complaint is without prejudice to other administrative or
              judicial remedies.
            </p>
            <h3>Right to Data Portability</h3>{' '}
            <p>
              You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a
              common, machine-readable format. If you request the direct transfer of the data to another responsible party, this will only be done to the extent that it is
              technically feasible.
            </p>
            <h3>Information, Correction, and Deletion</h3>{' '}
            <p>
              Within the framework of the applicable legal provisions, you have the right to free information about your stored personal data, its origin and recipient, and the
              purpose of the data processing and, if necessary, a right to correction or deletion of this data at any time. You can contact us at any time regarding this and other
              questions on the subject of personal data.
            </p>
            <h3>Right to Restriction of Processing</h3>{' '}
            <p>
              You have the right to request the restriction of the processing of your personal data. You can contact us at any time for this purpose. The right to restriction of
              processing exists in the following cases:
            </p>{' '}
            <ul>
              {' '}
              <li>
                If you dispute the accuracy of your personal data stored with us, we usually need time to verify this. For the duration of the verification, you have the right to
                request the restriction of the processing of your personal data.
              </li>{' '}
              <li>If the processing of your personal data was/is unlawful, you can request the restriction of data processing instead of deletion.</li>{' '}
              <li>
                If we no longer need your personal data, but you need it to exercise, defend, or assert legal claims, you have the right to request the restriction of the
                processing of your personal data instead of deletion.
              </li>{' '}
              <li>
                If you have lodged an objection according to Art. 21 para. 1 GDPR, a balance must be struck between your and our interests. As long as it is not yet clear whose
                interests prevail, you have the right to request the restriction of the processing of your personal data.
              </li>{' '}
            </ul>{' '}
            <p>
              If you have restricted the processing of your personal data, this data may only be processed – apart from being stored – with your consent or for the assertion,
              exercise, or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of important public interest of the
              European Union or a member state.
            </p>
            <h3>SSL or TLS Encryption</h3>{' '}
            <p>
              This site uses SSL or TLS encryption for security reasons and to protect the transmission of confidential content, such as orders or inquiries that you send to us as
              the site operator. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock
              symbol in your browser line.
            </p>{' '}
            <p>If SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.</p>
            <h2>4. Data Collection on this Website</h2>
            <h3>Cookies</h3>{' '}
            <p>
              Our internet pages use so-called "cookies". Cookies are small data packets and do not cause any damage to your terminal device. They are either temporarily stored for
              the duration of a session (session cookies) or permanently (permanent cookies) on your terminal device. Session cookies are automatically deleted after your visit.
              Permanent cookies remain stored on your terminal device until you delete them yourself or an automatic deletion is carried out by your web browser.
            </p>{' '}
            <p>
              Cookies can be from us (first-party cookies) or from third-party companies (so-called third-party cookies). Third-party cookies enable the integration of certain
              services from third-party companies within websites (e.g. cookies for processing payment services).
            </p>{' '}
            <p>
              Cookies have various functions. Many cookies are technically necessary, as certain website functions would not work without them (e.g. the shopping cart function or
              the display of videos). Other cookies can be used to evaluate user behavior or for advertising purposes.
            </p>{' '}
            <p>
              Cookies that are necessary to carry out the electronic communication process, to provide certain functions you have requested (e.g. for the shopping cart function),
              or to optimize the website (e.g. cookies to measure the web audience) are stored on the basis of Art. 6 para. 1 lit. f GDPR, unless another legal basis is specified.
              The website operator has a legitimate interest in storing necessary cookies for the technically error-free and optimized provision of its services. If consent to the
              storage of cookies and comparable recognition technologies has been requested, the processing is carried out exclusively on the basis of this consent (Art. 6 para. 1
              lit. a GDPR and § 25 para. 1 TDDG); the consent can be revoked at any time.
            </p>{' '}
            <p>
              You can set your browser so that you are informed about the setting of cookies and only allow cookies in individual cases, exclude the acceptance of cookies for
              certain cases or generally, and activate the automatic deletion of cookies when closing the browser. If cookies are deactivated, the functionality of this website may
              be restricted.
            </p>{' '}
            <p>You can find out which cookies and services are used on this website in this privacy policy.</p>
            <h2>5. Plugins and Tools</h2>
            <h3>Google Fonts (Local Hosting)</h3>{' '}
            <p>
              This site uses so-called Google Fonts, which are provided by Google, for the uniform display of fonts. The Google Fonts are installed locally. There is no connection
              to Google servers.
            </p>{' '}
            <p>
              Further information on Google Fonts can be found at{' '}
              <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer">
                https://developers.google.com/fonts/faq
              </a>{' '}
              and in Google's privacy policy:{' '}
              <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer">
                https://policies.google.com/privacy?hl=en
              </a>
              .
            </p>
          </Fragment>
        )}
      </ResponsiveContainer>
    );
  }
}
