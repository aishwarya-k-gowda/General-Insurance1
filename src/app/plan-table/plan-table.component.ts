
   
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { insuranceplantype, insuranceduration } from '../Models/plans.model';
import { plansservice } from './plans.service';

@Component({
  selector: 'app-plan-table',
  templateUrl: './plan-table.component.html',
  styleUrls: ['./plan-table.component.css']
})
export class PlanTableComponent implements OnInit {
// res : any;
//   constructor(private ng :plansservice, private route: Router) { }

//   ngOnInit(): void {


//   }

//   // public savedata(plannew : any): void {

//   //   this.ng.selectdata(plannew).subscribe(result => {

//   //       alert(`data added successfully=${result}`);



//   //   });

//   submitData(data:any){

//     this.ng.selectdata(data).subscribe(result => {this.res= result});


    

  

// }
// onclick(){
//   alert ("The payment is done");
// }
// } 

data = false;    
  PlanTypeForm: FormGroup | any; 
  PlanDurationForm: FormGroup | any;
  PlanForm: NgForm | any;   
  message:string | undefined;   
  res: any; 
  constructor(private formbulider: FormBuilder,private ng :plansservice,private planservice:plansservice) { }    
    

  ngOnInit(): void {
    this.PlanTypeForm = this.formbulider.group({ 
     planName: [''] ,
     durationValue: ['']
      
        
    });    

    this.PlanDurationForm = this.formbulider.group({ 
      planName: [''] ,
      durationValue: ['']
       
         
     });    
  }
  onPlanSubmit(PlanTypeForm:any)    
  {    
    const plantype = this.PlanTypeForm.value;    
    this.AddPlanType(plantype);    
  }    
  AddPlanType(iplantype:insuranceplantype)    
  {    
  this.planservice.AddPlanType(iplantype).subscribe(    
    ()=>    
    {    
      this.data = true;    
      alert('Data saved Successfully');    
      this.PlanTypeForm.reset();    
    });    
  } 


  onDurationSubmit(PlanDurationForm:any)    
  {    
    const planduration = this.PlanDurationForm.value;    
    this.AddDurationValue(planduration);    
  }    
  AddDurationValue(idurationtype:insuranceduration)    
  {    
  this.planservice.AddDurationType(idurationtype).subscribe(    
    ()=>    
    {    
      this.data = true;    
      alert('Data saved Successfully');    
      this.PlanDurationForm.reset();    
    });    
  } 
  
  submitData(data:any){

    this.ng.selectdata(data).subscribe(result => {this.res= result});
   
}
    onclick(){
      alert ("The payment is done");
}

}


