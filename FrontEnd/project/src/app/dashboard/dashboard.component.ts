import { Component, OnInit, Inject } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userList = [];
  displayedColumns: string[] = ['name', 'age', 'gender', 'email', 'action'];
  datasource: User[];
  constructor(private apiService: ApiServiceService, public dialog: MatDialog) { }

  getUsers() {
    alert();
    return this.apiService.get('/api/users').subscribe(res => {
      // this.userList = res;
      console.log(res);
      res.forEach(element => {
        this.userList.push({
          id: element._id,
          name: element.name,
          email: element.email,
          age: element.age,
          gender: element.gender
        });
      });
      this.datasource = this.userList;
    },
      error => {
      }
    );
  }

  deleteUser(element: any) {
    console.log(element);
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '300px',
      data: {
        id: element.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUsers();
    });
  }

  ngOnInit() {
    this.getUsers();
  }

}
export interface User {
  id: String;
  name: String;
  email: String;
  age: Number;
  gender: String;
}

@Component({
  selector: 'app-delete-user-dialog-selector',
  templateUrl: 'delete-dialog-component.html',
})
export class DeleteDialogComponent {
  userId: any;

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private apiService: ApiServiceService) {
    this.userId = data.id;
  }

  deleteUser() {
    return this.apiService.delete(`/api/users/${this.userId}`).subscribe(res => {
      this.close();
    });
  }
  close() {
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
