import { NgModule } from '@angular/core';
import { CargoComponent } from './components/cargo.component';
import { ItemLayoutDirective } from './directives/item-layout.directive';



@NgModule({
  declarations: [CargoComponent, ItemLayoutDirective],
  imports: [
  ],
  exports: [CargoComponent, ItemLayoutDirective]
})
export class CargoModule { }
