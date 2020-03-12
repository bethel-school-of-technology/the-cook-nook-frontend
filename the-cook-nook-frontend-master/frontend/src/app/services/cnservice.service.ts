import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Recipe} from "../models/recipe";
import { Router } from '@angular/router'; 
import { map } from 'rxjs/operators';
import {User} from '../models/user';


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

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate(['/home'])
  }


  
  
  private getRecipesUrl = "http://localhost:3000/api/logged"

  getRecipes(): Observable<Recipe[]>{
   return this.http.get<Recipe[]>(this.getRecipesUrl).pipe(
    map(data => data.map(data => new Recipe().deserialize(data))));

  } 

  private getRecipeUrl = "http://localhost:3000/api/logged/id"
  getRecipe(id:number):Observable<Recipe> {
    return this.http.get<Recipe>(this.getRecipeUrl +"/"+ id);
  }

  private addRecipeUrl = "http://localhost:3000/api/logged/add"
  
  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.addRecipeUrl, recipe);
  }

  private deleteRecipeUrl = "http://localhost:3000/api/logged/:recipeId"
  deleteRecipe(id:number): Observable<Recipe> {
    return this.http.delete<Recipe>(this.deleteRecipeUrl);
  }

  private editRecipeUrl = "http://localhost:3000/api/logged/edit/:recipeId"
  editRecipe(recipe: Recipe): Observable<Recipe>{
    return this.http.put<Recipe>(this.editRecipeUrl, recipe);
  } 
  
  
  
 
  constructor(private http: HttpClient, 
              private router: Router,
              ) { }
}
