import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './doctor-dashboard/appointments/appointments.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { HomeDoctorComponent } from './doctor-dashboard/home-doctor/home-doctor.component';
import { ReviewsComponent } from './doctor-dashboard/reviews/reviews.component';

const routes: Routes = [{
  path: '',
  component: DoctorDashboardComponent,
  children:[
      {path:"",component:HomeDoctorComponent},
    {path:"appointments",component:AppointmentsComponent},
    {path:"reviews",component:ReviewsComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }