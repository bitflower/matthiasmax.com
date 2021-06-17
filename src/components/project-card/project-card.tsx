import { Component, Fragment, h, Prop } from '@stencil/core';
import { Project } from '@matthiasmax/cv-api';
import { compare } from '../../global/common';

import i18n from '../../stores/i18n.store';
import { Duration } from '../Duration';

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
          <div class="dots-block dots hide-print"></div>
          <div class="content-card">
            <h3 class="project-card__info-block-heading-title">{this.project.title}</h3>
            {this.project.description ? (
              <div class="project-card__info-block">
                <p>{this.project.description}</p>
              </div>
            ) : null}

            <div class="project-card__info-block">
              <h4 class="label">{i18n.task.plural}</h4>
              <p>
                {this.project.taskTypes
                  .sort(compare())
                  .map(item => (i18n.tasks as any)[item])
                  .join(', ')}
              </p>
            </div>
            <div class="project-card__info-block">
              <h4 class="label">Tools und Methoden</h4>
              <p>{this.project.toolsUsed.sort(compare()).join(', ')}</p>
            </div>
          </div>
        </div>
        <div class="project-card__right kpi-rows">
          <kpi-value
            valueFn={() => this.project.deliveryTypes.map(item => <info-badge class="project-card__info-block-heading-delivarable">{(i18n.deliverables as any)[item]}</info-badge>)}
          />
          {this.project.customer.replace(' ', '').toLowerCase().trim() !== 'opensource' ? (
            <div class="kpis equal-kpis">
              <kpi-value label="Kunde" value={this.project.customer} />
            </div>
          ) : null}
          <div class="kpis equal-kpis kpis-wrap">
            <kpi-value label="Branche" value={this.project.industry} />
            <kpi-value label="Jahr" value={this.project.year.toString()} />
            <kpi-value label="Dauer" valueFn={() => <Duration i18nKey={(i18n.common.durations as any)[this.project.duration[1]]} value={this.project.duration[0]} />} />
          </div>
        </div>
      </Fragment>
    );
  }
}
