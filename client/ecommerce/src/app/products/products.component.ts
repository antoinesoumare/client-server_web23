import { Component } from '@angular/core';
import { products } from '../interfaces/products.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: any[] = [
    {
      ID: 1,
      name: 'Apple Flavor',
      description: 'Experience the crisp and refreshing taste of our Apple flavor energy drink.',
      availability: 'In Stock',
      price: 2.99,

    },
    // {
    //   name: 'Strawberry Flavor',
    //   description: 'Indulge in the sweet and tangy taste of our Strawberry flavor energy drink.',
    //   availability: 'In Stock',
    //   price: 2.99,
    // },
    // {
    //   name: 'Pineapple Flavor',
    //   description: 'Escape to the tropics with the tropical burst of flavor in our Pineapple flavor energy drink.',
    //   availability: 'In Stock',
    //   price: 2.99,
    // },
  ];

  age = 10;
  pricePH = "Will Smith";
  abcText = "This is a test";
  priceClass = "redborder";
  productClass = "";

  printHi() {
    console.log('Hi');
    this.priceClass = "blueborder";
  }

  alertSubmit() {
    alert('Submitted');
  }

  createCandyBorder(){
    this.productClass = "focusInput";
  }

  removeCandyBorder(){
    this.productClass = "";
  }

}
