import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pagina404Component } from './component/pagina404/pagina404.component';
import { LogInComponent } from './logIn/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    Pagina404Component,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
