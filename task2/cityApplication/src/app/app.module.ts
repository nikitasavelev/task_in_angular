import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './city/city.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { HttpService } from './services/http.service';
import { AuthService } from './services/auth.service';

import { FakeBackendProvider } from './helpers/fakebackend';
import { AuthGuard } from './helpers/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CitiesComponent,
    CityComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpService, AuthService, FakeBackendProvider, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
