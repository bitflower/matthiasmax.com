import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kpi-value',
  styleUrl: 'kpi-value.css',
})
export class KpiValue {
  @Prop()
  label?: string;

  @Prop()
  value?: string;

  @Prop()
  valueFn?: () => any;

  // --------------------------------------------------------------------------
  //
  //  Render
  //
  // --------------------------------------------------------------------------

  render() {
    return this.label ? (
      <div class="kpi-value__info-block">
        <h4 class="label">{this.label}</h4>
        <h2 class="kpi normal-kpi">{this.value ? this.value : this.valueFn ? this.valueFn() : null}</h2>
      </div>
    ) : (
      <h2 class="kpi normal-kpi">{this.value ? this.value : this.valueFn ? this.valueFn() : null}</h2>
    );
  }
}
