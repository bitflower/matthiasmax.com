import { DeliveryType } from '@matthiasmax/cv-api';
import { Component, Event, EventEmitter, Fragment, h, State } from '@stencil/core';

import { compare } from '../../global/common';
import i18n from '../../stores/i18n.store';

@Component({
  tag: 'project-deliverables-filter',
})
export class ProjectDeliverablesFilter {
  @Event()
  public mmChange!: EventEmitter<string>;

  @State()
  private deliverables: string[] = Object.values(DeliveryType).filter(item => typeof item !== 'number');

  private onClick = (deliverable: string) => {
    this.mmChange.emit(deliverable);
  };

  render() {
    return (
      <Fragment>
        <button class="btn btn--white btn--small filter-btn" onClick={() => this.onClick('all')}>
          Alle
        </button>
        {this.deliverables.sort(compare()).map(deliverable => (
          <button class="btn btn--secondary btn--small filter-btn" onClick={() => this.onClick(deliverable)}>
            {(i18n.deliverables as any)[deliverable]}
          </button>
        ))}
      </Fragment>
    );
  }
}
