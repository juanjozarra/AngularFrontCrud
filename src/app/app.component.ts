import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogNewUserComponent } from './dialog-new-user/dialog-new-user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'crud';

  constructor(
    private router:Router,
    private dialog:MatDialog
       
    ){    
  }

  listar(){
    this.router.navigate(["listar"])    
  }
  
  nuevo(){
    this.dialog.open(DialogNewUserComponent, {width: '30%', data: {update:false}})
  }
}
