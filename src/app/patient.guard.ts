import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientGuard implements CanActivate {
  constructor(private AuthService: AuthService,
     private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.AuthService.isAdmin()) {
      return true;
    } else {
      this.router.navigate(['app-forbidden']);
      return false;
    }
  }
}
