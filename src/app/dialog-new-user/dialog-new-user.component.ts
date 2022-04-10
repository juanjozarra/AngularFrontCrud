import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Persona } from '../Models/Persona';  

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
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    cellPhone: new FormControl('',)
  }) ;

  constructor(
    public dialogRef: MatDialogRef<DialogNewUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.value);
  }

  cancelClick(): void {
    this.dialogRef.close();
  }
}
