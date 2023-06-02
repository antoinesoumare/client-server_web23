import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ProductsComponent } from './products/products.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'http', component: HttpTestComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
