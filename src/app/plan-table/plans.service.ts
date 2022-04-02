import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable  } from "rxjs";
import { Router } from '@angular/router';
import { insuranceduration, insuranceplantype } from '../Models/plans.model';


@Injectable(

)
export class plansservice {
  

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  //Variable to store the request URL for accessing API.
  req:string="https://localhost:44363/api/Plans/";

  req1: string="https://localhost:44363/api/Duration/";
  

  
  //Method to get the list of all players from the API.
  getAllPlanType():Observable<insuranceplantype[]>
  {
    return this.http.get<insuranceplantype[]>(this.req);//call httpget method of api application
  }
  //Method  to create a new player- Register Player
 
 AddPlanType(iplantype:insuranceplantype):Observable<insuranceplantype>
 {
   return this.http.post<insuranceplantype>(this.req+'AddPlantype',iplantype,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
       
     })
   });
 }

 getAllDurationType():Observable<insuranceduration[]>
 {
   return this.http.get<insuranceduration[]>(this.req1);//call httpget method of api application
 }
   
 AddDurationType(idurationtype:insuranceduration):Observable<insuranceduration>
 {
   return this.http.post<insuranceduration>(this.req1+'AddDurationtype',idurationtype,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
       
     })
   });
 }

 selectdata(data: any):Observable<any>{
  return this.http.post('https://localhost:37841/api/Buyinsurance/', data);
}

      //Method to get the list of all players from the API.
  // getAllDurationType():Observable<insuranceduration[]>
  // {
  //   return this.http.get<insuranceduration[]>(this.req1);//call httpget method of api application
  // }
  //Method  to create a new player- Register Player
 
//   AddDurationValue(idurationtype:insuranceduration):Observable<insuranceduration>
//  {
//    return this.http.post<insuranceduration>(this.req+'AddRenew',idurationtype,{
//      headers:new HttpHeaders({
//        'Content-Type':'application/json;charset=UTF-8',
//        'Access-Control-Allow-Origin':'*',
//        'Access-Control-Allow-Method':'*'
       
//      })
//   /



  }



