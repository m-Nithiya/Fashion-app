import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  userName: string = '';
  password: string = '';

  constructor(private router: Router,  private http: HttpClient) {}

 login() {

  const body = {
    email: this.userName,
    password: this.password
  };

  this.http.post<any>('http://127.0.0.1:8000/newapp/login/', body)
    .subscribe(res => {

    console.log(res); 
      if (res.status) {

        localStorage.setItem('user', JSON.stringify(res.user));

        this.router.navigate(['/home']);

      } else {

        alert(res.message);

      }

    });
  }
}