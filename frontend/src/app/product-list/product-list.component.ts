import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  category: string;

  products: Product[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.category = params['category']);
    this.products = [
      {
        id : 255,
        name : 'Veste Adidas',
        price : 25.99,
        description : 'Veste adidas Joggin noire'
      },
      {
        id : 1,
        name : 'Veste Nike aaaaaa',
        price : 25.99,
        description : 'Veste Nike XXX blanche'
      },
      {
        id : 1,
        name : 'Veste Nike',
        price : 25.99,
        description : 'Veste Nike XXX blanche'
      },
      {
        id : 1,
        name : 'Veste Nike AAAAAA ZZZZ',
        price : 25.99,
        description : 'Veste Nike XXX blanche'
      },
      {
        id : 1,
        name : 'Veste Nike',
        price : 25.99,
        description : 'Veste Nike XXX blanche'
      },
      {
        id : 1,
        name : 'Veste Adidas',
        price : 25.99,
        description : 'Veste adidas Joggin noire'
      },
      {
        id : 1,
        name : 'Veste Nike',
        price : 25.99,
        description : 'Veste Nike XXX blanche'
      },
      {
        id : 1,
        name : 'Veste Nike',
        price : 25.99,
        description : 'Veste Nike XXX blanche'
      },
      {
        id : 1,
        name : 'Veste Nike',
        price : 25.99,
        description : 'Veste Nike XXX blanche'
      },
      {
        id : 1,
        name : 'Veste Nike',
        price : 25.99,
        description : 'Veste Nike XXX blanche'
      }
      ];

    console.log(this.products);
  }

}
