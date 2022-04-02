import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/internal/Observable';
import { Observable } from 'rxjs';
import { User } from './Models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

 
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  //Variable to store the request URL for accessing API.
  req:string="https://localhost:44363/api/Registration/";
  
  
  //Method to get the list of all players from the API.
  getAllRenews():Observable<User[]>
  {
    return this.http.get<User[]>(this.req);//call httpget method of api application
  }
  //Method  to create a new player- Register Player
 
 addUser(user:User):Observable<User>
 {
   return this.http.post<User>(this.req+'register',user,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
       
     })
   });

  }

  userLogin(email:string, password:string){  
  
    var a =this.req+'login';  
  return this.http.post<any>(this.req+'login/'+email+'/'+password,{
    headers:new HttpHeaders({
   'Content-Type':'application/json;charset=UTF-8',
   'Access-Control-Allow-Origin':'*',
   'Access-Control-Allow-Method':'*'  
 })
 });
}
}