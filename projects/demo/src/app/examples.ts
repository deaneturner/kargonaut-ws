import { PackageExampleComponent } from './package-example/package-example.component';
import { SimpleMarkupExampleComponent } from './markup/simple-markup-example/simple-markup-example.component';
import { BasicStylingExampleComponent } from './markup/basic-styling-example/basic-styling-example.component';

export const examples = [
  { path: 'markup-example', component: SimpleMarkupExampleComponent },
  { path: 'basic-styling-example', component: BasicStylingExampleComponent },
  { path: 'package-example', component: PackageExampleComponent }
];
