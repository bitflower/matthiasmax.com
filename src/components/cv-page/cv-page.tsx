import { Component, Fragment, h, State } from '@stencil/core';
import { ResponsiveContainer } from '@ionic-internal/ionic-ds';
import { milestones, projects } from '@matthiasmax/cv-api';

import i18n from '../../stores/i18n.store';
import { calcAverageDuration } from './utils';

const lebenslauf = [...milestones.reverse()];

@Component({
  tag: 'cv-page',
  styleUrl: 'cv-page.css',
})
export class cvPage {
  // --------------------------------------------------------------------------
  //
  //  Life Cycle
  //
  // --------------------------------------------------------------------------

  constructor() {
    document.title = i18n.cv.title;
  }

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @State()
  private selectedIndustry: string | undefined = undefined;

  @State()
  private selectedDeliverable: string | undefined = undefined;

  // --------------------------------------------------------------------------
  //
  //  Event Listener
  //
  // --------------------------------------------------------------------------

  private onIndustryChange = (e: CustomEvent<string>) => {
    this.selectedIndustry = e.detail === 'all' ? undefined : e.detail;
  };

  private onDeliverableChange = (e: CustomEvent<string>) => {
    this.selectedDeliverable = e.detail === 'all' ? undefined : e.detail;
  };

  // --------------------------------------------------------------------------
  //
  //  Render
  //
  // --------------------------------------------------------------------------

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
          {/* Insert landing page when printing */}
          <div class="new-page hide-screen">
            <landing-page />
          </div>

          {/* Main CV page  */}
          <div class="page new-page">
            <a class="hide-print download-button" rel="noopener" target="_blank" href="https://matthiasmax.com/assets/profil_matthiasmax.pdf">
              <app-icon name="targetblank" /> {i18n.cv.downloadCV}
            </a>
            <h1 class="hide-print">{i18n.cv.heading}</h1>
            <div class="left">
              <h2 class="cv-page__first-heading">{i18n.cv.cv}</h2>
              <time-line items={lebenslauf} />

              <div class="key-skills">
                <h2>Key Skills</h2>
                <ul>
                  <li>Softwarearchitektur und -design</li>
                  <li>Anforderungsanalyse und sprechen "beider Sprachen"</li>
                  <li>Unternehmerisches Denken</li>
                  <li>Web-Fullstackentwicklung: Webfrontend mit Backend- und Datenbankentwicklung</li>
                  <li>Teamkommunikation und Entwicklerführung</li>
                  <li>Designaffinität und hochwertige UI/UX-Umsetzung</li>
                  <li>Qualitätssicherung: Unit Tests, autom. UI Tests</li>
                  <li>Mentorship und Schulung von Technologiethemen</li>
                  <li>Refaktoring und Weiterentwicklung von Altsystemen</li>
                </ul>
              </div>

              <div class="key-tech">
                <h2>Technologien, Sprachen und Tools</h2>
                <ul>
                  <li>Agile: Azure DevOps, GitHub, JIRA, SAFe, Scrum</li>
                  <li>API: API-First, json-schema, Swagger</li>
                  <li>Cloud: AWS, Azure, Docker, Heroku, MongoDB Atlas</li>
                  <li>CMS: Wordpress, Markdown, CaseOS</li>
                  <li>Datenbank: MongoDB, MS SQL-Server, MySQL, Oracle, IndexedDB</li>
                  <li>Frontend: Angular 11+, Web Components, SSG, Hybrid-Apps</li>
                  <li>Mobile Apps: CapacitorJS, Ionic</li>
                  <li>Server: .Net, ExpressJS, IIS, NodeJS, PHP</li>
                  <li>Transport: OPC UA, REST, WebSocket</li>
                  <li>UI/UX: Figma, Mockups, Sketch, Wireframes</li>
                </ul>
              </div>

              <div class="scope">
                <h2>{i18n.cv.impact}</h2>
                <svg width="100px" viewBox="0 0 804 574" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient x1="3.46944695e-15%" y1="1.69346098%" x2="96.2732842%" y2="97.9667452%" id="linearGradient-1">
                      <stop stop-color="#00FFF4" offset="0%"></stop>
                      <stop stop-color="#EFE2FF" offset="19.7096279%"></stop>
                      <stop stop-color="#FEFEFE" offset="52.1631142%"></stop>
                      <stop stop-color="#7510F7" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="1.79673319%" y1="30.4771864%" x2="35.8207931%" y2="38.8822806%" id="linearGradient-2">
                      <stop stop-color="#00FFF4" stop-opacity="0.5" offset="0%"></stop>
                      <stop stop-color="#FFFFFF" stop-opacity="0.5" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="80.9944549%" y1="11.6522144%" x2="66.0571458%" y2="24.0313238%" id="linearGradient-3">
                      <stop stop-color="#7510F7" stop-opacity="0.5" offset="0%"></stop>
                      <stop stop-color="#FFFFFF" stop-opacity="0.5" offset="100%"></stop>
                    </linearGradient>
                    <path
                      d="M149.265805,92.7995059 C167.789552,29.0295102 177.957043,-42.1926613 236.749806,-77.2212505 C295.542569,-112.24984 377.712095,-113.201708 440.531759,-97.0346667 C503.351423,-79.9694566 576.492957,-75.1302531 610.318931,-18.545609 C644.950284,37.1408661 638.527545,139.912612 653.024391,203.682608 C667.521237,267.452603 680.055128,329.105199 668.779804,384.791674 C658.30986,441.376318 642.24792,511.548591 600.368144,565.438728 C557.682987,619.328865 510.3982,648.811321 451.605437,672.163714 C392.007294,695.516106 306.975723,713.479485 256.236764,672.163714 C206.303184,630.847942 187.138622,520.722945 169.420255,456.054781 C151.701888,390.488447 143.677092,347.336002 134.817909,281.769668 C126.764106,216.203335 130.742057,156.569502 149.265805,92.7995059 Z"
                      id="path-4"
                    ></path>
                    <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="linearGradient-5">
                      <stop stop-color="#00FFF4" offset="0%"></stop>
                      <stop stop-color="#7510F7" offset="100%"></stop>
                    </linearGradient>
                    <path
                      d="M346.821412,187.766901 C370.098822,200.360452 404.961221,213.450222 417.747405,253.421057 C430.533588,293.391892 435.1235,341.028367 429.222185,383.73693 C422.993018,426.445494 405.944774,463.6786 385.29017,486.675519 C364.963417,510.219983 335.734916,504.892837 312.457506,514.748659 C289.180095,524.604481 273.489676,537.049722 253.162923,529.384082 C232.508319,522.265988 212.512771,510.219983 192.84172,481.747608 C173.170668,452.727686 151.860363,420.970037 143.336241,380.999202 C134.812119,340.480821 139.07418,291.749255 154.155319,257.253877 C169.236458,223.306045 193.677701,193.893409 217.282963,181.847404 C241.216075,169.801399 264.941321,200.273163 288.874433,194.25016 C312.807545,188.774704 323.544001,175.173351 346.821412,187.766901 Z"
                      id="path-6"
                    ></path>
                    <path d="M76.5,1.5 L349.5,281.5" id="path-8"></path>
                    <path d="M351.26374,282.639667 L395.015125,326.391053" id="path-10"></path>
                  </defs>
                  <g id="schnittstelle" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g
                      id="Shape"
                      mix-blend-mode="multiply"
                      fill-rule="nonzero"
                      transform="translate(402.000000, 294.865431) rotate(-90.000000) translate(-402.000000, -294.865431) "
                    >
                      <use fill="url(#linearGradient-1)" mix-blend-mode="multiply" xlinkHref="#path-4"></use>
                      <use fill="url(#linearGradient-2)" xlinkHref="#path-4"></use>
                      <use fill="url(#linearGradient-3)" xlinkHref="#path-4"></use>
                    </g>
                    <mask id="mask-7" fill="white">
                      <use xlinkHref="#path-6"></use>
                    </mask>
                    <use
                      id="Mask"
                      fill="url(#linearGradient-5)"
                      fill-rule="nonzero"
                      opacity="0.502064732"
                      transform="translate(285.381870, 355.383501) rotate(-90.000000) translate(-285.381870, -355.383501) "
                      xlinkHref="#path-6"
                    ></use>
                    <path
                      d="M675.204783,31.9685441 C701.303861,43.5635268 700.138006,77.1337137 714.47412,113.93518 C728.810234,150.736647 746.766893,219.092231 740.150225,258.414346 C733.165965,297.736461 706.85889,296.381384 683.700553,317.554831 C660.909808,339.232407 640.700701,368.917921 614.601623,377.992256 C588.502544,387.06659 545.449255,385.050071 522.65851,377.992256 C499.500173,371.43857 492.967073,337.230148 470.911513,311.015404 C448.855954,284.296531 434.231371,295.215813 424.673962,258.414346 C415.116553,221.10875 411.549409,162.0494 428.458671,130.28923 C445.367934,99.0331899 466.362246,49.2469596 492.828918,38.1561066 C519.663182,27.0652536 560.580894,55.1523607 587.415158,49.6069342 C614.249422,44.5656374 649.105704,20.3735615 675.204783,31.9685441 Z"
                      id="Shape-Copy"
                      fill="url(#linearGradient-5)"
                      fill-rule="nonzero"
                      mix-blend-mode="multiply"
                      opacity="0.5"
                      transform="translate(579.102933, 206.461786) rotate(-90.000000) translate(-579.102933, -206.461786) "
                    ></path>
                    <text font-family="SFUIDisplay-Medium, SF UI Display" font-size="24" font-weight="400" letter-spacing="-0.416347831" fill="#03060B">
                      <tspan x="500.141476" y="132">
                        {i18n.cv.impactAreas.business1} &amp;
                      </tspan>
                      <tspan x="496.50004" y="161">
                        {i18n.cv.impactAreas.business2}
                      </tspan>
                    </text>
                    <path
                      d="M605.343237,249.506356 C630.199075,260.549007 629.088755,292.520063 642.741962,327.568476 C656.395169,362.616888 673.496455,427.716324 667.194975,465.165313 C660.543413,502.614302 635.489487,501.323774 613.434307,521.488615 C591.729209,542.13357 572.482772,570.405002 547.626935,579.047076 C522.771097,587.689151 481.768671,585.76869 460.063573,579.047076 C438.008393,572.805578 431.7865,540.226689 410.781567,515.260697 C389.776634,489.814589 375.848699,500.213726 366.746561,465.165313 C357.644424,429.636785 354.247203,373.390753 370.350985,343.143493 C386.454767,313.376348 406.449006,265.961707 431.654926,255.399171 C457.210928,244.836636 496.179507,271.585801 521.73551,266.304534 C547.291512,261.503381 580.487399,238.463706 605.343237,249.506356 Z"
                      id="Shape-Copy-2"
                      fill="url(#linearGradient-5)"
                      fill-rule="nonzero"
                      mix-blend-mode="multiply"
                      opacity="0.5"
                      transform="translate(513.819241, 415.687536) rotate(51.000000) translate(-513.819241, -415.687536) "
                    ></path>
                    <text font-family="SFUIDisplay-Medium, SF UI Display" font-size="24" font-weight="400" letter-spacing="-0.416347831" fill="#03060B">
                      <tspan x="461.111036" y="480">
                        {i18n.cv.impactAreas.design1}
                      </tspan>
                      <tspan x="472.589219" y="509">
                        &amp; {i18n.cv.impactAreas.design2}
                      </tspan>
                    </text>
                    <text font-family="SFUIDisplay-Medium, SF UI Display" font-size="24" font-weight="400" letter-spacing="-0.416347831" fill="#03060B">
                      <tspan x="148.991085" y="280">
                        {i18n.cv.impactAreas.technology1}
                      </tspan>
                      <tspan x="138.350792" y="309">
                        &amp; {i18n.cv.impactAreas.technology2}
                      </tspan>
                    </text>
                    <text font-family="SFUIDisplay-Bold, SF UI Display" font-size="24" font-weight="bold" letter-spacing="-0.416347831" fill="#03060B">
                      <tspan x="76.5573452" y="154">
                        {i18n.cv.impactAreas.product1}
                      </tspan>
                      <tspan x="78.0683995" y="183">
                        {i18n.cv.impactAreas.product2}
                      </tspan>
                    </text>
                    <path
                      d="M342.652046,208.237854 C375.131712,195.936582 418.075716,193.395923 453.386954,233.571236 C488.698191,273.746548 541.339634,268.764644 539.407284,318.026861 C537.474935,367.289078 470.788106,432.955789 426.220413,468.924118 C381.652719,504.892447 366.658837,531.353428 323.913686,510.250062 C281.168535,489.146697 314.596567,462.866065 319.656371,398.714753 C324.716174,334.56344 310.17238,220.539126 342.652046,208.237854 Z"
                      id="Shape-Copy-3"
                      fill="#7510F7"
                      fill-rule="nonzero"
                      transform="translate(420.952497, 359.003097) rotate(51.000000) translate(-420.952497, -359.003097) "
                    ></path>
                    <mask id="mask-9" fill="white">
                      <use xlinkHref="#path-8"></use>
                    </mask>
                    <use id="line-copy" stroke="#7510F7" stroke-width="1.55" stroke-linecap="square" stroke-dasharray="3.650567722320557" xlinkHref="#path-8"></use>
                    <mask id="mask-11" fill="white">
                      <use xlinkHref="#path-10"></use>
                    </mask>
                    <use id="line" stroke="#FFFFFF" stroke-width="1.55" stroke-linecap="square" stroke-dasharray="3.650567722320557" xlinkHref="#path-10"></use>
                  </g>
                </svg>
              </div>

              <div class="education">
                <h2>{i18n.cv.education}</h2>
                <p>
                  Studium der Wirtschaftsinformatik - Fachhochschule Pforzheim, 2001 – 2006 <br />
                  Thema der Diplomarbeit: <i>Impactanalyse von Systemausfällen auf Service Level Agreements mit 3D Visualisierung in Java</i>
                </p>
              </div>
              <div class="languages">
                <h2>{i18n.cv.languages}</h2>
                <p>
                  {i18n.common.languages.german}: {i18n.common.languageCapability.native} <br />
                  {i18n.common.languages.english}: {i18n.common.languageCapability.pro} <br />
                  {i18n.common.languages.french}: {i18n.common.languageCapability.basic}
                </p>
              </div>
            </div>
            <div class="right">
              <div class="profile">
                <h2>Matthias Max</h2>
                <h3>{i18n.cv.degree}</h3>
                <div class="profile-kpis">
                  <img class="cv-page__profileimg" src="/assets/img/profile.jpg" loading="lazy" alt="Profilbild von Matthias Max" />

                  <div class="professional-kpis">
                    <kpi-value label="Erfahrung" value={`${new Date().getFullYear() - Math.min(...projects.map(p => p.year))} ${i18n.common.durations.years.plural}`} />
                    <kpi-value label="Projekte" value={projects.length.toString()} />
                    <kpi-value
                      label="&#8709; Dauer"
                      value={`${Math.round((calcAverageDuration(projects) / 365 + Number.EPSILON) * 100) / 100} ${i18n.common.durations.years.plural}`}
                    />
                  </div>

                  <div class="mindset">
                    <h2>Mindset</h2>
                    <ul>
                      <li>Standards und Konsistenz</li>
                      <li>Clean Code</li>
                      <li>Code Conventions</li>
                      <li>Reusability</li>
                      <li>Open Source</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project list with filters  */}
          <div class="new-page">
            <h2>{i18n.cv.experience}</h2>
            <div class="filters hide-print">
              <h4>
                {i18n.industry.plural}: {this.selectedIndustry || i18n.industries.all}
              </h4>
              <project-industry-filter onMmChange={this.onIndustryChange} />
              <h4>
                {i18n.deliverable.singular}: {this.selectedDeliverable ? (i18n.deliverables as any)[this.selectedDeliverable] : i18n.deliverables.all}
              </h4>
              <project-deliverables-filter onMmChange={this.onDeliverableChange} />
            </div>
            <p class="cta__secondary">
              {i18n.cv.dataSource}{' '}
              <a rel="noopener" href="https://github.com/bitflower/CV" target="_blank">
                GitHub
              </a>
            </p>

            <project-list industry={this.selectedIndustry} deliverable={this.selectedDeliverable} />
          </div>
        </ResponsiveContainer>
        <footer class="cv-page__footer hide-screen">
          <div class="bla">
            <div class="contact-details">
              <div class="col">
                Ludwigstraße 23-2
                <br />
                74372 Sersheim
              </div>
              <div class="col">
                {i18n.global.phone}: (+49 7042) 77 00 973
                <br />
                {i18n.global.mobile}: (+49 171) 41 77 266
              </div>
              <div class="col">
                matthias.max@bitflower.net
                <br />
                www.matthiasmax.com / www.bitflower.net
              </div>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}
