// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { HttpClient } from "@angular/common/http";
// import { Observable } from 'rxjs';
// import { RenewService } from '../renew.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-renew',
//   templateUrl: './renew.component.html',
//   styleUrls: ['./renew.component.css']
// })
// export class RenewComponent implements OnInit {
//   private _renewform: FormGroup = this._fb.group(
//     {
//     // policyNumber: ['',[Validators.required]],

//     // contactNo: [ '',  [Validators.required]],

//     // email: [ '', [Validators.required]],  

//     policyNumber: [''],

//     contactNo: [ ''],

//     email: [ ''],  
      
//     } 
// ); 
// public get renewform(): FormGroup {
//   return this._renewform;
// }
// public set renewform(value: FormGroup) {
//   this._renewform = value;
// }

// public renewdata: any;


// constructor(private _fb: FormBuilder, private renewService: RenewService, private _router: Router) { }

// ngOnInit(): void {

// this.getAllRenews();

// }

// public savedata(): void {

//   this.renewService.addRenew(this._renewform.value).subscribe(result => {

//       alert(`data added successfully=${result}`);

//   });

// }
// private getAllRenews(): void {

//   this.renewService.getAllRenews().subscribe(data => { this.renewdata = data });

// }

// submitData(data: any) {

//   console.log(data);

//       this.renewService.addRenew(data).subscribe(
       
//          {
//               next: (result: any) => alert(result),
//               error: (err) => console.log(err),
//           complete: () => {
//                    this._router.navigateByUrl('https://localhost:44363/api/Renew');
//              }
      
//           });    
// }
   

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { RenewService } from '../renew.service';
import { Router } from '@angular/router';
import { renew } from '../Models/renew.models';

@Component({
  selector: 'app-renew',
  templateUrl: './renew.component.html',
  styleUrls: ['./renew.component.css']
})
export class RenewComponent implements OnInit {


  data = false;    
  RenewForm: FormGroup | any;    
  message:string | undefined;    
  constructor(private formbulider: FormBuilder,private renewservice:RenewService) { }    
    

  ngOnInit(): void {
    this.RenewForm = this.formbulider.group({ 
      policyNumber: ['', [Validators.required]], 
      
      contactNo:['', [Validators.required]],    
      email: new FormControl('', [Validators.required]),      
      
        
    });    
  }
  onFormSubmit(RenewForm:any)    
  {    
    const user = this.RenewForm.value;    
    this.AddRenew(user);    
  }    
  AddRenew(ren:renew)    
  {    
  this.renewservice.AddRenew(ren).subscribe(    
    ()=>    
    {    
      this.data = true;    
      alert('Data saved Successfully');    
      this.RenewForm.reset();    
    });    
  }    

}
