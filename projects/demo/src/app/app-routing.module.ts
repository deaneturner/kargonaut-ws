import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { examples } from './examples';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'demos',
    loadChildren: () => import('./components/demos/demos.module').then(m => m.DemosModule),
    canActivate: [AuthGuard]
  },
  ...examples,
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
