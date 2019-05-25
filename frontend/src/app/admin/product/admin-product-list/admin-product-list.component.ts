import { Component, OnInit } from '@angular/core';
import {Product} from "../../../../models/Product";

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {

  products: Product[];

  //Add the service in the constructor
  constructor() { }

  ngOnInit() {

  }

  deleteProduct(product: Product): void {

  };

  editProduct(product: Product): void {

  };

  addProduct(): void {

  };
}
