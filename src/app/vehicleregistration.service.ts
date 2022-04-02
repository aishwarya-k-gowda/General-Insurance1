
 import { Injectable } from '@angular/core';
 import { HttpClient } from "@angular/common/http";
 import {Observable  } from "rxjs";
 import { VehicleTypes } from './Models/vehicletypes';
 import { Vehicles } from './Models/vehicle.model';
 

 
 @Injectable({
 
   providedIn: 'root'
 
 })
 
 export class VehicleregistrationService {
 

   constructor(private _http: HttpClient) { }
 
    
   getallvehicles():Observable<any>{
     return this._http.get('https://localhost:44363/api/Buyinsurance/' );
    
  }
   addVehicleData(data: any):Observable<any>{
     return this._http.post('https://localhost:44363/api/Buyinsurance/AddVehicleDetails', data);
   }
  
  } 