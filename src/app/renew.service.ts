// import { Injectable } from '@angular/core';
// import {HttpClient } from "@angular/common/http";
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class RenewService {

//   constructor(private _http:HttpClient ) {

//   }

//   getAllRenews():Observable<any>{
//     return this._http.get('https://localhost:44363/api/Renew');
//   }
//   addRenew(data: any):Observable<any>{
//    return this._http.post('https://localhost:44363/api/Renew/AddRenew', data);
//  }
//  // getCustomerById(data: any):Observable<any>{
//  //   return this.register.post('http://localhost:44395/api/', data)
//  // }
// }

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { renew } from './Models/renew.models';


@Injectable({
  providedIn: 'root'
})
export class RenewService {

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  //Variable to store the request URL for accessing API.
  req:string="https://localhost:44363/api/Renew/";
  
  //Method to get the list of all players from the API.
  getAllRenews():Observable<renew[]>
  {
    return this.http.get<renew[]>(this.req);//call httpget method of api application
  }
  //Method  to create a new player- Register Player
 
 AddRenew(ren:renew):Observable<renew>
 {
   return this.http.post<renew>(this.req+'AddRenew',ren,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
       
     })
   });
  }
}