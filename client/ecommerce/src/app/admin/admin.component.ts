import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/interface';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit{

  constructor(private http: HttpClient) { }

  products: any[] = [];

  setLiveStatus(id:number, status: boolean){
    console.log(id, status);
    this.http.put<boolean>('http://localhost:4600/setstatus/' + id, {status: status}).subscribe( res => {
      console.log(res);
      
    })
  }

  deleteProduct(id:number): void{
    this.http.delete<boolean>('http://localhost:4600/deleteproduct/' + id).subscribe( res => {
      if(res){
        alert('Product deleted successfully');
        this.ngOnInit();
      }
    })
  }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:4600/products').subscribe( res => {
      console.log(res);
      this.products = res.products;

      console.log('Local products', this.products)
    })
  }

  
  updatedName: string | null = null;
  updatedPrice: number | null = null;

  updateProduct(id: number): void {
    const updatedNameInput = prompt("Enter the updated name:");
    const updatedPriceInput = prompt("Enter the updated price:");

    if (updatedNameInput !== null && updatedPriceInput !== null) {
      this.updatedName = updatedNameInput;
      this.updatedPrice = parseFloat(updatedPriceInput);

      this.http
        .put<boolean>(
          'http://localhost:4600/updateprice/' + id,
          { name: this.updatedName, price: this.updatedPrice }
        )
        .subscribe(res => {
          if (res) {
            alert('Product updated successfully');
            this.ngOnInit();
          }
        });
    }
  }



  



}




