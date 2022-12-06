import { Injectable } from '@angular/core';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: Product[] = [];

  public subTotal: number = 0;
  readonly shipping: number = 5;
  public total: number = 0;

  constructor() {}

  public addProduct(product: Product) {
    let isOnCart = false;

    this.products.forEach((currentProduct) => {
      if (currentProduct.id === product.id) {
        isOnCart = true;
      }
    });

    if (!isOnCart) {
      this.products.push(product);
      this.updateTotals();
    } else {
      this.increment(product);
    }
  }

  public increment(product: Product) {
    this.products.forEach((currentProduct) => {
      if (currentProduct.id === product.id) {
        currentProduct.quantity++;
      }
    });

    this.updateTotals();
  }

  public decrement(product: Product) {
    this.products.forEach((currentProduct) => {
      if (currentProduct.id === product.id) {
        currentProduct.quantity--;

        if (currentProduct.quantity < 1) {
          this.removeProduct(product);
        }
      }
    });

    this.updateTotals();
  }

  public cleanCart() {
    this.products = [];
    this.subTotal = 0;
    this.total = 0;
  }

  public removeProduct(product: Product) {
    this.products = this.products.filter(
      (currentProduct) => currentProduct.id !== product.id
    );

    this.updateTotals();
  }

  public getAllProducts() {
    return this.products;
  }

  public updateTotals() {
    let subtotal = 0;

    this.products.forEach((currentProduct) => {
      subtotal += currentProduct.preco * currentProduct.quantity;
    });

    this.subTotal = subtotal;
    this.total = this.subTotal + this.shipping;
  }
}
