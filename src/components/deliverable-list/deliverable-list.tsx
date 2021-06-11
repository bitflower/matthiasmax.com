import { projects } from '@matthiasmax/cv-api';
import { Component, h } from '@stencil/core';
// import { ResponsiveContainer } from '@ionic-internal/ionic-ds';

@Component({
  tag: 'deliverable-list',
  //   styleUrl: 'deliverable-list.css',
})
export class DeliverableList {
  // --------------------------------------------------------------------------
  //
  //  Render
  //
  // --------------------------------------------------------------------------
  render() {
    return projects.sort((a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0)).map(project => <project-card project={project} />);
  }
}
