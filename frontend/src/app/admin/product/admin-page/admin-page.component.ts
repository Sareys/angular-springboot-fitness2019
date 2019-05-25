import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  pageCategory: null;

  constructor() { }

  ngOnInit() {
  }

  setPageCategory(value) {
    this.pageCategory == value;
    console.log(this.pageCategory);
  }

}
