
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable  } from "rxjs";

import { Vehicles } from './Models/vehicle.model';


@Injectable({

  providedIn: 'root'

})

export class VehicleregistrationService {



 

  constructor(private _http: HttpClient) { }

   
  addVehicleData(data: any):Observable<any>{
    return this._http.post('http://localhost:4441/api/Buyinsurance', data)
  }
 

}