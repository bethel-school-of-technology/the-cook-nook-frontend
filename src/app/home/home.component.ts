import { Component, OnInit } from '@angular/core';
import { cookNService } from '../services/cnservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cookNService: cookNService, private router: Router) { }

  ngOnInit() {
  }

}
