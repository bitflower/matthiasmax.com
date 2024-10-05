import '@stencil/router';
import { ResponsiveContainer } from '@ionic-internal/ionic-ds';
import { LocationSegments, RouterHistory } from '@stencil/router';
import { Component, Element, Listen, State, h } from '@stencil/core';

import SiteProviderConsumer, { SiteState } from '../../global/site-provider-consumer';

import i18n from '../../stores/i18n.store';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  private scrollY = 0;
  private history?: RouterHistory;
  elements = ['site-header', 'app-burger', 'main'];

  @Element() el!: HTMLElement;

  @State() isLeftSidebarIn: boolean = false;
  @State() isModalOpen: boolean = false;

  @Listen('resize', { target: 'window' })
  handleResize() {
    requestAnimationFrame(() => {
      if (window.innerWidth > 768 && this.isLeftSidebarIn) {
        this.isLeftSidebarIn = false;
        document.body.classList.remove('no-scroll');
        this.elements.forEach(el => {
          this.el.querySelector(el)!.classList.remove('left-sidebar-in');
        });
      }
    });
  }

  @Listen('toggleModal')
  handleToggleModal(ev: CustomEvent) {
    this.isModalOpen = ev.detail;
  }

  private setHistory = ({ history }: { history: RouterHistory }) => {
    if (!this.history) {
      this.history = history;
      this.history.listen((_location: LocationSegments) => {});
    }
  };

  componentDidLoad() {
    this.isLeftSidebarIn = false;
  }

  private toggleLeftSidebar = () => {
    if (window.innerWidth > 768) {
      return;
    }
    const elements = this.elements.map(el => this.el.querySelector(el)).filter(el => !!el) as Element[];

    this.scrollY = window.scrollY;

    if (this.isLeftSidebarIn) {
      this.isLeftSidebarIn = false;
      document.body.classList.remove('no-scroll');
      elements.forEach(el => {
        el.classList.remove('left-sidebar-in');
        el.classList.add('left-sidebar-out');
      });
      window.requestAnimationFrame(() => window.scrollTo(0, this.scrollY));
    } else {
      this.isLeftSidebarIn = true;
      document.body.classList.add('no-scroll');
      elements.forEach(el => {
        el.classList.add('left-sidebar-in');
        el.classList.remove('left-sidebar-out');
      });
      window.requestAnimationFrame(() => window.scrollTo(0, this.scrollY));
    }
  };

  render() {
    const siteState: SiteState = {
      isLeftSidebarIn: this.isLeftSidebarIn,
      toggleLeftSidebar: this.toggleLeftSidebar,
    };

    return (
      <SiteProviderConsumer.Provider state={siteState}>
        <site-root>
          <site-header />
          <main>
            <stencil-router scrollTopOffset={0}>
              <stencil-route style={{ display: 'none' }} routeRender={this.setHistory} />
              <stencil-route-switch>
                <stencil-route url="/" component="landing-page" exact={true} />

                <stencil-route url="/blog" component="blog-list" exact={true} />
                <stencil-route url="/blog/:pageName" routeRender={({ match }) => <blog-component page={match!.url}></blog-component>} />

                <stencil-route url="/cv" component="cv-page" />
                <stencil-route url={`/${i18n.contact.link}`} component="contact-page" />
                <stencil-route component="notfound-page"></stencil-route>
              </stencil-route-switch>
            </stencil-router>
            <footer class="hide-print">
              <ResponsiveContainer>
                <div class="footer-col">
                  <stencil-route-link url="/" anchorTitle="Matthias Max Enterprise Solution Architect logo">
                    <app-icon name="logo" />
                  </stencil-route-link>
                  <p>© {new Date().getFullYear()} Matthias Max.</p>
                  <ul class="external-links list--unstyled">
                    <li>
                      <a rel="noopener" class="link--external" target="_blank" href="https://twitter.com/bitflowertweets" aria-label="Twitter">
                        <app-icon name="twitter"></app-icon>
                      </a>
                    </li>
                    <li>
                      <a rel="noopener" class="link--external" target="_blank" href="https://www.linkedin.com/in/matthiasmax/" aria-label="LinkedIn">
                        <app-icon name="linkedin"></app-icon>
                      </a>
                    </li>
                    <li>
                      <a rel="noopener" class="link--external" target="_blank" href="https://github.com/bitflower" aria-label="Github">
                        <app-icon name="github"></app-icon>
                      </a>
                    </li>
                  </ul>
                </div>
              </ResponsiveContainer>
            </footer>
          </main>
        </site-root>
        <dsgvo-notice class="hide-print" />
      </SiteProviderConsumer.Provider>
    );
  }
}
