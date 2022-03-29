

import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
        manufacturer: ['',
            [Validators.required]
        ],
      
        model: [
            '',
            [Validators.required]
        ],

        drivingLicenseNumber: ['', [Validators.required]],
        registrationNumber: [
            '',
            [
                Validators.required

            ]
        ],
        engineNumber: [
            '',
            [
               
                Validators.required
            ]
        ],
        chassisNumber: [
            '',
            [
                Validators.required

            ]

        ],
        vehicleType:[
            ''
        ]

    }




    );
    public get vehicleregistration(): FormGroup {
        return this._vehicleregistration;
    }
    public set vehicleregistration(value: FormGroup) {
        this._vehicleregistration = value;
    }

    constructor(private _fb: FormBuilder, private vs: VehicleregistrationService, private _router: Router) { }

public getallvehicles():void{

    this.vs.addVehicleData(this._vehicleregistration.value).subscribe((result: any) => {console.log(result);
    })
}




  ngOnInit(): void {

   




  }



  submitData(data :any) {

    this.vs.addVehicleData(data).subscribe(

  
        {
            next: (result: any) => alert(result),
       
        complete: () => {
            this._router.navigate(['/plan-table'])
           }
    
   
        })



    ;

    

  }

}