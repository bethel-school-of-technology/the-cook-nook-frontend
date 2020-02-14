///Basic Needs
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Pages Below
import {HomeComponent } from './home/home.component';
import { LoggedComponent } from './logged/logged.component';
import { CookAddComponent } from './cook-add/cook-add.component';
import { CookEditComponent } from './cook-edit/cook-edit.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch:"full"},
  {path: "home", component: HomeComponent},//Once authorized, will lead to the logged page. Until we make the authorization, the button to login will lead to the Logged page
  {path: "logged", component: LoggedComponent},//This is once they're logged in. Will be the beginning to the site // lists all recipes 
  {path: "add", component: CookAddComponent}, //Add page
  {path: "logged/edit/:id", component: CookEditComponent}  //edit page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
