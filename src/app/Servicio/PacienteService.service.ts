import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../Entidades/Paciente';


@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  
  private urlBase = 'http://localhost:8080/dieta-app/pacientes';
  private urlAgregarPaciente = 'http://localhost:8080/dieta-app/paciente/agregar-paciente';

  constructor(private http: HttpClient) {}

  agregarPaciente( paciente : Paciente ) : Observable<Object> {
    return this.http.post(this.urlAgregarPaciente, paciente)
  }
}
