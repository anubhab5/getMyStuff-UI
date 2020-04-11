import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent implements OnInit {

  productList: Array<Product> = [
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

  ngOnInit(): void {
  }

  buyProduct(product: Product) {
    if (product.productQty > 0) {
      // product.productQty -= 1;
    }
  }

}
