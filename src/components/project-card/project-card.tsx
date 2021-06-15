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
          <div class="dots-block dots"></div>
          <div class="content-card">
            <h3 class="project-card__info-block-heading-title">{this.project.title}</h3>
            {this.project.description ? (
              <div class="project-card__info-block">
                <p>{this.project.description}</p>
              </div>
            ) : null}

            <div class="project-card__info-block">
              <h4 class="label">Tätigkeiten:</h4>
              <p>{this.project.taskTypes.sort(compare()).join(', ')}</p>
            </div>
            <div class="project-card__info-block">
              <h4 class="label">Einsatz von:</h4>
              <p>{this.project.toolsUsed.sort(compare()).join(', ')}</p>
            </div>
          </div>
        </div>
        <div class="project-card__right kpi-rows">
          <div class="kpis equal-kpis">
            <div class="project-card__info-block">
              <h4 class="label">Kunde</h4>
              <h2 class="kpi small-kpi">{this.project.customer}</h2>
            </div>
            <div class="project-card__info-block">
              <h4 class="label">&nbsp;</h4>
              <h2 class="kpi small-kpi">
                {this.project.deliveryTypes.map(item => (
                  <info-badge class="project-card__info-block-heading-delivarable">{item}</info-badge>
                ))}
              </h2>
            </div>
          </div>
          <div class="kpis equal-kpis">
            <div class="project-card__info-block">
              <h4 class="label">Branche</h4>
              <h2 class="kpi large-kpi">{this.project.industry}</h2>
            </div>
            <div class="project-card__info-block">
              <h4 class="label">Jahr</h4>
              <h2 class="kpi large-kpi">{this.project.year}</h2>
            </div>
            <div class="project-card__info-block">
              <h4 class="label">Dauer</h4>
              <h2 class="kpi large-kpi">6 Monate</h2>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
