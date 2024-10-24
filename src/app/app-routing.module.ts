import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingComponent } from './wappalyzer/pricing/pricing.component';
import { HomeComponent } from './wappalyzer/home/home.component';
import { SigninComponent } from './wappalyzer/signin/signin.component';

const routes: Routes =[
  {path:'' , component:HomeComponent},
  {path:'home' , component:HomeComponent},
  {path:'pricing' , component:PricingComponent},
  {path:'signin' , component:SigninComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
