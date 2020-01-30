import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Recipe} from "../models/recipe";

@Injectable({
  providedIn: 'root'
})
export class cookNService {

  url:string = "http://localhost:3000/recipes"//backend url will go here when finished and connect the two together :D

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
  constructor(private http: HttpClient) { }
}
