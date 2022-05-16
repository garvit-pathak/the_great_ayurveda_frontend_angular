import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { CartComponent } from './cart/cart.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { AppointmentsComponent } from './doctor-dashboard/appointments/appointments.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { ReviewsComponent } from './doctor-dashboard/reviews/reviews.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HomeComponent } from './home/home.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { MedicinesComponent } from './medicines/medicines.component';

import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { SearchMedicineComponent } from './search-medicine/search-medicine.component';

import { AuthService } from './service/auth.service';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



const routes: Routes = [
  {path:"",component:UserDashboardComponent,
   children:[
    {path:"",component:HomeComponent},
    {path:"doctors",component:DoctorsComponent},
    {path:"medicines",component:MedicinesComponent},
    {path:"cart",component:CartComponent},
    {path:"book-appointment/:id",component:BookAppointmentComponent},
    {path:"diseases/:search",component:DiseasesComponent},
    {path:"medicine-details/:pid",component:MedicineDetailsComponent},
    {path:"doctor-details/:did",component:DoctorDetailsComponent},
    {path:"search-medicine/:search",component:SearchMedicineComponent},
    {path:"search-doctor/:search",component:SearchDoctorComponent}
   ]},
    {path:"user-profile",component:UserProfileComponent},
    {path:"doctor-profile",component:DoctorProfileComponent},

    {path:"doctor-dasboard",component:DoctorDashboardComponent,
     children:[
       {path:"appointments",component:AppointmentsComponent},
       {path:"reviews",component:ReviewsComponent}
     ]
     },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
