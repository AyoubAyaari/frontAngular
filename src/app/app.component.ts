import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  constructor (public authService: AuthService,private router:Router) {}
 
  title = 'miniprojetspring';


  ngOnInit(): void {
    this.authService.loadToken();
    if (this.authService.getToken()==null ||
     this.authService.isTokenExpired())
    this.router.navigate(['/login']);
  }
  onLogout(){
    this.authService.logout();
  }
}
