import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-doctors',
  templateUrl: './edit-doctors.component.html',
  styleUrls: ['./edit-doctors.component.css']
})
export class EditDoctorsComponent {
  doctors: any[] = []; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/doctors').subscribe((data: any) => {
      console.log(data);
      this.doctors = data;
    });
  }

  editDoctor() {
    
  }

  deleteDoctor(id: any) {
    this.http.delete(`http://localhost:3000/doctors/${id}`).subscribe((data: any) => {
      console.log(data)
      this.doctors = this.doctors.filter(doctor => doctor.id !== id)
    });
  }

}
