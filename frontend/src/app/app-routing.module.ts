import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {AdminPageComponent} from "./admin/product/admin-page/admin-page.component";

const routes: Routes = [
  {
    //TODO: add a way to pass the category of products as parameters
    path:'products/:category',
    component: ProductListComponent,
  },
  {
    path: 'product/:id',
    component: ProductPageComponent,
  },
  {
    path:'adminPage',
    component: AdminPageComponent
  },
  {
    path: '**',
    redirectTo: '/'
  },
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
