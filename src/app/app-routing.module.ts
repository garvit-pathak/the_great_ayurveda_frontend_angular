import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAppointmentComponent } from './user-dashboard/book-appointment/book-appointment.component';

import { DiseasesComponent } from './user-dashboard/diseases/diseases.component';
import { AppointmentsComponent } from './doctor-dashboard/appointments/appointments.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { ReviewsComponent } from './doctor-dashboard/reviews/reviews.component';
import { DoctorDetailsComponent } from './user-dashboard/doctor-details/doctor-details.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { DoctorsComponent } from './user-dashboard/doctors/doctors.component';
import { HomeComponent } from './user-dashboard/home/home.component';
import { MedicineDetailsComponent } from './user-dashboard/medicine-details/medicine-details.component';
import { MedicinesComponent } from './user-dashboard/medicines/medicines.component';

import { SearchDoctorComponent } from './user-dashboard/search-doctor/search-doctor.component';
import { SearchMedicineComponent } from './user-dashboard/search-medicine/search-medicine.component';

import { AuthService } from './service/auth.service';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { OrderComponent } from './user-dashboard/order/order.component';



const routes: Routes = [
  {path:"",component:UserDashboardComponent,
   children:[
    {path:"",component:HomeComponent},
    {path:"doctors",component:DoctorsComponent},
    {path:"medicines",component:MedicinesComponent},
    {path:"book-appointment/:id",component:BookAppointmentComponent},
    {path:"diseases/:search",component:DiseasesComponent},
    {path:"medicine-details/:pid",component:MedicineDetailsComponent},
    {path:"doctor-details/:did",component:DoctorDetailsComponent},
    {path:"search-medicine/:search",component:SearchMedicineComponent},
    {path:"search-doctor/:search",component:SearchDoctorComponent},
    {path:"order",component:OrderComponent}
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
