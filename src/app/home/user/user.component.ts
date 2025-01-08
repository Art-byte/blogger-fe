import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../shared/service/user.service";
import {ComponentsModule} from "../../components.module";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {User} from "../../shared/models/User";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    ComponentsModule,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ["name", "lastName", "username", "email", "role"];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private readonly userService = inject(UserService);

  ngOnInit(): void {
    this.fetchUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  fetchUsers(){
    this.userService.getAllUsers().subscribe(userList => {
      console.log(userList);
      this.dataSource.data = userList;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
