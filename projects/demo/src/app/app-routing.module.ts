import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { examples } from './examples';
import { ComponentExampleComponent } from './components/examples/component-example/component-example.component';


const routes: Routes = [
  { path: '', component: ComponentExampleComponent, pathMatch: 'full' },
  ...examples,
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
