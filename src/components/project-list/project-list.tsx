import { projects } from '@matthiasmax/cv-api';
import { Component, h } from '@stencil/core';

import { compare } from '../../global/common';
// import { ResponsiveContainer } from '@ionic-internal/ionic-ds';

@Component({
  tag: 'project-list',
  //   styleUrl: 'project-list.css',
})
export class ProjectList {
  render() {
    return projects.sort(compare('title')).map(project => <project-card project={project} />);
  }
}
