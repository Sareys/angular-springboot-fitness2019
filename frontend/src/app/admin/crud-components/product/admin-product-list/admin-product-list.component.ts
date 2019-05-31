import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "../../../../../models/Product";
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {AdminProductFormComponent} from "../admin-product-form/admin-product-form.component";
import {ProductService} from "../../../../../services/product.service";

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {

  products: {}[];

  listData: MatTableDataSource<any>;

  displayedColumns: string[] = ['name', 'price', 'description', 'category', 'subCategory', 'actions'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  //Add the service in the constructor
  constructor(private dialog: MatDialog,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.listData = new MatTableDataSource(this.products);
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
    console.log(this.listData);
  }

  onCreateProduct() {
    //Ajouter une méthode de reset du formulaire
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(AdminProductFormComponent, dialogConfig);
  }

  onEditProduct(product) {
    //Ajouter la méthode qui va remplir le formulaire (4e video)
    //this.service.populateForm(row);
    console.log('Edit method appellée');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AdminProductFormComponent, dialogConfig);
  }

  deleteProduct(product: Product): void {
    console.log('Delete method appellée');
  }

  editProduct(product: Product): void {

  }

  addProduct(): void {

  }

  onSearchClear() {
    this.searchKey ='';
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
}
