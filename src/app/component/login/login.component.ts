import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = formBuilder.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  login() {
    this.authService.attemptAuthentication(this.loginForm.get('username').value, this.loginForm.get('password').value)
    .subscribe(() => {
      if (this.authService.isAuthenticated()) {
        this.router.navigate(['friends']);
      }
    });
  }

  signUp() {
    this.router.navigate(['/sign-up']);
  }
}
