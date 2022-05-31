import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxPaginationModule } from 'ngx-pagination';
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
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DiseasesComponent } from './user-dashboard/diseases/diseases.component';
import { OrderComponent } from './user-dashboard/order/order.component';
import { SafePipe } from './safe.pipe';

import { MedicineDetailsComponent } from './user-dashboard/medicine-details/medicine-details.component';
import { DoctorDetailsComponent } from './user-dashboard/doctor-details/doctor-details.component';
import { SearchMedicineComponent } from './user-dashboard/search-medicine/search-medicine.component';
import { SearchDoctorComponent } from './user-dashboard/search-doctor/search-doctor.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { OrderHistoryComponent } from './user-dashboard/order-history/order-history.component';
import { AppointmentHistoryComponent } from './user-dashboard/appointment-history/appointment-history.component';
import { CacheInterceptorService } from './interceptor/cache-interceptor.service';

const social= {
  provide: 'SocialAuthServiceConfig',
  useValue: {
    autoLogin: false,
    providers: [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(
          '903687778738-tv34dkt0hqr6mbg1s4bja0g2crfchgbm.apps.googleusercontent.com'
        ),
      },
    ],
  } as SocialAuthServiceConfig,
}

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
       UserProfileComponent,
       DoctorProfileComponent,
       OrderHistoryComponent,
       AppointmentHistoryComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    SocialLoginModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [social
    ,{
    useClass: CacheInterceptorService,
    provide:HTTP_INTERCEPTORS,
    multi:true,

  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
