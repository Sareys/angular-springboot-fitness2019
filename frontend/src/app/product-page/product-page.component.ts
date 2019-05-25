import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  productId: number;

  constructor (private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.productId = params['id'])
  }

}
