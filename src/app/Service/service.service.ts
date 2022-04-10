import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Persona } from '../Models/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {
  }

  getPersonas():Observable<any>{
    return this.http.get<Persona>('/api/usuarios'); 
  }

  deleteUser(id: number) {    
    return this.http.delete('/api/delete/user/' + id);
  }
}
