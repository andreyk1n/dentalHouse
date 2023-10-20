import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'http://localhost:3000/doctors'; 

  constructor(private http: HttpClient) {}

  addDoctor(doctor: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, doctor);
  }

  getDoctors(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  updateDoctor(doctorId: any, updatedData: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = `${this.apiUrl}/${doctorId}`
    return this.http.put(url, updatedData, { headers });
  }

  deleteDoctor(doctorId: any): Observable<any> {
    const url = `${this.apiUrl}/${doctorId}`;
    return this.http.delete(url);
  }


  getDoctorByIndex(index: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${index}`);
  }
}
