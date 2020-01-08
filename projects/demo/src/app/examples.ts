import { SimpleMarkupExampleComponent } from './components/simple-markup-example/simple-markup-example.component';
import { BasicStylingExampleComponent } from './components/basic-styling-example/basic-styling-example.component';
import { DirectivesExampleComponent } from './components/directives-example/directives-example.component';
import { TemplateExampleComponent } from './components/template-example/template-example.component';
import { ComponentExampleComponent } from './components/component-example/component-example.component';
import { AboutComponent } from './components/about/about.component';
import { SubComponentExampleComponent } from './components/sub-component-example/sub-component-example.component';

export const examples = [
  { path: 'About', component: AboutComponent },
  { path: 'markup-example', component: SimpleMarkupExampleComponent },
  { path: 'basic-styling-example', component: BasicStylingExampleComponent },
  { path: 'directives-example', component: DirectivesExampleComponent },
  { path: 'template-example', component: TemplateExampleComponent },
  { path: 'component-example', component: ComponentExampleComponent },
  { path: 'sub-component-example', component: SubComponentExampleComponent }
];
