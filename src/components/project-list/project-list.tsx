import { Project, projects } from '@matthiasmax/cv-api';
import { Component, h, Prop, State, Watch } from '@stencil/core';

import { compare } from '../../global/common';
// import { ResponsiveContainer } from '@ionic-internal/ionic-ds';

@Component({
  tag: 'project-list',
  styleUrl: 'project-list.css',
})
export class ProjectList {
  constructor() {
    this.selected = this.sort(projects);
  }

  @Prop()
  industry?: string;
  @Watch('industry')
  industryHandler() {
    const filteredIndustries = !this.industry ? projects : projects.filter(project => project.industry === this.industry);
    this.selected = this.sort(filteredIndustries);
  }

  private sort(tobesorted: Project[]) {
    return tobesorted.sort(compare('timestamp', -1));
  }

  componentWillLoad() {
    this.industryHandler();
  }

  @State()
  private selected: Project[] = [];

  render() {
    return this.selected.map(project => <project-card class="project-list__project" project={project} />);
  }
}
