import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';
import Swal from 'sweetalert2';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  loginForm: FormGroup;
  passwordFieldType: any = 'password';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: ApiServiceService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  // onLogin() {
  //   console.log(this.username);
  //   console.log(this.password);
  //   if (this.username === 'sandip' && this.password === 'sandip123') {
  //     this.loginService.login();
  //     this.router.navigate(['matches']);
  //     alert('Login Successfully...!');
  //     // this.isLogin=false
  //   } else {
  //     alert('User Not Found.? Please correct Email and password');
  //   }
  // }

  userLogin(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.loginService
        .usersLogin({ email, password })
        .pipe(
          catchError((error) => {
            // console.error('Error during signup:', error);
            if (error.status === 401) {
              Swal.fire({
                icon: 'error',
                title: 'Password not match',
                text: 'Please enter correct password',
                showConfirmButton: true,
                confirmButtonText: 'OK',
              });
            }

            if (error.status === 400) {
              Swal.fire({
                icon: 'error',
                title: `'User not exists 😵'`,
                text: `User not found. Please Register..👍`,
                showConfirmButton: true,
                confirmButtonText: 'OK',
              });
            }

            return throwError(error);
          })
        )
        .subscribe((res) => {
          // localStorage.setItem('token', res.token);
          console.log(res, 'login data');
          Swal.fire({
            icon: 'success',
            title: 'Login Successfully..!',
            text: 'All THE BEST 👍✌️',
            showConfirmButton: true,
            confirmButtonText: 'OK',
          });
          // alert(`User Login Successfully..!
          //    please Check your : "${email}"`);
          this.loginService.login();
          this.router.navigate(['matches']);
        }),
        (error: any) => {
          console.error('login Failed', error);
        };
    }
  }

  togglePasswordView() {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
