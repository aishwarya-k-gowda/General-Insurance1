// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


// import { HttpClient } from "@angular/common/http";
// import { Observable } from 'rxjs';
// import { CustomerregistrationService } from '../customerregistration.service';
// //import { ThisReceiver } from '@angular/compiler';
// import { Router } from '@angular/router';
// import { VehicleregistrationService } from '../vehicleregistration.service';
// import { passwordValidator } from '../validators/password-validators';
// import { confirmpasswordValidator } from '../validators/confirm-password-validator';

// @Component({

//   selector: 'app-registration-form',
//   templateUrl: 'customer-registration.component.html',
 
// })
// export class  CustomerRegistrationComponent implements OnInit {

    
//     private _registrationform: FormGroup = this._fb.group({
//         userName: ['',[Validators.required]],
     
//         email: ['',[Validators.required, Validators.email]],

//         dob: ['',[Validators.required]],

//         contactNo: ['', [Validators.required]],
       
//         Address :['',[Validators.required]],
//         password: ['',[Validators.required,passwordValidator(6,10)]],

//         retypepassword: ['',[Validators.required,confirmpasswordValidator]]},);
    
//     // { 
//     //    // validator: ConfirmedValidator('password', 'retypepassword')
//     //   }

//     public get registrationform(): FormGroup {
//         return this._registrationform;
//     }
//     public set registrationform(value: FormGroup) {
//         this._registrationform = value;
//     }
    
//     public registerdata: any;

 
//     constructor(private _fb: FormBuilder, private registerService: CustomerregistrationService, private _router: Router,private registerser : VehicleregistrationService) { }



//     ngOnInit(): void {

//      this.getAllCustomer();
      


//     }

//     public savedata(): void {

//         this.registerService.addCustomer(this._registrationform.value).subscribe(result => {

//             alert(`data added successfully=${result}`);



//         });



//     }
//     private getAllCustomer(): void {

//         this.registerService.getAllCustomer().subscribe(data => { this.registerdata = data });

//     }

//       submitData(data: any) {
     
//         console.log(data)


//             this.registerService.addCustomer(data).subscribe(
               
              
//                {
//                     next: (result: any) => alert(result),
//                     error: (err) => console.log(err),
//                 complete: () => {
//                          this._router.navigateByUrl('https://localhost:44363/api/Registration');
//                    }
            
           
//                 });    
    
//       }
      
       

// }
  
    