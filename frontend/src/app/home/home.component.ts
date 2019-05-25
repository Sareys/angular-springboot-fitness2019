import { Component, OnInit } from '@angular/core';
import { ProductService} from "../../services/product.service";

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  class: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tiles: Tile[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    //TODO: Methode qui va getter les différentes catégorie pour les associer à Tiles
    console.log(this.productService);
    this.tiles = this.productService.tiles
  }

}
