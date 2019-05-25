import { Component, OnInit } from '@angular/core';
import { Product} from "../../models/Product";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  product: Product;

  constructor() { }

  ngOnInit() {
    this.product = {
      id: 255,
      name: 'Veste Nike aaaaaaaa',
      price: 21.99,
      description: 'Une belle veste ou slama'
    }
  }

}
