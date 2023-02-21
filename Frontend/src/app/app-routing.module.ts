import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { Pagina404Component } from './component/pagina404/pagina404.component';
import { LogInComponent } from './logIn/log-in/log-in.component';
import { HomeComponent } from './home/home/home.component';


const routes: Routes = [
  {path: '**', component: Pagina404Component},
  {path: '', redirectTo:'/inicio', pathMatch:'full'},
  {path:'login', component: LogInComponent},
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard],}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
