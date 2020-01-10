import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { examples } from './examples';
import { ReactiveListDemoComponent } from './components/demos/demo1/reactive-list-demo.component';


const routes: Routes = [
  { path: '', component: ReactiveListDemoComponent, pathMatch: 'full' },
  ...examples,
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
