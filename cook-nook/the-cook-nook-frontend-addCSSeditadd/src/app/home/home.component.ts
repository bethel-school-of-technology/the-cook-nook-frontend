import { Component, OnInit } from '@angular/core';
import { cookNService } from '../services/cnservice.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newUser = {};

  constructor(private cookNService: cookNService, private router: Router) { }

  addUser(){
    this.cookNService.addUser(this.newUser).subscribe(r=>(this.router.navigate(['logged'])))
  }

  ngOnInit() {
  }

}
