import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // For HTTP calls**

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ProductsComponent } from './products/products.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    AddtocartComponent,
    ProductsComponent,
    HttpTestComponent,
    LoginComponent,
    AdminComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
