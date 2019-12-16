import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { examples } from './examples';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', component: AboutComponent, pathMatch: 'full' },
  ...examples,
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
