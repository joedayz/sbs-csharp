import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatCard} from '@angular/material/card';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {UsersService} from '../services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    RouterLink,
    MatToolbar,
    MatCard,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    NgIf,
    MatButton
  ],
  standalone: true
})
export class LoginComponent implements OnInit {

  logInForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.logInForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(){
    if (this.logInForm.invalid){
      return;
    }
    const username = this.logInForm.get('username')?.value;
    const password = this.logInForm.get('password')?.value;

    this.usersService.login(username, password).subscribe({
      next: (response) =>{
        //Login successful
        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.id);
        window.alert('Login successful');
        this.router.navigate(['/']);
      },
      error: (error) =>{
        window.alert('Login failed');
      }
    });
  }


}
