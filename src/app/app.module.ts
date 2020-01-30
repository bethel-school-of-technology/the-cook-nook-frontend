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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoggedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [cookNService],
  bootstrap: [AppComponent]
})
export class AppModule { }
