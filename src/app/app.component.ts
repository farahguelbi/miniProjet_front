import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'patient';
  constructor (public authService: AuthService, private Router:Router) {}
  ngOnInit () {
    let isloggedin: string;
    let loggedUser:string;
    isloggedin = localStorage.getItem('isloggedIn')||'false';
    loggedUser = localStorage.getItem('loggedUser')||'';
    if (isloggedin!="true" || !loggedUser)
    this.Router.navigate(['/login']);
    else
    this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
  onLogout(){
  this.authService.logout();
}
}
