import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Claimhistory } from './Models/claimhistory.model';

@Injectable({
  providedIn: 'root'
})
export class ClaimhistoryService {

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  //Variable to store the request URL for accessing API.
  req:string="https://localhost:44363/api/Claim/";
  
  //Method to get the list of all players from the API.
  getAllclaims():Observable<Claimhistory[]>
  {
    return this.http.get<Claimhistory[]>(this.req);//call httpget method of api application
  }

}