import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegisterPage {

  fullName = '';
  email = '';
  password = '';
  age = '';

  constructor(private api: ApiService) {}

  register() {

    let obj = {
      name: this.fullName,
      email: this.email,
      password: this.password,
      age: this.age
    };

    this.api.callHttpPost("register/", obj).subscribe({
      next: (res: any) => {
        console.log("Success",res);
        alert("Saved Successfully");
      },
      error: (err: any) => {
  console.log("Full Error:", err);
  alert(JSON.stringify(err.error));
}
    });
  }
}