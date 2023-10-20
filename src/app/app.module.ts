import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { VisitDoctorPageComponent } from './visit-doctor-page/visit-doctor-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { LoginComponent } from './login/login.component';
import { FreeHoursComponent } from './free-hours/free-hours.component';
import { DoctorCellComponent } from './doctor-cell-component/doctor-cell-component.component';
import { EditDoctorsComponent } from './edit-doctors/edit-doctors.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DoctorService } from './doctor-service.service';
import { TheDoctorComponent } from './the-doctor/the-doctor.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    VisitDoctorPageComponent,
    AboutPageComponent,
    LoginComponent,
    FreeHoursComponent,
    DoctorCellComponent,
    EditDoctorsComponent,
    AddDoctorComponent,
    TheDoctorComponent,
    // EditDoctorInfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    SweetAlert2Module
  ],
  providers: [DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
