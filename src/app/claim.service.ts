import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { claim } from './Models/claim.models';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  //Variable to store the request URL for accessing API.
  req:string="https://localhost:44363/api/Claim/";
  
  //Method to get the list of all players from the API.
  getAllclaims():Observable<claim[]>
  {
    return this.http.get<claim[]>(this.req);//call httpget method of api application
  }
  //Method  to create a new player- Register Player
 
 AddClaim(cla:claim):Observable<claim>
 {
   return this.http.post<claim>(this.req+'Addclaim',cla,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
       
     })
   });
  }
}