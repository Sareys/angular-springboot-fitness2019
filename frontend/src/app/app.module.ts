import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {ProductListComponent} from './product-list/product-list.component';
import {FooterComponent} from './footer/footer.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatListModule,
  MatCardModule,
  MatDialogModule, MatSelectModule, MatPaginatorModule, MatSortModule
} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeComponent} from './home/home.component';
import {AdminProductListComponent} from './admin/crud-components/product/admin-product-list/admin-product-list.component';
import {AdminUserListComponent} from './admin/crud-components/user/admin-user-list/admin-user-list.component';
import {AdminPageComponent} from './admin/admin-page/admin-page.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {AdminProductFormComponent} from './admin/crud-components/product/admin-product-form/admin-product-form.component';
import {ProductService} from "../services/product.service";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material";
import {AdminUserFormComponent} from './admin/crud-components/user/admin-user-form/admin-user-form.component';
import {MatToolbarModule} from "@angular/material";
import {MatTableModule} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductListComponent,
    FooterComponent,
    SideMenuComponent,
    ProductCardComponent,
    NotFoundComponent,
    LoginComponent,
    ProductPageComponent,
    HomeComponent,
    AdminProductListComponent,
    AdminUserListComponent,
    AdminPageComponent,
    ShoppingCartComponent,
    AdminProductFormComponent,
    AdminUserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  entryComponents: [AdminProductFormComponent, AdminUserFormComponent]
})
export class AppModule {
}
