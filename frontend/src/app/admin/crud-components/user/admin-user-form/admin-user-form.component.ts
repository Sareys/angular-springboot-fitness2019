import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../../services/user.service";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-admin-user-form',
  templateUrl: './admin-user-form.component.html',
  styleUrls: ['./admin-user-form.component.css']
})
export class AdminUserFormComponent implements OnInit {

  constructor(private userService: UserService,
              private matDialogRef: MatDialogRef<AdminUserFormComponent>) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.onClose();
  }

  onClose() {
    //Check what to add here -> 2 lines
    this.matDialogRef.close();
  }


}
