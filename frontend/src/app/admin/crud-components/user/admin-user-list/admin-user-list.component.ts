import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "../../../../../models/Product";
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {UserService} from "../../../../../services/user.service";
import {AdminUserFormComponent} from "../admin-user-form/admin-user-form.component";

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {

  users: any;

  listData: MatTableDataSource<any>;

  displayedColumns: string[] = ['name', 'lastName', 'mail', 'phone', 'rights', 'actions'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(private dialog: MatDialog,
              private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.listData = new MatTableDataSource(this.users);
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
    console.log(this.listData);
    console.log(this.users);
  }

  onCreateUser() {
    //Ajouter une méthode de reset du formulaire
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(AdminUserFormComponent, dialogConfig);
  }

  deleteUser(user: Product): void {

  };

  OnEditUser(user: Product): void {
    //Ajouter la méthode qui va remplir le formulaire (4e video)
    //this.service.populateForm(row);
    console.log('Edit method appellée');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AdminUserFormComponent, dialogConfig);
  };

  addUser(): void {

  };

  onSearchClear() {
    this.searchKey ='';
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

}
