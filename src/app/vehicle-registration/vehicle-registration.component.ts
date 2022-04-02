import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { VehicleTypes } from '../Models/vehicletypes';
import { HttpErrorResponse } from "@angular/common/http";
import { Vehicles } from '../Models/vehicle.model';

import { VehicleregistrationService } from '../vehicleregistration.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-vehicle-registration',
    templateUrl: './vehicle-registration.component.html',
    styleUrls: ['./vehicle-registration.component.css']
})
export class VehicleRegistrationComponent implements OnInit {

    private _vehicleregistration: FormGroup = this._fb.group({
        manufacturer: ['',[Validators.required]],
      
        model: [ '', [Validators.required]],

        drivingLicenseNumber: ['', [Validators.required]],

        registrationNumber: [ '',[Validators.required ] ],

        engineNumber: [ '', [Validators.required]],

        chasisNumber: ['',[Validators.required]],
        vehicleType:[ ''],
        vehicleAge:['']

    });



    public get vehicleregistration(): FormGroup {
        return this._vehicleregistration;
    }
    public set vehicleregistration(value: FormGroup) {
        this._vehicleregistration = value;
    }

    public registerdata: any;
    constructor(private _fb: FormBuilder, private vs: VehicleregistrationService, private _router: Router) { }

    ngOnInit(): void {

   
        this.getallvehicles();
    
    
    
      }

      public savedata(): void {

        this.vs.addVehicleData(this._vehicleregistration.value).subscribe(result => {

            alert(`data added successfully=${result}`);
        });

         }
    private getallvehicles(): void {

        this.vs.getallvehicles().subscribe(data => { this.registerdata = data });

    }

      submitData(data: any) {
     
        console.log(data)


            this.vs.addVehicleData(data).subscribe(
               
              
            {
                    next: (result: any) => alert("data saved successfully"),
                    error: (err) => console.log(err),
                complete: () => {
                         this._router.navigateByUrl('https://localhost:44363/api/Buyinsurance');
                   }
            
           
                });
    
      }
      
       

}
  
    