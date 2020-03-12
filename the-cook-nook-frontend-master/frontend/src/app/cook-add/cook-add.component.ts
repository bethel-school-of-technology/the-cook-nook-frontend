import { Component, OnInit } from '@angular/core';
import {Recipe} from '../models/recipe';
import {cookNService} from '../services/cnservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cook-add',
  templateUrl: './cook-add.component.html',
  styleUrls: ['./cook-add.component.css']
})
export class CookAddComponent implements OnInit {

  newRecipe: Recipe = new Recipe();

  
  addRecipe() {
    this.cookNService.addRecipe(this.newRecipe).subscribe(r=>(this.router.navigate(["logged"])))
  }


  constructor(private cookNService: cookNService, private router: Router) { }

  ngOnInit() {
  }

}
