import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
  standalone: false,
})
export class WishlistPage {

  wishlistItems: any[] = [];

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  ionViewWillEnter() {
    // page ku vara ovvoru thadavaiyum fresh ah localStorage padikkanum
    this.wishlistItems = JSON.parse(localStorage.getItem('wishlist') || '[]');
  }

  async removeItem(item: any) {
    this.wishlistItems = this.wishlistItems.filter((w: any) => w.name !== item.name);
    localStorage.setItem('wishlist', JSON.stringify(this.wishlistItems));

    const toast = await this.toastController.create({
      message: item.name + ' removed from wishlist',
      duration: 1200,
      color: 'medium',
      position: 'bottom'
    });
    await toast.present();
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
