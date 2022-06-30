import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
export interface PeriodicElement {
  name: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.scss' ]
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['name','email'];
  dataSource = ELEMENT_DATA;

  constructor(private service:UsersService) { }

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList(): void {
    this.service.getUsersList()
      .subscribe(result => {
        this.dataSource = result.data
      },(err)=>{
        console.log(err, ' -- -  error 31');
    });
  }
}
