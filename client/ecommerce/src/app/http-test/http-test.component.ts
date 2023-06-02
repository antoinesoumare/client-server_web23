import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/interface';
import { products } from '../interfaces/products.interface';
import {environment} from 'src/environments/environment'

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) { 

  }

  // Every time the component loads , trigger HTTP call
  // We wait for the server to send the response
  // Once received, we can parse the JSON and bind it to HTML

  ngOnInit(): void {  
    // anything written inside will be executed whenever the component is initialized
    this.http.get<products>(environment.server+ '/products').subscribe( response => {
      console.log(response.products);
      this.products = response.products;

    });
  } 
}
