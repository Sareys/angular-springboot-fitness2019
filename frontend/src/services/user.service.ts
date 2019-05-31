import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: any;

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name:  new FormControl(''),
    lastName: new FormControl(''),
    mail: new FormControl(''),
    birthDate: new FormControl(''),
  });

  getUsers() {
    this.users = [
      {
        id: 1,
        name: 'Moujib',
        lastName: 'Soulaiman',
        mail: 'moujib@gmail.com',
        phone: '04766685910',
        rights: 'User'
      },
      {
        id: 2,
        name: 'Tizi',
        lastName: 'Khadija',
        mail: 'khadijab@gmail.com',
        phone: '04766685910',
        rights: 'Admin'
      }
    ]
    return this.users;
  }
}
