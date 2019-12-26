import { SimpleMarkupExampleComponent } from './markup/simple-markup-example/simple-markup-example.component';
import { BasicStylingExampleComponent } from './markup/basic-styling-example/basic-styling-example.component';
import { DirectivesExampleComponent } from './markup/directives-example/directives-example.component';
import { PackageExampleComponent } from './package-example/package-example.component';

export const examples = [
  { path: 'markup-example', component: SimpleMarkupExampleComponent },
  { path: 'basic-styling-example', component: BasicStylingExampleComponent },
  { path: 'directives-example', component: DirectivesExampleComponent },
  { path: 'package-example', component: PackageExampleComponent }
];
