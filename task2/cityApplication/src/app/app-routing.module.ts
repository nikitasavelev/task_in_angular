import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './helpers/auth.guard';

import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './city/city.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cities',
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  { path: 'cities', component: CitiesComponent, canActivate: [AuthGuard] },
  { path: 'cities/:id', component: CityComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/404' },
  { path: '404', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
