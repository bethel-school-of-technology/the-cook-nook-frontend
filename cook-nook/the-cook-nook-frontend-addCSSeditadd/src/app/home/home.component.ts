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
      localStorage.setItem('token', res.token)
      this.router.navigate(['logged'])
    },  //should store token in the browser??
    err => console.log(err)

    )}

  ngOnInit() {
  }

}
