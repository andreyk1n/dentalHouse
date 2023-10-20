import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visit-doctor-page',
  templateUrl: './visit-doctor-page.component.html',
  styleUrls: ['./visit-doctor-page.component.css']
})
export class VisitDoctorPageComponent {
  doctors: any[] = []; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/doctors').subscribe((data: any) => {
      console.log(data)
      this.doctors = data;
    });
  }
  
}
