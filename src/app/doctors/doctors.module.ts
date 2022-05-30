import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorsRoutingModule } from './doctors-routing.module';
import { AppointmentsComponent } from './doctor-dashboard/appointments/appointments.component';
import { ReviewsComponent } from './doctor-dashboard/reviews/reviews.component';
import { HeaderDoctorComponent } from './doctor-dashboard/header-doctor/header-doctor.component';
import { FooterDoctorComponent } from './doctor-dashboard/footer-doctor/footer-doctor.component';
import { FormsModule } from '@angular/forms';
import { HomeDoctorComponent } from './doctor-dashboard/home-doctor/home-doctor.component';



@NgModule({
  declarations: [
    DoctorDashboardComponent,
    AppointmentsComponent,
    ReviewsComponent,
    HeaderDoctorComponent,
    FooterDoctorComponent,
    HomeDoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    FormsModule
  ]
})
export class DoctorsModule { }
