import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User={
    userId: 0,
    userName: "",
    email: "",
    dob: "",
    contactNo: 0,
    Address: "",
    password: "",
    retypepassword:"",
  };

data = false;    
  UserForm: FormGroup | any;    
  message:string | undefined;   
  formbuilder: any;

msg:string="";


 constructor(private router:Router,formbuilder: FormBuilder,private userservice:UserServiceService) { }    
    
    
  ngOnInit() {    
    
  }    

  onFormSubmit():void
  {
    alert('login successful');
    this.userservice.userLogin(this.user.email,this.user.password).subscribe(data=>{
    this.msg="Successfully LoggedIn ";
    alert(this.msg);
    //Logging the response received from web api.
    console.log(data);
    })

  
  }



}
