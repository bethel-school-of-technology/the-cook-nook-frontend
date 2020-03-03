import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Recipe} from "../models/recipe";
import {User} from '../models/user';
//import { InstructsAddComponent } from '../instructs-add/instructs-add.component';
//import { InstructsEditComponent} from '../instructs-edit/instructs-edit.component';
@Injectable({
  providedIn: 'root'
})
export class cookNService {

  private registerUrl = "http://localhost:3000/api/register"
  
  addUser(user) {
    return this.http.post<any>(this.registerUrl, user);
  }

  private loginUrl = "http://localhost:3000/api/login"

  loginUser(user){
    return this.http.post<any>(this.loginUrl, user)
  }

  private getRecipesUrl = "http://localhost:3000/api/logged"

  getRecipes(): Observable<Recipe[]>{
   return this.http.get<Recipe[]>(this.getRecipesUrl);
  }

  private getRecipeUrl = "http://localhost:3000/api/logged/id"
  getRecipe(id:number):Observable<Recipe> {
    return this.http.get<Recipe>(this.getRecipeUrl +"/"+ id);
  }

  private addRecipeUrl = "http://localhost:3000/api/logged/add"
  
  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.addRecipeUrl, recipe);
  }

  private deleteRecipeUrl = "http://localhost:3000/api/logged/id"
  deleteRecipe(id:number): Observable<Recipe> {
    return this.http.delete<Recipe>(this.deleteRecipeUrl +"/"+ id);
  }

  private editRecipeUrl = "http://localhost:3000/api/logged/edit/id"
  editRecipe(recipe: Recipe): Observable<Recipe>{
    return this.http.put<Recipe>(this.editRecipeUrl + "/" + recipe.id, recipe);
  } 
  
  
  
 
  constructor(private http: HttpClient) { }
}
