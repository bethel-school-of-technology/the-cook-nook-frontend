import { Component} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title: string = 'Cook Nook';
 /*  token: string = '';
  user: User = new User();
  error: string;
  base_url: string = "http://localhost:4200//";
  data: any;

  constructor(private http: HttpClient){}

  ngOnInit() {}

  onLogin(){
    this.http.post<any>(this.base_url + 'login',
     {username: this.user.username, password: this.user.password},
     {observe: 'response'})
     .subscribe(
       res => this.token = res.headers.get('Authorization'),
       error => this.error = "Unable to login with username and password."
     );
  }

  getValues() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Authorization", this.token);
    this.http.get(this.base_url + "api/values", {headers: headers})
    .subscribe(res => this.data = res, error => this.error = "Unable to retrieve data.")
  } */
}
