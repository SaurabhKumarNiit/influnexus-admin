import { Component, OnInit } from '@angular/core';
import { FormBuilder,NgForm,Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';
import { EditingDataService } from '../services/editing-data.service';

@Component({
  selector: 'app-login-interface',
  templateUrl: './login-interface.component.html',
  styleUrls: ['./login-interface.component.css']
})
export class LoginInterfaceComponent implements  OnInit {
  
 
  constructor(private service :EditingDataService,private fb : FormBuilder, private router : Router) { }

  loginForm = this.fb.group({
    email: ['',Validators.required],
    password: ['',Validators.required]
  })
  get email() { return this.loginForm.get("email") }
  get password() { return this.loginForm.get("password") }

  user:any;
  loggedIn:any;

 
  ngOnInit() {

  }


  loginUser: any = { name:'', email:'',password:''};

  data: any;
  decodeData: any;

check(){
  console.log('Response from server:', this.loginForm.value);
}


  onSubmit() {
    this.service.loginCustomer(this.loginForm.value).subscribe(response => {
      const useremail:any = this.loginForm.value.email;
      console.log(useremail);

      localStorage.setItem('email',useremail);
     //  localStorage.setItem('jwt',this.data.token);

    //  if(){}

      Swal.fire({
       title: 'You are Logged In Successfully',
       showClass: {
         popup: 'animate__animated animate__fadeInDown'
       },
       hideClass: {
         popup: 'animate__animated animate__fadeOutUp'
       }
     })

     this.router.navigateByUrl('/admin');
      
    },
    error=>
    {
     Swal.fire({
       icon: 'error',
       title: 'Failed...',
       text: 'Please Enter Correct Email and Password!',
     })
    }
    );
  }



}
