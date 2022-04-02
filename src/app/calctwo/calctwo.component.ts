import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calctwo',
  templateUrl: './calctwo.component.html',
  styleUrls: ['./calctwo.component.css']
})
export class CalctwoComponent implements OnInit {

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
     this.result=3000;  
    else if(this.age>5 && this.age<=10)
    this.result=10000;
    else if (this.age > 10 && this.age <= 20 )
    this.result=12000;
    else if (this.age > 20  )
    this.result="not eligible";
    
    


  
}

}

