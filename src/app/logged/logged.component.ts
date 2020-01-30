import { Component, OnInit } from '@angular/core';
import { cookNService } from '../services/cnservice.service';
import { Router } from '@angular/router';
import {Recipe} from '../models/recipe';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {

  recipes: Recipe[];

  getRecipes(): void {
    this.cookNService.getRecipes().subscribe(r=> (this.recipes = r));    }

  deleteCounter(id:number): void {
    this.cookNService.deleteRecipe(id).subscribe(r=>
      this.getRecipes());
  }


  constructor(private cookNService: cookNService, private router: Router) { }

  ngOnInit() {
  }

}
