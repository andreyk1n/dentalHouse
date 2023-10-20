import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { VisitDoctorPageComponent } from './visit-doctor-page/visit-doctor-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { LoginComponent } from './login/login.component';
import { FreeHoursComponent } from './free-hours/free-hours.component';
import { EditDoctorsComponent } from './edit-doctors/edit-doctors.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { TheDoctorComponent } from './the-doctor/the-doctor.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'visitDoctor', component: VisitDoctorPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'login', component: LoginComponent},
  { path: 'freeHours/:doctorId', component: FreeHoursComponent },
  {path: 'editDoctors', component: EditDoctorsComponent},
  {path: 'addDoctor', component: AddDoctorComponent},
  {path: 'theDoctor/:id', component: TheDoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
