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
  //  Render
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td class="bg-red">
              &nbsp;
              {/* <div class="footer-space">&nbsp;</div> */}
            </td>
          </tr>
        </thead>
        <tbody>
          {this.selected.map(project => (
            <tr>
              <td class="project-list__cell" style={{ background: 'red' }}>
                <project-card class="project-list__project my-dummy-block no-break-inside unbreakable" project={project} />
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
