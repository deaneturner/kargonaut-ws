import { NgModule } from '@angular/core';
import { InlineGridDirective } from './directives/inline-grid/inline-grid.directive';
import { PackageComponent } from './components/package/package.component';
import { CommonModule } from '@angular/common';
import { ListItemDirective } from './directives/list-item/list-item.directive';
import { PackageHeaderDirective } from './directives/package-header/package-header.directive';
import { PackageMaterialComponent } from './components/package-material/package-material.component';

@NgModule({
  declarations: [
      InlineGridDirective,
      PackageComponent,
      PackageMaterialComponent,
      ListItemDirective,
      PackageHeaderDirective,
  ],
  imports: [
      CommonModule
  ],
  exports: [
      InlineGridDirective,
      PackageComponent,
      PackageMaterialComponent,
      ListItemDirective,
      PackageHeaderDirective,
  ]
})
export class CargoModule { }
