import { PackageExampleComponent } from './package-example/package-example.component';
import { SimpleMarkupExampleComponent } from './markup/simple-markup-example/simple-markup-example.component';
import { EmulationExampleComponent } from './markup/emulation-example/emulation-example.component';

export const examples = [
  { path: 'markup-example', component: SimpleMarkupExampleComponent },
  { path: 'emulation-example', component: EmulationExampleComponent },
  { path: 'package-example', component: PackageExampleComponent }
];
