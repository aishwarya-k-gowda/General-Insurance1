import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';

// import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { ClaimComponent } from './claim/claim.component';
import { CalculateInsuranceComponent } from './calculate-insurance/calculate-insurance.component';
import { RenewComponent } from './renew/renew.component';
import { CalcfourComponent } from './calcfour/calcfour.component';
import { CalctwoComponent } from './calctwo/calctwo.component';
import { VehicleRegistrationComponent } from './vehicle-registration/vehicle-registration.component';
import { PlanTableComponent } from './plan-table/plan-table.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ClaimhistoryComponent } from './claimhistory/claimhistory.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path: '', component: HomeComponent,pathMatch:"full" },

  {path: 'user-registration', component: UserRegistrationComponent },
   
  {path:'vehicle-registration', component:VehicleRegistrationComponent},
  
   { path: 'renew', component: RenewComponent },

   { path: 'claim', component: ClaimComponent },

   { path: 'calculate-insurance', component: CalculateInsuranceComponent} , 

    { path: 'calcfour', component: CalcfourComponent} ,

    { path: 'calctwo', component: CalctwoComponent} ,

   {path: 'login', component: LoginComponent},

   {path: 'plan-table', component: PlanTableComponent},

  {path: 'claimhistory', component: ClaimhistoryComponent},

  {path: 'payment', component: PaymentComponent},

  {path: 'home', component: HomeComponent},

  {path: 'calctwo', component:CalctwoComponent},

  {path: 'calcfour', component:CalcfourComponent}
   
  //  {path: 'customer-registration', component: CustomerRegistrationComponent},

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }