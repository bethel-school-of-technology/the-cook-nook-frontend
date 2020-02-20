import { Component, OnInit } from '@angular/core';
import { cookNService } from '../services/cnservice.service';
import { Router } from '@angular/router';
import {Recipe} from '../models/recipe';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {

  recipes: Recipe[];



  getRecipes(): void {
    this.cookNService.getRecipes().subscribe(r=> (this.recipes = r));    }

  deleteRecipe(id:number): void {
    this.cookNService.deleteRecipe(id).subscribe(r=>
      this.getRecipes());
  }




  constructor(private cookNService: cookNService) { }

  ngOnInit() { 
    this.getRecipes();

  }
 

}
