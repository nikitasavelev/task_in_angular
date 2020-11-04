import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './city/city.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './login/login.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
