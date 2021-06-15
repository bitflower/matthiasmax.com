import { Component, Fragment, h, Prop } from '@stencil/core';
import { Project } from '@matthiasmax/cv-api';
import { compare } from '../../global/common';
// import { ResponsiveContainer } from '@ionic-internal/ionic-ds';

@Component({
  tag: 'project-card',
  styleUrl: 'project-card.css',
})
export class ProjectCard {
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
        <div class="project-card__left">
          <h3 class="project-card__info-block-heading">
            <span class="project-card__info-block-heading-title">{this.project.title}</span>
            {this.project.deliveryTypes.map(item => (
              <info-badge class="project-card__info-block-heading-delivarable">{item}</info-badge>
            ))}
          </h3>
          {this.project.description ? (
            <div class="project-card__info-block">
              <span>{this.project.description}</span>
            </div>
          ) : null}

          <div class="project-card__info-block">
            <h4 class="label">Tätigkeiten:</h4>
            <span>{this.project.taskTypes.sort(compare()).join(', ')}</span>
          </div>
          <div class="project-card__info-block">
            <h4 class="label">Einsatz von:</h4>
            <span>{this.project.toolsUsed.sort(compare()).join(', ')}</span>
          </div>
        </div>
        <div class="project-card__right">
          <div class="kpis">
            <div class="project-card__info-block">
              <h4 class="label">Kunde</h4>
              <h2 class="kpi">{this.project.customer}</h2>
            </div>
          </div>
          <div class="kpis equal-kpis">
            <div class="project-card__info-block">
              <h4 class="label">Branche</h4>
              <h2 class="kpi">{this.project.industry}</h2>
            </div>
            <div class="project-card__info-block">
              <h4 class="label">Jahr</h4>
              <h2 class="kpi">{this.project.year}</h2>
            </div>
            <div class="project-card__info-block">
              <h4 class="label">Dauer</h4>
              <h2 class="kpi">6 Monate</h2>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
