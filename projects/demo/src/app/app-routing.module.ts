import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: 'demos',
    loadChildren: () => import('./components/demos/demos.module').then(m => m.DemosModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'examples',
    loadChildren: () => import('./components/examples/examples.module').then(m => m.ExamplesModule)
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: '/'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
