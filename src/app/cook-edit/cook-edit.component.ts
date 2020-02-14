import { Component, OnInit } from '@angular/core';
import {Recipe} from '../models/recipe';
import {cookNService} from '../services/cnservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cook-edit',
  templateUrl: './cook-edit.component.html',
  styleUrls: ['./cook-edit.component.css']
})
export class CookEditComponent implements OnInit {
  editRecipe: Recipe = new Recipe();

  saveRecipe() {
    this.cookNService
    .editRecipe(this.editRecipe)
    .subscribe(r=> this.router.navigate(["logged"]));
  }


  constructor(private cookNService: cookNService, 
    private router: Router,
    private route: ActivatedRoute) { }
      
  ngOnInit() {
    this.route.params
    .subscribe(param => {this.cookNService
    .getRecipe(+param["id"])
    .subscribe(r=> (this.editRecipe = r))})
  }

}
