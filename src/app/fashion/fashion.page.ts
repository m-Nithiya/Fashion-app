import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.page.html',
  styleUrls: ['./fashion.page.scss'],
  standalone:false,
})
export class FashionPage {
  constructor(private router: Router) {}

  goToProducts(gender: string) {
    this.router.navigate(['/fashion-products', gender]);
  }
}