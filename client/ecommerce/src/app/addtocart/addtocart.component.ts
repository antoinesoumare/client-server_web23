import { Component } from '@angular/core';
import { Addtocart } from '../interfaces/addtocart.interface';


@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent {

  productsadded: Addtocart[] = [
    {
      name: 'Apple Flavor',
      description: 'Thank you for adding this product to your cart. The apple flavor is our best seller!',
      price: 2.99,
      quantity: 1,
      Availablefordelivery: true,
      
    },
    // {
    //   name: 'Strawberry Flavor',
    //   description: 'Extra tasty and juicy',
    //   price: 2.99,
    //   quantity: 10,
    //   Availablefordelivery: false,
    // },
    // {
    //   name: 'Pineapple Flavor',
    //   description: 'The best pineapple flavor',
    //   price: 2.99,
    //   quantity: 15,
    //   Availablefordelivery: true,
    // },
  ];

}
