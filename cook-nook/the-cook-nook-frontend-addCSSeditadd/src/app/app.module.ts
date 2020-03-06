//Base Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//service//
import { cookNService } from './services/cnservice.service';
import { TokenInterceptorService } from './token-interceptor.service';
//Page components//
import { HomeComponent } from './home/home.component';
import { LoggedComponent } from './logged/logged.component';
//service import needs
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookAddComponent } from './cook-add/cook-add.component';
import { CookEditComponent } from './cook-edit/cook-edit.component';
import { LoginComponent } from './login/login.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AuthGuard } from './auth.guard';
//import { NavComponent } from './nav/nav.component';
//import { EditInsComponent } from './edit-ins/edit-ins.component';
//import { InsEditComponent } from './ins-edit/ins-edit.component';
//import { InstructsEditComponent } from './instructs-edit/instructs-edit.component';
//import { InstructsAddComponent } from './instructs-add/instructs-add.component';
//import { InstructsViewComponent } from './instructs-view/instructs-view.component';

export function tokenGetter(){
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoggedComponent,
    CookAddComponent,
    CookEditComponent,
    LoginComponent,
    AboutPageComponent, 
    //NavComponent
    //EditInsComponent,
    //InsEditComponent,
    //InstructsEditComponent,
    //InstructsAddComponent,
    //InstructsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  exports:[
    LoggedComponent
  ],

  providers: [cookNService, AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
