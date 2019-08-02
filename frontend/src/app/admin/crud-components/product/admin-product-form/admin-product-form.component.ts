import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {ProductService} from "../../../../../services/product.service";

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {

  categories: any;

  subCategories: any;

  constructor(private prodService: ProductService,
              private matDialogRef: MatDialogRef<AdminProductFormComponent>) {
  }

  ngOnInit() {
    this.categories = this.prodService.getCategories();
    this.subCategories = this.prodService.getSubCategories();
    console.log(this.subCategories)
  }

  onSubmit() {
    this.onClose();
  }

  onClose() {
    //Check what to add here -> 2 lines
    this.matDialogRef.close();
  }

}
