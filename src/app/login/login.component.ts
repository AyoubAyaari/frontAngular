import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService : AuthService,
    private router: Router,private toastr: ToastrService){}
  user = new User();
  err:number=0;

  onLoggedin()
{
  {
    this.authService.login(this.user).subscribe({
    next: (data) => {
    let jwToken = data.headers.get('Authorization')!;
    this.authService.saveToken(jwToken);
    this.toastr.success('Welcome');
    this.router.navigate(['/']); 
    },
    error: (err: any) => {
    this.err = 1; 
    this.toastr.error('check username or password');
    }
    });
    

}}






  ngOnInit(): void {
  }

}
