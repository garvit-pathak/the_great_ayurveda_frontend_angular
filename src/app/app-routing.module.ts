import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { CartComponent } from './cart/cart.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HomeComponent } from './home/home.component';
import { MedicinesComponent } from './medicines/medicines.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"doctors",component:DoctorsComponent},
  {path:"medicines",component:MedicinesComponent},
  {path:"cart",component:CartComponent},
  {path:"book-appointment",component:BookAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
