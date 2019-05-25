import { Injectable } from '@angular/core';
import { Tile} from "../models/Tile";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  tiles: Tile[] = [
    {
      text: 'One',
      cols: 2,
      rows: 2,
      class: 'one-tile'
    },
    {
      text: 'Two',
      cols: 1,
      rows: 1,
      class: 'two-tile'
    },
    {
      text: 'Three',
      cols: 1,
      rows: 2,
      class: 'three-tile'
    },
    {
      text: 'Four',
      cols: 1,
      rows: 2,
      class: 'four-tile'
    },
    {
      text: 'Five',
      cols: 2,
      rows: 1,
      class: 'five-tile'
    },
    {
      text: 'Six',
      cols: 1,
      rows: 1,
      class: 'six-tile'
    }
  ];

  constructor() { }
}
