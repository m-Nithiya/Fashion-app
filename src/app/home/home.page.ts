import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  user: any = {};
  get userInitial(): string {
    return this.user.name.charAt(0).toUpperCase();
  }
  searchText: string = '';
  selectedCategory: string = 'all';
  selectedPrice: number = 2000;

  banners = [
    'assets/banners/women1.png',
    'assets/banners/men.png',
    'assets/banners/kids.png',
  ];


  products: any[] = [
    { name: 'Men Casual Shirt', price: 599, category: 'men', image: 'assets/Mens/men3.jpg' },
    { name: 'Men Formal Shirt', price: 699, category: 'men', image: 'assets/Mens/men4.jpg' },
    { name: 'Men Black T-shirt', price: 399, category: 'men', image: 'assets/Mens/black T-shirt.jpg' },
    { name: 'Men Hoodie', price: 899, category: 'men', image: 'assets/Mens/Hoodie.jpg' },
    { name: 'Men Blazer', price: 1999, category: 'men', image: 'assets/Mens/Blazer.jpg' },
    { name: 'Men Denim Jacket', price: 1299, category: 'men', image: 'assets/Mens/Denim Jacket.jpg' },
    { name: 'Men jeans', price: 1299, category: 'men', image: 'assets/Mens/jeans.jpg' },


    { name: 'Women Floral Dress', price: 499, category: 'women', image: 'assets/Womens/women1.jpg' },
    { name: 'Women Top Pink', price: 599, category: 'women', image: 'assets/Womens/women2.jpg' },
    { name: 'Women Kurti Set', price: 699, category: 'women', image: 'assets/Womens/women3.jpg' },
    { name: 'Women Jeans High Waist', price: 899, category: 'women', image: 'assets/Womens/women4.jpg' },
    { name: 'Women Maxi Dress', price: 999, category: 'women', image: 'assets/Womens/women5.jpg' },
    { name: 'Women Korean style dress', price: 1459, category: 'women', image: 'assets/Womens/women6.jpg' },
    { name: 'Women Floral Ruffle Sleeve Dress', price: 1599, category: 'women', image: 'assets/Womens/women7.jpg' },
    { name: 'princess dress', price: 1599, category: 'women', image: 'assets/Womens/princess dress.jpg' },
    { name: 'blue frock dress', price: 1599, category: 'women', image: 'assets/Womens/blue frock dress.jpg' },


    { name: 'Kids baby frock', price: 500, category: 'kids', image: 'assets/Kids/kids1.jpg' },
    { name: 'Kids Shorts Set', price: 399, category: 'kids', image: 'assets/Kids/kids2.jpg' },
    { name: 'Kids Frock white', price: 1500, category: 'kids', image: 'assets/Kids/kids3.jpg' },
    { name: 'Kids jeans and t-shirt', price: 499, category: 'kids', image: 'assets/Kids/kids4.jpg' },
    { name: 'Kids  ornage frock', price: 1999, category: 'kids', image: 'assets/Kids/kids7.jpg' },
    { name: 'Kids  T-shirt', price: 200, category: 'kids', image: 'assets/Kids/boy1.jpg' },
    { name: 'Kids  Baby Bear Printed Striped Romper Dress', price: 450, category: 'kids', image: 'assets/Kids/boy2.jpg' },
    { name: 'Kids  Simba Printed Baby Se', price:750, category: 'kids', image: 'assets/Kids/boy3.jpg' },
    { name: 'Kids  Jeans Set', price: 600, category: 'kids', image: 'assets/Kids/boy4.jpg' },
    { name: 'Kids  Black Jacket Jeans Set', price: 799, category: 'kids', image: 'assets/Kids/boy5.jpg' },
    { name: 'Kids   Nightwear dress', price: 300, category: 'kids', image: 'assets/Kids/boy6.jpg' },


  ];

  
filteredProducts = [...this.products];
constructor(
  private router: Router,
  private toastController: ToastController
) {
  this.applyFilter();
}

increaseQty(item: any) {
  item.qty = (item.qty || 1) + 1;
}

decreaseQty(item: any) {
  if ((item.qty || 1) > 1) {
    item.qty--;
  }
}
toggleWishlist(item: any) {
  item.isWishlisted = !item.isWishlisted;

  let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

  if (item.isWishlisted) {
    const exists = wishlist.find((w: any) => w.name === item.name);
    if (!exists) {
      wishlist.push(item);
    }
  } else {
    
    wishlist = wishlist.filter((w: any) => w.name !== item.name);
  }

  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

async addToCart(item: any) {

  let cart = JSON.parse(localStorage.getItem('cart') || '[]');

   cart.push({
    name: item.name,
    price: item.price,
    image: item.image,
    category: item.category,
    qty: 1,
    oldPrice: item.price + 200,
    offer: '20%',
    size: 'M',
    color: 'Black'
  });
  localStorage.setItem('cart', JSON.stringify(cart));

  const toast = await this.toastController.create({
    message: item.name + ' added to cart',
    duration: 1500,
    color: 'success',
    position: 'bottom'
  });

  await toast.present();

  this.router.navigate(['/cart']);
}

buyNow(item: any) {
  this.addToCart(item);
}

goToCart() {
  this.router.navigate(['/cart']);
}

goToCartPage(item: any) {
  this.router.navigate(['/cart']);
}

logout() {
  localStorage.removeItem('user');
  this.router.navigate(['/login']);
}

setCategory(category: string) {
  this.selectedCategory = category;
  this.applyFilter();
}

setPrice(price: number) {
  this.selectedPrice = price;
  this.applyFilter();
}

applyFilter() {
  this.filteredProducts = this.products.filter((p: any) => {

    const matchCategory =
      this.selectedCategory === 'all' ||
      p.category === this.selectedCategory;

    const matchPrice =
      p.price <= this.selectedPrice;

    const matchSearch =
      p.name.toLowerCase().includes(this.searchText.toLowerCase());

    return matchCategory && matchPrice && matchSearch;
  });
}

ionViewWillEnter() {

  const data = localStorage.getItem('user');

  if (data) {
    this.user = JSON.parse(data);
  }

}
}  