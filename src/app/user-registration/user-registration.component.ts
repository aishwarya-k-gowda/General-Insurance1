import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { UserServiceService } from '../user-service.service';
import { VehicleregistrationService } from '../vehicleregistration.service';
import { Router } from '@angular/router';
import { User } from '../Models/user.model';
// import { passwordValidator } from '../validators/password-validators';
// import { confirmpasswordValidator } from '../validators/confirm-password-validator';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  data = false;    
  registrationform: FormGroup | any;    
  message:string | undefined;    
  constructor(private formbulider: FormBuilder,private userservice:UserServiceService,private vs : VehicleregistrationService) { }    
    

  ngOnInit(): void {
    this.registrationform = this.formbulider.group({ 
      // policyNumber: ['', [Validators.required]], 
      // contactNo:['', [Validators.required]],    
      // email: new FormControl('', [Validators.required]),      

      userName: ['',[Validators.required]],
     
      email: ['',[Validators.required, Validators.email]],

      dob: ['',[Validators.required]],

      contactNo: ['', [Validators.required]],
     
      Address :['',[Validators.required]],
      password: ['',[Validators.required]], //passwordValidator(6,12)]],

      retypepassword: ['',[Validators.required]] //confirmpasswordValidator]]
    },); 
  }
  onFormSubmit(registrationform:any)    
  {    
    const user = this.registrationform.value;    
    this.addUser(user);    
  }    
  addUser(user:User)    
  {    
  this.userservice.addUser(user).subscribe(    
    ()=>    
    {    
      this.data = true;    
      alert('Data saved Successfully');    
      this.registrationform.reset();    
    });    
  }    

}
