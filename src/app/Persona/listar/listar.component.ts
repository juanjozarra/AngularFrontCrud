import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Models/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  personas: Persona[] = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'email', 'telefono','acciones'];
  loading: boolean = false;

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe((data) => {
      this.personas = data;
      this.loading = true;
    });
  }

  deleteUser(id: number){    
    this.service.deleteUser(id).subscribe();    
    location.reload();
  }
}
