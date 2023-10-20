import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../doctor-service.service';

@Component({
  selector: 'app-the-doctor',
  templateUrl: './the-doctor.component.html',
  styleUrls: ['./the-doctor.component.css']
})
export class TheDoctorComponent implements OnInit{
  doctor: any;

  constructor(private route: ActivatedRoute, private doctorService: DoctorService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const idNumber = +id;
      this.doctorService.getDoctorByIndex(idNumber).subscribe(data => {
        this.doctor = data;
      });
    }
  }
}
