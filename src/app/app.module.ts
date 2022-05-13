import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DiseasesComponent } from './diseases/diseases.component';
import { OrderComponent } from './order/order.component';

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
  
    CartComponent,
       DiseasesComponent,
       OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
