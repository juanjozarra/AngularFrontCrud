import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Persona } from '../Models/Persona';  
import { ServiceService } from '../Service/service.service';

export interface DialogData{
  update: boolean;
  user: Persona;
}

@Component({
  selector: 'app-dialog-new-user',
  templateUrl: './dialog-new-user.component.html',
  styleUrls: ['./dialog-new-user.component.css']
})
export class DialogNewUserComponent implements OnInit {
  form: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
    apellido: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('',)
  }) ;

  constructor(
    public dialogRef: MatDialogRef<DialogNewUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData,
    private service:ServiceService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.addUser(this.form.value).subscribe();
  }

  cancelClick(): void {
    this.dialogRef.close();
  }
}
