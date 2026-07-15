import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false
})
export class CartPage implements OnInit {

  
  cartItems = [

    {
      name: 'Casual Shirt',
      price: 799,
      oldPrice: 999,
      offer: '20%',
      image: 'assets/Mens/men3.jpg',
      size: 'M',
      color: 'Black',
      qty: 1
    },

    {
      name: 'Denim Jacket',
      price: 1499,
      oldPrice: 1899,
      offer: '21%',
      image: 'assets/Mens/Denim Jacket.jpg',
      size: 'L',
      color: 'Blue',
      qty: 1
    },

  ];

  recommendedProducts = [

    {
      name: 'Formal Shirt',
      price: 999,
          rating:4.5,
      image: 'assets/Mens/men4.jpg'
    },

    {
      name: 'Hoodie',
      price: 1199,
          rating:4.5,
      image: 'assets/Mens/Hoodie.jpg'
    },

    {
      name: 'Black T Shirt',
      price: 799, 
      rating:4.5,
      image: 'assets/Mens/black T-shirt.jpg'
    },

    {
      name: 'Men jeans',
      price: 1499,
      rating:4.4,
      image: 'assets/Mens/jeans.jpg'

    },

  ];

  get totalPrice() {
    return this.cartItems.reduce((a, b) => a + (b.price * b.qty), 0);
  }

  get discount() {
    return this.cartItems.reduce((a, b) => a + ((b.oldPrice - b.price) * b.qty), 0);
  }

  get finalAmount() {
    return this.totalPrice;
  }

  increaseQty(item: any) {
    item.qty++;
  }

  decreaseQty(item: any) {
    if (item.qty > 1) {
      item.qty--;
    }
  }
  constructor(private router: Router) {
  }
  placeOrder() {
  this.router.navigate(['/checkout']);
}
removeItem(item: any) {

  this.cartItems = this.cartItems.filter(x => x.name !== item.name);

  localStorage.setItem('cart', JSON.stringify(this.cartItems));

}

ngOnInit() {
  this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
}
}