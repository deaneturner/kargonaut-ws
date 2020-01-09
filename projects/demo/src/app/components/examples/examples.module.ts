import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleMarkupExampleComponent } from './simple-markup-example/simple-markup-example.component';
import { BasicStylingExampleComponent } from './basic-styling-example/basic-styling-example.component';
import { TemplateExampleComponent } from './template-example/template-example.component';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { ComponentExampleComponent } from './component-example/component-example.component';
import { SubComponentExampleComponent } from './sub-component-example/sub-component-example.component';
import { ItemExtensionExampleComponent } from './item-extension-example/item-extension-example.component';
import { ItemExampleComponent } from './sub-component-example/item-example/item-example.component';
import { CargoModule } from '../../../../../cargo-domain/src/kn/cargo.module';
import { NgGistModule } from 'ng-gist';



@NgModule({
  declarations: [
      SimpleMarkupExampleComponent,
      BasicStylingExampleComponent,
      TemplateExampleComponent,
      DirectivesExampleComponent,
      ComponentExampleComponent,
      SubComponentExampleComponent,
      ItemExtensionExampleComponent,
      ItemExampleComponent
  ],
  imports: [
    CommonModule,
    CargoModule,
    NgGistModule,
  ]
})
export class ExamplesModule { }
