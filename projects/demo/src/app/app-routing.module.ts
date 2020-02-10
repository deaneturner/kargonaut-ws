import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { examples } from './examples';
import { ReactiveListComponent } from './components/demos/demo1/reactive-list.component';


const routes: Routes = [
  { path: 'demos', component: ReactiveListComponent, pathMatch: 'full' },
  ...examples,
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
