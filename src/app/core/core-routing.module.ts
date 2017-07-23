import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

import { AuthGuard } from './guard/auth.guard';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },

  {
    path: '',
    canActivateChild: [MetaGuard],
    loadChildren: 'app/public/login/login.module#LoginModule'
  },

  {
    path: 'admin',
    canActivate: [AuthGuard],
    canActivateChild: [MetaGuard],
    loadChildren: 'app/admin/admin.module#AdminModule'
  },

  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class CoreRoutingModule { }
