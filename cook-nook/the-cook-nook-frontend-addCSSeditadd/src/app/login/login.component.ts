import { Component, OnInit } from '@angular/core';
import { cookNService } from '../services/cnservice.service';
import { Router } from '@angular/router';
import {Recipe} from '../models/recipe';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {}
  constructor(private cookNService: cookNService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this.cookNService.loginUser(this.loginUserData).subscribe(r=>(this.router.navigate(['logged']))
    );
  }

}
