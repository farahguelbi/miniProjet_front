import { Injectable } from '@angular/core';
import { user } from '../model/user.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: user[] = [
    { "username": "admin", "password": "123", "roles": ['ADMIN'] },
    { "username": "farah", "password": "456", "roles": ['USER'] }
  ];
  public loggedUser!:string;
  public isloggedIn: Boolean = false;
   public roles!:string[];

   constructor(private router: Router) { }

  SignIn(user :user):Boolean{
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
    if(user.username== curUser.username && user.password==curUser.password) {
    validUser = true;
    this.loggedUser = curUser.username as string;
    this.isloggedIn = true;
    this.roles = curUser.roles;
    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    }
    });
    return validUser;
    }
    logout() {
      this.isloggedIn= false;
      this.loggedUser = undefined!;
      this.roles = undefined!;
      localStorage.removeItem('loggedUser');
      localStorage.setItem('isloggedIn',String(this.isloggedIn));
      this.router.navigate(['/login']);
      }
      setLoggedUserFromLocalStorage(login : string) {
        this.loggedUser = login;
        this.isloggedIn = true;
        this.getUserRoles(login);
        }
        getUserRoles(username :string){
        this.users.forEach((curUser) => {
              if( curUser.username == username ) {
                   this.roles = curUser.roles;
        }
        });
        }
      
    isAdmin():Boolean{
      if (!this.roles) //this.roles== undefiened
      return false;
      return (this.roles.indexOf('ADMIN') >-1);
      } 
    }
