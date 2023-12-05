import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user = new User(); 
  confirmPassword?:string; 
  myForm!: FormGroup; 
  err: any;

  constructor(private formBuilder: FormBuilder,private authSerice:AuthService,private router:Router,private toastr: ToastrService) { } 

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({ 
    
      username : ['', [Validators.required]], 
      email : ['', [Validators.required, Validators.email]], 
      password : ['', [Validators.required, Validators.minLength(6)]], 
      confirmPassword : ['', [Validators.required]] 
   } );
  }
  onRegister() 
{ 
  this.authSerice.registerUser(this.user).subscribe({ 
    next:(res)=>{ 
      this.toastr.success('Welcome');
      // this.router.navigate(["/verifEmail",this.user.email]); 
      this.router.navigate(["/login"]);
     }, 
     error:(err:any)=>{ 
       if(err.status=400){ 
         this.err= err.error.message; 
   
       } 
     } 
   } 
   ) 
}}
