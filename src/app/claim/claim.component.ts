import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder, FormControl} from '@angular/forms'
import { ClaimService } from '../claim.service';
import { claim } from '../Models/claim.models';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  data = false;    
  ClaimForm: FormGroup | any;    
  message:string | undefined;    
  constructor(private formbulider: FormBuilder,private claimservice:ClaimService) { }    
    

  ngOnInit(): void {
    this.ClaimForm = this.formbulider.group({ 
      // policyNumber: ['', [Validators.required]], 
      // contactNo:['', [Validators.required]],    
      // claimreason: new FormControl('', [Validators.required]),      
      // claimreason: ['',[Validators.required]]
          policyNumber: [''],
          contactNo: [''],
          claimreason1: ['']
        
    });    
  }
  onFormSubmit(ClaimForm:any)    
  {    
    const user = this.ClaimForm.value;    
    this.AddClaim(user);    
  }    
  AddClaim(cla:claim)    
  {    
  this.claimservice.AddClaim(cla).subscribe(    
    ()=>    
    {    
      this.data = true;    
      alert('Data saved Successfully');    
      this.ClaimForm.reset();    
    });    
  }   
  
  

}
