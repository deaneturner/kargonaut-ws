import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[knGrid]'
})
export class InlineGridDirective {

  @Input() columns: string[] | null = null;
  @Input() rows: string[] | null = null;

  @HostBinding('style.display')
  get displayStyle() {
    return 'grid';
  }

  @HostBinding('style.grid-template-columns')
  get displayGridTemplateColumns() {
    return this.columns ? this.columns.join(' ') : null;
  }

  @HostBinding('style.grid-template-rows')
  get displayGridTemplateRpws() {
    return this.rows ? this.rows.join(' ') : null;
  }

  constructor() {
  }
}
