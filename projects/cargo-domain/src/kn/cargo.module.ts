import { NgModule } from '@angular/core';
import { BundleComponent } from './components/bundle/bundle.component';
import { InlineGridDirective } from './directives/inline-grid/inline-grid.directive';
import { PackageComponent } from './components/package/package.component';
import { CommonModule } from '@angular/common';
import { ListItemDirective } from './directives/list-item/list-item.directive';
import { PackageHeaderComponent } from './components/package/package-header/package-header.component';

@NgModule({
  declarations: [
      BundleComponent,
      InlineGridDirective,
      PackageComponent,
      PackageHeaderComponent,
      ListItemDirective
  ],
  imports: [
      CommonModule
  ],
  exports: [
      BundleComponent,
      InlineGridDirective,
      PackageComponent,
      PackageHeaderComponent,
      ListItemDirective,
  ]
})
export class CargoModule { }
