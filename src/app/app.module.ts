import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  ROUTES,Router,RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';


import { VehicleRegistrationComponent } from './vehicle-registration/vehicle-registration.component';

import { PlanTableComponent } from './plan-table/plan-table.component';
import { PaymentComponent } from './payment/payment.component';
import { ClaimComponent } from './claim/claim.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RenewComponent } from './renew/renew.component';
import { CalculateInsuranceComponent } from './calculate-insurance/calculate-insurance.component';


import { CalcfourComponent } from './calcfour/calcfour.component';
import { CalctwoComponent } from './calctwo/calctwo.component'



import { VehicleregistrationService } from './vehicleregistration.service';
import { plansservice } from './plan-table/plans.service';

import { RenewService } from './renew.service';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserServiceService } from './user-service.service';
import { ClaimhistoryService } from './claimhistory.service';
import { JsonPipe } from './json.pipe';
import { ClaimService } from './claim.service';
import { ClaimhistoryComponent } from './claimhistory/claimhistory.component';
import { LoginComponent } from './login/login.component';
import {DatePipe} from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
     
        VehicleRegistrationComponent,
      
        PlanTableComponent,
        PaymentComponent,
        ClaimComponent,
        RenewComponent,
        CalculateInsuranceComponent,
       
        CalcfourComponent,
        CalctwoComponent,
        UserRegistrationComponent,
        JsonPipe,
        ClaimhistoryComponent,
        LoginComponent
      
    
        
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  exports:[ClaimComponent],
  providers: [UserServiceService,VehicleregistrationService,RenewService ,plansservice,ClaimService,ClaimhistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }