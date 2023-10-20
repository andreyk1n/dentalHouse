import { Component } from '@angular/core';
import { DoctorService } from '../doctor-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  newDoctor: any = {};

  constructor(private doctorService: DoctorService, private router: Router) {}


  addDoctor() {
    const newDoctorData = {
      id: null, 
      name: this.newDoctor.name,
      surname: this.newDoctor.surname,
      specialty: this.newDoctor.specialty,
      age: this.newDoctor.age,
      img: this.newDoctor.img,
      biography: this.newDoctor.biography,
      patients: {
        firstPat: false,
        secondPat: false,
        thirdPat: false,
        fourthPat: false
      }
    };
  
    this.doctorService.addDoctor(newDoctorData)
      .subscribe(
        (response: any) => {
          console.log('Лікар доданий успішно', response);
          this.router.navigate(['/visitDoctor']);
        },
        (error: any) => {
          console.error('Помилка під час додавання лікаря', error);
        }
      );
  }
}
