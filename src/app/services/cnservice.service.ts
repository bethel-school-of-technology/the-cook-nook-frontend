import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Recipe} from "../models/recipe";
//import { InstructsAddComponent } from '../instructs-add/instructs-add.component';
//import { InstructsEditComponent} from '../instructs-edit/instructs-edit.component';
@Injectable({
  providedIn: 'root'
})
export class cookNService {

  url:string = "http://localhost:3000/recipes"//environment variables for this, abstraction, less tied down to a specific env//backend url will go here when finished and connect the two together :D


// getRecipes(){
//   this.http.get<Recipe[]>(this.url).subscribe(recipes => {
//     this.recipes = recipes;
//     console.log('Recipes', this.recipes)
//   }) tried this it didn't work so I used what is below
// }

 getRecipes(): Observable<Recipe[]>{
   return this.http.get<Recipe[]>(this.url);
 }

  getRecipe(id:number):Observable<Recipe> {
    return this.http.get<Recipe>(this.url +"/"+ id);
  }

  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.url, recipe);
  }

  deleteRecipe(id:number): Observable<Recipe> {
    return this.http.delete<Recipe>(this.url +"/"+ id);
  }
  editRecipe(recipe: Recipe): Observable<Recipe>{
    return this.http.put<Recipe>(this.url + "/" + recipe.id, recipe);
  }
  //instructs after this
  //getInstructs(): Observable<Recipe["instructs"][]>{
  //  return this.http.get<Recipe["instructs"][]>(this.url);
 // }
 
   //getInstruct(id:number):Observable<Recipe["instructs"][]> {
   //  return this.http.get<Recipe["instructs"][]>(this.url +"/"+ id);
  // }
 
   //addInstruct(recipe: Recipe): Observable<Recipe["instructs"][]> {
   //  return this.http.post<Recipe["instructs"][]>(this.url, recipe);
  // }
 
   //deleteInstruct(id:number): Observable<Recipe["instructs"][]> {
   //  return this.http.delete<Recipe["instructs"][]>(this.url +"/"+ id);
   //}
   //editInstruct(Ins: Recipe["instructs"][]): Observable<Recipe["instructs"][]>{
   //  return this.http.put<Recipe["instructs"][]>(this.url + "/" + Ins, ["instructs.id"]);
  // }
  constructor(private http: HttpClient) { }
}
//connect with Janine 