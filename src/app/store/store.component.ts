import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductCategory } from '../model/product-category';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public products: Product[] = [];
  public productsCategory: ProductCategory[] = [];

  constructor(private productService: ProductService) {
    this.productService.getData().subscribe((data) => {
      this.productsCategory = data;
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  delete(product: Product): void {
    this.products = this.products.filter(h => h !== product);
  }
}