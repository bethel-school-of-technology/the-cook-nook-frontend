import { Component, OnInit } from '@angular/core';
import { cookNService } from '../services/cnservice.service';
import {Recipe} from '../models/recipe';


@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor(private cookNService: cookNService) { }

  ngOnInit() {
  }

}
