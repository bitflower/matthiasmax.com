import { Component, Fragment, h, Prop } from '@stencil/core';
import { Project } from '@matthiasmax/cv-api';

@Component({
  tag: 'time-line',
  //   styleUrl: 'time-line.css',
})
export class TimeLine {
  @Prop()
  project!: Project;

  // --------------------------------------------------------------------------
  //
  //  Render
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Fragment>
        <div class="project-card__left">Bla</div>
      </Fragment>
    );
  }
}
