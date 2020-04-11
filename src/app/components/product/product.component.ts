import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  @Output()
  buyItem = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  buyThisProduct(product: Product) {
    this.buyItem.emit(product);
    product.productQty -= 1;
  }

}
