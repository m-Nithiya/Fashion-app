import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage {

  name: string = '';
  email: string = '';
  age: number | null = null;
  phone: string = '';
  dob: string = '';

  profileImage: string = 'assets/profile.png';

  constructor(  private router: Router,
    private location: Location
  )  {}

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        this.profileImage = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }

  saveProfile() {
    console.log("Name :", this.name);
    console.log("Email :", this.email);
    console.log("Age :", this.age);
    console.log("Phone :", this.phone);
    console.log("DOB :", this.dob);
  }

  goBack() {
    this.location.back();
  }

  goNext() {
    this.router.navigate(['/next page']);
  }

    refreshPage() {
    window.location.reload();
  }

}