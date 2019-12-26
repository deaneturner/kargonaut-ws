import { NgModule } from '@angular/core';
import { CargoComponent } from './components/cargo.component';
import { ItemDirective } from './directives/item.directive';

@NgModule({
  declarations: [CargoComponent, ItemDirective],
  imports: [
  ],
  exports: [CargoComponent, ItemDirective]
})
export class CargoModule { }
