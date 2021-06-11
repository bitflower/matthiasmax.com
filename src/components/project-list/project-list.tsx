import { projects } from '@matthiasmax/cv-api';
import { Component, h } from '@stencil/core';
// import { ResponsiveContainer } from '@ionic-internal/ionic-ds';

@Component({
  tag: 'project-list',
  //   styleUrl: 'project-list.css',
})
export class ProjectList {
  render() {
    return projects.map(project => <p>{project.title}</p>);
  }
}
