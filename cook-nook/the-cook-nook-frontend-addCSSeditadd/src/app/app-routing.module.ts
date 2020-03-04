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
//import { EditInsComponent } from './edit-ins/edit-ins.component';
//import { InsEditComponent } from './ins-edit/ins-edit.component';
//import { InstructsViewComponent } from './instructs-view/instructs-view.component';
//import { InstructsAddComponent } from './instructs-add/instructs-add.component';
//import { InstructsEditComponent } from './instructs-edit/instructs-edit.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch:"full"},
  {path: "home", component: HomeComponent},//Once authorized, will lead to the logged page. Until we make the authorization, the button to login will lead to the Logged page
  {path: "logged", component: LoggedComponent, canActivate: [AuthGuard]},//This is once they're logged in. Will be the beginning to the site // lists all recipes 
  {path: "add", component: CookAddComponent, canActivate: [AuthGuard]}, //Add page
  {path: "logged/edit/:id", component: CookEditComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "about", component: AboutPageComponent, canActivate: [AuthGuard]}
  //{path: "logged/editInst/:id", component: EditInsComponent}, //edit recipe page
  //{path: "logged/edit/:id", component: InsEditComponent} //edit instruction page
 // {path: "logged/viewInstructs/:id", component: InstructsViewComponent}
  //{path: "logged/edit/:id", component: InstructsEditComponent},
  //{path: "add", component: InstructsAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
