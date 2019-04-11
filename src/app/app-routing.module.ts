import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './layouts/public.component';
import { SecureComponent } from './layouts/secure.component';

import { PUBLIC_ROUTES } from './public/public.routes';
import { Guard } from './guard.service';
import { SECURE_ROUTES } from './secure/secure.routes';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', },
  { path: 'home', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
  { path: 'dashboard', component: SecureComponent, canActivate: [Guard], data: { title: 'Secure Views' }, children: SECURE_ROUTES }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
