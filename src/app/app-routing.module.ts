import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './layouts/layout.component';
import { WebpublicComponent } from './webpublic/webpublic.component';
import {  NO_ERRORS_SCHEMA } from '@angular/core';
import { InforYourComponent } from './infor-your/infor-your.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] },
  { path: 'webpublic', component: WebpublicComponent },
   { path: 'infor-your', component: InforYourComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [RouterModule]
})

export class AppRoutingModule { }
