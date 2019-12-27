import { NgModule } from '@angular/core';
import { CargoComponent } from './components/cargo.component';
import { InlineGridDirective } from './directives/inline-grid.directive';
import { PackageComponent } from './components/package/package.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CargoComponent, InlineGridDirective, PackageComponent],
  imports: [
      CommonModule
  ],
  exports: [CargoComponent, InlineGridDirective, PackageComponent]
})
export class CargoModule { }
