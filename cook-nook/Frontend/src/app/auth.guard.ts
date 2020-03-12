import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { cookNService } from './services/cnservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _cookNService: cookNService, 
              private router: Router) {}

  canActivate(): boolean {
    if(this._cookNService.loggedIn()){
      return true
    } else {
      this.router.navigate(['/home'])
      return false
    }
  }
  
}
