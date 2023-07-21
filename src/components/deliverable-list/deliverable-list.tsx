import { Component, h } from '@stencil/core';

import { getProjects } from '../../utils/language-helpers';
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
    return getProjects()
      .sort((a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0))
      .map(project => <project-card project={project} />);
  }
}
