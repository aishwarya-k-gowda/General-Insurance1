import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcfour',
  templateUrl: './calcfour.component.html',
  styleUrls: ['./calcfour.component.css']
})


export class CalcfourComponent implements OnInit {

  age: any=0;
  result: any;
  amount : any;
  claim: any=0;
  message: string=" ";


  constructor() { }

  ngOnInit(): void {
   
  }
  calculate () {

    if(this.age <= 5)
     this.result=5000;  
    else if(this.age>5 && this.age<=10)
    this.result=8000;
    else if (this.age > 10 && this.age <= 20 )
    this.result=10000;
    else if (this.age > 20  )
    this.result="not eligible";
    
  }


}
