import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../Entidades/Paciente';
import { PaginatedResponse, Usuario } from '../Entidades/Usuario';


@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  
  private urlBase = 'http://localhost:8080/dieta-app/pacientes-pageable';
  private urlAgregarPaciente = 'http://localhost:8080/dieta-app/paciente/agregar-paciente';
  private urlDelete = 'http://localhost:8080/dieta-app/paciente/delete';
  private urlGetPaciente = 'http://localhost:8080/dieta-app/paciente/obtenerPaciente';

  constructor(private http: HttpClient) {}

  obtenerPacientes( page:number,size:number ):Observable<PaginatedResponse<Paciente>>{
    const params = new HttpParams().set('page',page).set('size',size);

    return this.http.get<PaginatedResponse<Paciente>>(this.urlBase, {params});
  }

  eliminarPaciente(id : number) : Observable<Object>{
    return this.http.delete(`${this.urlDelete}/${id}`);
  }

  getPaciente(id : number)  { 
    return this.http.get<Usuario>(`${this.urlGetPaciente}/${id}`);
}

  agregarPaciente( paciente : Paciente ) : Observable<Object> {
    return this.http.post(this.urlAgregarPaciente, paciente)
  }
}
