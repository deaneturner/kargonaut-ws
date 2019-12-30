import { NgModule } from '@angular/core';
import { BundleComponent } from './components/bundle/bundle.component';
import { InlineGridDirective } from './directives/inline-grid/inline-grid.directive';
import { PackageComponent } from './components/package/package.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BundleComponent, InlineGridDirective, PackageComponent],
  imports: [
      CommonModule
  ],
  exports: [BundleComponent, InlineGridDirective, PackageComponent]
})
export class CargoModule { }
