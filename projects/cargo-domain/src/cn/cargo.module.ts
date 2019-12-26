import { NgModule } from '@angular/core';
import { CargoComponent } from './components/cargo.component';
import { InlineGridDirective } from './directives/inline-grid.directive';
import { PackageComponent } from './components/package/package.component';

@NgModule({
  declarations: [CargoComponent, InlineGridDirective, PackageComponent],
  imports: [
  ],
  exports: [CargoComponent, InlineGridDirective, PackageComponent]
})
export class CargoModule { }
