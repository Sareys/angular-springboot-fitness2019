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
  MatListModule, MatCardModule
} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeComponent} from './home/home.component';
import { AdminProductListComponent } from './admin/product/admin-product-list/admin-product-list.component';
import { AdminUserListComponent } from './admin/product/admin-user-list/admin-user-list.component';
import { AdminPageComponent } from './admin/product/admin-page/admin-page.component';


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
    AdminPageComponent
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
