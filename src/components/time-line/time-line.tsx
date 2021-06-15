import { Component, Fragment, h, Prop } from '@stencil/core';

import { TimeLineItem } from './time-line-item.interface';

@Component({
  tag: 'time-line',
  styleUrl: 'time-line.css',
})
export class TimeLine {
  @Prop()
  items!: TimeLineItem[];

  // --------------------------------------------------------------------------
  //
  //  Render
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Fragment>
        <div class="time-line__container" style={{ '--total': `${this.items.length}` }}>
          <div class="time-line__line"></div>
          {this.items.map((item, i) => (
            <div class="time-line__item" style={{ '--index': `${i}` }}>
              <span class="time-line__label text-ani">{item.label}</span>
              <div class="time-line__dot"></div>
              <div class="time-line__content text-ani">{item.content}</div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}
