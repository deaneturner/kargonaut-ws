import { NgModule } from '@angular/core';
import { CargoComponent } from './components/cargo.component';
import { InlineGridDirective } from './directives/inline-grid.directive';

@NgModule({
  declarations: [CargoComponent, InlineGridDirective],
  imports: [
  ],
  exports: [CargoComponent, InlineGridDirective]
})
export class CargoModule { }
