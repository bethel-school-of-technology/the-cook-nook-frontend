//Base Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//service//
import {cookNService} from './services/cnservice.service';
//Page components//
import { HomeComponent } from './home/home.component';
import { LoggedComponent } from './logged/logged.component';
//service import needs
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CookAddComponent } from './cook-add/cook-add.component';
import { CookEditComponent } from './cook-edit/cook-edit.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoggedComponent,
    CookAddComponent,
    CookEditComponent,
    NavComponent
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

  providers: [cookNService],
  bootstrap: [AppComponent]
})
export class AppModule { }
