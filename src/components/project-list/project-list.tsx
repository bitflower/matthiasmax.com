import { Project, projects } from '@matthiasmax/cv-api';
import { Build, Component, h, Prop, State, Watch } from '@stencil/core';

import { compare } from '../../global/common';
// import { ResponsiveContainer } from '@ionic-internal/ionic-ds';

const sort = (tobesorted: Project[]) => {
  return tobesorted.sort(compare('timestamp', -1));
};

@Component({
  tag: 'project-list',
  styleUrl: 'project-list.css',
})
export class ProjectList {
  private tableElement: HTMLTableElement | undefined;

  // --------------------------------------------------------------------------
  //
  //  Public Properties
  //
  // --------------------------------------------------------------------------

  @Prop()
  industry?: string;
  @Watch('industry')
  industryHandler() {
    if (!Build.isServer) {
      this.filter();
    }
  }

  @Prop()
  deliverable?: string;
  @Watch('deliverable')
  deliverableHandler() {
    if (!Build.isServer) {
      this.filter();
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @State()
  private selected: Project[] = sort(projects);

  private isBreakPageMode: boolean;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  private filter() {
    const filteredIndustries1 = !this.industry ? projects : projects.filter(project => project.industry === this.industry);
    const filteredIndustries2 = !this.deliverable
      ? filteredIndustries1
      : filteredIndustries1.filter(project => this.deliverable && (project.deliveryTypes as string[]).includes(this.deliverable));
    this.selected = sort(filteredIndustries2);
  }

  // --------------------------------------------------------------------------
  //
  //  Life Cycle
  //
  // --------------------------------------------------------------------------

  constructor() {
    // Open the /cv?break-page=true url to enable the page break mode
    const urlSearchParams = new URLSearchParams(window.location.search);
    this.isBreakPageMode = urlSearchParams.get('break-page') === 'true';
  }

  // --------------------------------------------------------------------------
  //
  //  Event Listener
  //
  // --------------------------------------------------------------------------

  private onProjectClick(index: number) {
    if (!this.isBreakPageMode || !this.tableElement) {
      return;
    }
    const a = this.tableElement.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    const theRow = a[index];
    const card = theRow.getElementsByTagName('project-card')[0];
    // console.log(`BF YO`, index, card);
    if (card.style.paddingBottom.length > 0) {
      card.style.paddingBottom = '';
    } else {
      card.style.paddingBottom = '1cm';
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Render
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <table ref={el => (this.tableElement = el)}>
        <thead>
          <tr>
            <td>
              &nbsp;
              {/* <div class="footer-space">&nbsp;</div> */}
            </td>
          </tr>
        </thead>
        <tbody>
          {this.selected.map((project, index) => (
            <tr>
              <td class="project-list__cell">
                <project-card class="project-list__project my-dummy-block no-break-inside unbreakable" project={project} onClick={() => this.onProjectClick(index)} />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td class="bg-blue">
              &nbsp;
              {/* <div class="footer-space">&nbsp;</div> */}
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}
