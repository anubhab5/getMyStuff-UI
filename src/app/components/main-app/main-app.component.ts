import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent implements OnInit {

  productList: Array<Product>;

  constructor(private productSvc: ProductService) { }

  ngOnInit(): void {
  }

  getProductList() {
    return this.productList = this.productSvc.productList;
  }

  buyProduct(product: Product) {
    if (product.productQty > 0) {
      // product.productQty -= 1;
    }
  }

}
