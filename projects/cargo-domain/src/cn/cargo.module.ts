import { NgModule } from '@angular/core';
import { CargoComponent } from './components/cargo.component';
import { InlineGridDirective } from './directives/inline-grid.directive';
import { PackageComponentComponent } from './components/package-component/package-component.component';

@NgModule({
  declarations: [CargoComponent, InlineGridDirective, PackageComponentComponent],
  imports: [
  ],
  exports: [CargoComponent, InlineGridDirective]
})
export class CargoModule { }
