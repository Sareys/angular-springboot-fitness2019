import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  createAccountBool: boolean;

  constructor() { }

  ngOnInit() {
    this.createAccountBool = false;
  }

  createAccount(){
    this.createAccountBool = true;
    console.log()
  }

}
