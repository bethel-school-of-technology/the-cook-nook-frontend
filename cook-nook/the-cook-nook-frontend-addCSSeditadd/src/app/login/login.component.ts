import { Component, OnInit } from '@angular/core';
import { cookNService } from '../services/cnservice.service';
import { Router } from '@angular/router';
import {Recipe} from '../models/recipe';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { User } from '../models/user';
//import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {};
  constructor(private _cookNService: cookNService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this._cookNService.loginUser(this.loginUserData).subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['logged'])
      }, //stores token in the browser
      err => console.log(err)
    );
  }

}
