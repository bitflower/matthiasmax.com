import { projects } from '@matthiasmax/cv-api';
import { Component, Event, EventEmitter, Fragment, h, State } from '@stencil/core';

import { compare } from '../../global/common';
// import { ResponsiveContainer } from '@ionic-internal/ionic-ds';

@Component({
  tag: 'project-industry-filter',
})
export class ProjectIndustryFilter {
  constructor() {
    const uniqueIndustries = new Set<string>();
    projects.forEach(project => {
      uniqueIndustries.add(project.industry);
    });
    this.industries = Array.from(uniqueIndustries);
  }

  @Event()
  public mmChange!: EventEmitter<string>;

  @State()
  private industries: string[];

  private onClick = (industry: string) => {
    this.mmChange.emit(industry);
  };

  render() {
    return (
      <Fragment>
        <button class="btn btn--white btn--small filter-btn" onClick={() => this.onClick('all')}>
          Alle
        </button>
        {this.industries.sort(compare()).map(industry => (
          <button class="btn btn--primary btn--small filter-btn" onClick={() => this.onClick(industry)}>
            {industry}
          </button>
        ))}
      </Fragment>
    );
  }
}
