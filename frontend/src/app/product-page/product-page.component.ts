import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  productId: number;

  product: any;

  sizes: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.productId = params['id'])
    this.getProduct()
    this.getSizes();
  }

  getProduct() {
    this.product = {
      id: this.productId,
      name: 'Adidas Jacket RocketMan',
      price: 50.99,
      description: 'Une veste Adidas noire anti-transiprante',
      img: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto,fl_lossy/4038f6b851f0436eb699a85c00f5f239_9366/BR8_Pullover_Windbreaker_Black_CZ6107_21_model.jpg',
      sale: true,
      saleValue: 60
    }
  }

  getSizes() {
    this.sizes = ['Small', 'Medium', 'Large', 'X-Large'];
    return this.sizes;
  }


}
