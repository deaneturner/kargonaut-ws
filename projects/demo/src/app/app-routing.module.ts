import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { examples } from './examples';
import { ReactiveListComponent } from './components/demos/demo1/reactive-list.component';
import { ItemsResolver } from './services/items.resolver';

const routes: Routes = [
  { path: 'demos',
    component: ReactiveListComponent,
    pathMatch: 'full',
    resolve: {
      items: ItemsResolver
    }},
  ...examples,
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
