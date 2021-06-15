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
        <h3 class="project-card__info-block-heading">
          <span class="project-card__info-block-heading-title">{this.project.title}</span>
          {this.project.deliveryTypes.map(item => (
            <info-badge class="project-card__info-block-heading-delivarable">{item}</info-badge>
          ))}
        </h3>
        {this.project.description ? (
          <p class="project-card__info-block">
            <span>{this.project.description}</span>
          </p>
        ) : null}
        <p class="project-card__info-block">
          <div class="label">Kunde:</div>
          <span>{this.project.customer}</span>
        </p>
        <p class="project-card__info-block">
          <div class="label">Branche:</div>
          <span>{this.project.industry}</span>
        </p>
        <p class="project-card__info-block">
          <div class="label">Zeitraum:</div>
          <span>{this.project.year}</span>
        </p>
        <p class="project-card__info-block">
          <div class="label">Tätigkeiten:</div>
          <span>{this.project.taskTypes.sort(compare()).join(', ')}</span>
        </p>
        <p class="project-card__info-block">
          <div class="label">Einsatz von:</div>
          <span>{this.project.toolsUsed.sort(compare()).join(', ')}</span>
        </p>
      </Fragment>
    );
  }
}
