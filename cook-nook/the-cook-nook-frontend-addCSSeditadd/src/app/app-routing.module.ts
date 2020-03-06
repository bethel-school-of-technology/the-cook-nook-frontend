///Basic Needs
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Pages Below
import {HomeComponent } from './home/home.component';
import { LoggedComponent } from './logged/logged.component';
import { CookAddComponent } from './cook-add/cook-add.component';
import { CookEditComponent } from './cook-edit/cook-edit.component';
import { LoginComponent } from './login/login.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch:"full"},
  {path: "home", component: HomeComponent},//Once authorized, will lead to the logged page. Until we make the authorization, the button to login will lead to the Logged page
  {path: "logged", component: LoggedComponent, canActivate: [AuthGuard]},//This is once they're logged in. Will be the beginning to the site // lists all recipes 
  {path: "add", component: CookAddComponent, canActivate: [AuthGuard]}, //Add page
  {path: "logged/edit/:id", component: CookEditComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "about", component: AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
