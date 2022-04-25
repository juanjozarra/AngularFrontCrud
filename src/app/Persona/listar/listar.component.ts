import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TooltipPosition } from '@angular/material/tooltip';
import { DialogConfirmComponent } from 'src/app/dialog-confirm/dialog-confirm.component';
import { DialogNewUserComponent } from 'src/app/dialog-new-user/dialog-new-user.component';
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
  right: TooltipPosition='right'
  left: TooltipPosition='left'

  constructor(
    private service: ServiceService,
    private dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe((data) => {
      this.personas = data;
      this.loading = true;
    });
  }

  deleteUser(id: number){    
    const dialog = this.dialog.open(DialogConfirmComponent)
    dialog.afterClosed().subscribe(result =>
      {if(result){
        this.service.deleteUser(id).subscribe();
        location.reload();
      }})
  }

  editUser(person: Persona){
    this.dialog.open(DialogNewUserComponent, {width: '400px', data: {update:true, user:person}})
  }
}
