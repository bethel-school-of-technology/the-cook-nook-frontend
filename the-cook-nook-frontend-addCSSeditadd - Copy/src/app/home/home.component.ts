import { Component, OnInit } from '@angular/core';
import { cookNService } from '../services/cnservice.service';
import { Router } from '@angular/router';
//import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newUser = {};

  constructor(private _cookNService: cookNService, private router: Router) { }

  addUser(){
    this._cookNService.addUser(this.newUser).subscribe(
    res => {
      this.router.navigate(['login'])
    },  //should store token in the browser??
    err => document.getElementById('error').innerHTML = "This user already exists!"

    )}

  ngOnInit() {
  }

}
