import { Component, h } from '@stencil/core';

@Component({
  tag: 'info-badge',
  styleUrl: 'info-badge.css',
})
export class InfoBadgeCLass {
  //   @Prop()
  //   project!: string;

  // --------------------------------------------------------------------------
  //
  //  Render
  //
  // --------------------------------------------------------------------------

  render() {
    return <slot />;
  }
}
