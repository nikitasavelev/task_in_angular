import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  loginUser(credentials) {
    this.authService.loginUser(credentials).subscribe(
      (data) => {
        this.router.navigate(['cities']);
      },
      (error) => {
        this.invalidLogin = true;
        console.log(error);
      }
    );
  }
}
