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

  getUsers():Observable<any>{
    return this.http.get<Persona>('/api/users'); 
  }

  deleteUser(id: number) {    
    return this.http.delete('/api/delete/user/' + id);
  }

  addUser(data: string){
    return this.http.post<any>('/api/add/user', data);
  }

  editUser(data: string){
    return this.http.patch<any>('/api/edit/user', data)
  }

  
}
