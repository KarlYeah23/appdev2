import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseHttpService{

  private product = new BehaviorSubject<Product[]>([]); 

  private apiUrl = 'http://localhost:8080/api/product_data';

  constructor(protected override http: HttpClient) { 
    super(http, '/api/list-categories')
  }

  loadProduct(product: Product[]) {
    this.product.next(product);
  }

  getProduct(): Observable<Product[]> {
    return this.product.asObservable();
  }

  public addProduct(formData: FormData): Observable<any> {
    return this.http.put(`${this.apiServerUrl}/api/product`, formData);
  }
}
