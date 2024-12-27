import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  private urlBase = 'http://localhost:8080/dieta-app/pacientes';

  constructor(private http: HttpClient) {}

  
}
