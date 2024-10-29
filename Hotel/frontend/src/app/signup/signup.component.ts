import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatCard} from '@angular/material/card';
import {MatFormField} from '@angular/material/form-field';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {UsersService} from '../services/users.service';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  standalone: true,
  imports: [
    RouterLink,
    MatToolbar,
    MatCard,
    MatFormField,
    ReactiveFormsModule,
    NgIf,
    MatButton,
    MatInput
  ],
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
   private formBuilder: FormBuilder,
   private usersService: UsersService,
   private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  onSubmit(){
    if(this.registerForm.invalid){
      return;
    }
    const username = this.registerForm.get('username')?.value;
    const password = this.registerForm.get('password')?.value;

    this.usersService.register(username, password).subscribe({
      next: (response) =>{
        //Registration successful
        window.alert('Registration successful');
        this.router.navigate(['/login']);
      },
      error: (error) =>{
        //Registration failed
        window.alert('Please enter valid details to register yourself.');
      }
    });

  }

}
