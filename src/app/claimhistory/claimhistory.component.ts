import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../claim.service';
import { claim } from '../Models/claim.models';
import { Claimhistory } from '../Models/claimhistory.model';
import { JsonPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { ClaimhistoryService } from '../claimhistory.service';

@Component({
  selector: 'app-claimhistory',
  templateUrl: './claimhistory.component.html',
  styleUrls: ['./claimhistory.component.css']
})
export class ClaimhistoryComponent implements OnInit {

   //Array to store the player objects.
   claimhistories:Claimhistory[]=[];

   //Player object to be used in forms.
   claimhistory:Claimhistory={
   
    policyNumber:0,
    contactNo:0,
    claimreason1 : ""
   };

   //Other required variables.
  
  msg:number=0;
  u_msg:number=0;
  d_msg:string="";
  

  constructor(private obj:ClaimhistoryService) { }

  ngOnInit(): void {
  }

  get_api():void
  {
    this.obj.getAllclaims().subscribe(data=>{
      this.claimhistories=data;
        console.log(this.claimhistories);
    });
  }

}
