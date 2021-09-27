import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'hero-block',
  //   styleUrl: 'hero-block.css',
})
export class HeroBlock {
  @Prop()
  caption: string = '';

  render() {
    return (
      <Host>
        <h2>{this.caption}</h2>
        <slot />
      </Host>
    );
  }
}
