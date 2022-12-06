import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlConfig } from 'src/app/features/config/url.config';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private token: string = '';

  constructor(private httpClient: HttpClient) {}

  getProducts() {
    this.token = localStorage.getItem('token') || '';

    if (this.token !== '') {
      let Headers = new HttpHeaders();
      Headers = Headers.append('Authorization', this.token);
      return this.httpClient.get<Product[]>(urlConfig.get_products, {
        headers: Headers,
      });
    }

    return new Observable<Product[]>();
  }

  getProductById(id: number): Observable<Product> {
    this.token = localStorage.getItem('token') || '';

    if (this.token !== '') {
      let Headers = new HttpHeaders();
      Headers = Headers.append('Authorization', this.token);
      return this.httpClient.get<Product>(urlConfig.get_product + '/' + id, {
        headers: Headers,
      });
    }

    return new Observable<Product>();
  }
}
