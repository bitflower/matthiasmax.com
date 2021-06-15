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
  @Prop()
  industry?: string;
  @Watch('industry')
  industryHandler() {
    if (!Build.isServer) {
      const filteredIndustries = !this.industry ? projects : projects.filter(project => project.industry === this.industry);
      this.selected = sort(filteredIndustries);
    }
  }

  @State()
  private selected: Project[] = sort(projects);

  render() {
    return this.selected.map(project => <project-card class="project-list__project" project={project} />);
  }
}
