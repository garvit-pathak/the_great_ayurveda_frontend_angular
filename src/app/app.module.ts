import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './user-dashboard/home/home.component';
import { MedicinesComponent } from './user-dashboard/medicines/medicines.component';
import { DoctorsComponent } from './user-dashboard/doctors/doctors.component';
import { FooterComponent } from './user-dashboard/footer/footer.component';
import { HeaderComponent } from './user-dashboard/header/header.component';
import { BookAppointmentComponent } from './user-dashboard/book-appointment/book-appointment.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ToastrModule } from 'ngx-toastr';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DiseasesComponent } from './user-dashboard/diseases/diseases.component';
import { OrderComponent } from './user-dashboard/order/order.component';
import { SafePipe } from './safe.pipe';
import { MedicineDetailsComponent } from './user-dashboard/medicine-details/medicine-details.component';
import { DoctorDetailsComponent } from './user-dashboard/doctor-details/doctor-details.component';
import { SearchMedicineComponent } from './user-dashboard/search-medicine/search-medicine.component';
import { SearchDoctorComponent } from './user-dashboard/search-doctor/search-doctor.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { AppointmentsComponent } from './doctor-dashboard/appointments/appointments.component';
import { HeaderDoctorComponent } from './doctor-dashboard/header-doctor/header-doctor.component';
import { FooterDoctorComponent } from './doctor-dashboard/footer-doctor/footer-doctor.component';
import { ReviewsComponent } from './doctor-dashboard/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicinesComponent,
    DoctorsComponent,
    FooterComponent,
    HeaderComponent,
    BookAppointmentComponent,
    UserDashboardComponent,
 
       DiseasesComponent,
       OrderComponent,
       SafePipe,
       MedicineDetailsComponent,
       DoctorDetailsComponent,
       SearchMedicineComponent,
       SearchDoctorComponent,
       DoctorDashboardComponent,
       UserProfileComponent,
       DoctorProfileComponent,
       AppointmentsComponent,
       HeaderDoctorComponent,
       FooterDoctorComponent,
       ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
