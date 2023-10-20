import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-free-hours',
  templateUrl: './free-hours.component.html',
  styleUrls: ['./free-hours.component.css']
})
export class FreeHoursComponent implements OnInit {
  doctors: any[] = [];
  selectedDoctor: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const doctorId = params['doctorId']
      this.http.get('http://localhost:3000/doctors').subscribe((data: any) => {
        this.doctors = data;
        this.selectedDoctor = this.doctors.find(doctor => doctor.id === doctorId)
        this.loadDoctorAppointments();
      });
    });
  }

  loadDoctorAppointments(): void {
    this.doctors.forEach((doctor) => {
      for (let i = 1; i <= 10; i++) {
        const key = `${doctor.id}_${i}`;
        const storedAppointment = localStorage.getItem(key);
        if (storedAppointment) {
          doctor.patients[`timeSlot${i}`] = JSON.parse(storedAppointment);
        }
      }
    });
  }


  toggleAppointment(doctor: any, timeSlot: number): void {
    const key = `${doctor.id}_${timeSlot}`;
    doctor.patients[`timeSlot${timeSlot}`] = !doctor.patients[`timeSlot${timeSlot}`];
    localStorage.setItem(key, JSON.stringify(doctor.patients[`timeSlot${timeSlot}`]));
  }
}
