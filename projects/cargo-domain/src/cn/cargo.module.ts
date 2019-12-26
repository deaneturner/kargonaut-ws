import { NgModule } from '@angular/core';
import { CargoComponent } from './components/cargo.component';
import { CompositeLineDirective } from './directives/composite-line.directive';

@NgModule({
  declarations: [CargoComponent, CompositeLineDirective],
  imports: [
  ],
  exports: [CargoComponent, CompositeLineDirective]
})
export class CargoModule { }
