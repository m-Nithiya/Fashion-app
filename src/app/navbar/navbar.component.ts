import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false,
})
export class NavbarComponent implements OnInit {

  user: any = {};

  constructor(private router: Router) {}

  ngOnInit() {

    const data = localStorage.getItem('user');

    if (data) {
      this.user = JSON.parse(data);
    }

  }

  get userInitial(): string {
    return this.user?.name?.charAt(0).toUpperCase() || '';
  }

   goToProfile() {
    this.router.navigate(['/profile']);
  }


  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

}