import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productList: Array<Product> = [
    {
      "productName": 'IPhone',
      productQty: 45,
      price: 65000,
      category: 'electronic',
      description: 'Some quick example text to build on the card title and make up the bulk of the card'
    },
    {
      productName: 'SONY TV',
      productQty: 4,
      price: 25000,
      category: 'electronic',
      description: 'Some quick example text to build on the card title and make up the bulk of the card'
    },
    {
      productName: 'White Board',
      productQty: 4,
      price: 2000,
      category: 'education',
      description: 'Some quick example text to build on the card title and make up the bulk of the card'
    }
  ];

  constructor() { }

  getProductList() {
    return this.productList;
  }
}
