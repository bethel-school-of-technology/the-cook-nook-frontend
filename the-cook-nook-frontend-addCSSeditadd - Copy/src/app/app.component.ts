import { Component} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from './models/user';
import { cookNService } from './services/cnservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title: string = 'Cook Nook';
  
  constructor(private http: HttpClient, 
              private _cookNService: cookNService){}

  ngOnInit() {}

  
}
