import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticatedGuard } from './authenticated.guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  {
    path: '',
    loadChildren: 'app/login/login.module#LoginModule'
  },

  {
    path: 'admin',
    //canActivate: [AuthenticatedGuard],
    loadChildren: 'app/admin/admin.module#AdminModule'
  },

  /*{
    path: '**',
    component: PageNotFoundComponent
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    AuthenticatedGuard
  ]
})
export class AppRoutingModule { }
