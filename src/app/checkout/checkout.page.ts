import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: false,
})
export class CheckoutPage {

  cartItems: any[] = [];

  totalPrice = 0;

  constructor(private router: Router) {}

  ionViewWillEnter() {

    this.cartItems =
      JSON.parse(localStorage.getItem('cart') || '[]');

    this.totalPrice =
      this.cartItems.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
      );

  }
placeOrder() {
  console.log('Button Clicked');

  this.router.navigateByUrl('/order-success').then(success => {
    console.log('Navigation:', success);
  }).catch(err => {
    console.error(err);
  });
}
}