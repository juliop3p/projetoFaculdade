import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/Product';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  isCartEmpty: boolean = true;
  checkout: boolean = false;

  constructor(public cartService: CartService, private route: Router) {}

  ngOnInit(): void {
    this.getCurrentProducts();
  }

  increment(product: Product) {
    this.cartService.increment(product);
  }

  decrement(product: Product) {
    this.cartService.decrement(product);
    this.getCurrentProducts();
  }

  cleanCart() {
    this.cartService.cleanCart();
    this.getCurrentProducts();
  }

  removeProduct(product: Product) {
    this.cartService.removeProduct(product);
    this.getCurrentProducts();
  }

  checkoutProducts() {
    this.checkout = true;
    this.cleanCart();
  }

  goHome() {
    this.route.navigate(['products']);
  }

  isEmpty() {
    this.isCartEmpty = this.products.length < 1 ? true : false;
  }

  getCurrentProducts() {
    this.products = this.cartService.getAllProducts();
    this.isEmpty();
  }
}
