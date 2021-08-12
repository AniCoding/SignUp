import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';
import { LocalStorageService } from 'src/app/services/storage.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  usersKey: string = 'users';
  users: IUser[] = []; 
  // =['user1']

  AuthForm = new FormGroup ({

    firstName: new FormControl ('', [
      Validators.required,
      Validators.pattern(/^[a-z0-9]+$/)]
  
    ),
    lastName: new FormControl ('', [
      Validators.required,
      Validators.pattern(/^[a-z0-9]+$/)]
  
    ),
    email: new FormControl ('', [
      Validators.required,
      Validators.pattern(/^[a-z0-9]+$/)]
  
    ),
    password: new FormControl ('',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ] ),
    confirmPassword: new FormControl ('',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
  })

  get getPassword() {
    return this.AuthForm.get('passwords')?.get('password');
  }

  get getConfirmPassword() {
    return this.AuthForm.get('passwords')?.get('confirmPassword');
  }

  onSubmit(){
    console.log('look in the local storage and if email doesnt exist add else return an error');
    const newUser: IUser = {
      id: this.newId(),
      firstName: this.AuthForm.get('firstName')?.value,
      lastName: this.AuthForm.get('lastName')?.value,
      email: this.AuthForm.get('email')?.value,
      password: this.AuthForm.get('password')?.value,
    };

    this.users.push(newUser);
    const usersStr = JSON.stringify(this.users);
    this.storage.set(this.usersKey, usersStr);
  }

  newId(): string {
    return String(Date.now());
  }

  constructor(private router: Router, private fb: FormBuilder, private storage: LocalStorageService) { 
    
  }

  ngOnInit(): void {
    
  }


  getUsers(): void {
    const users = this.storage.get(this.usersKey);
    if (users) {
      this.users = JSON.parse(users);
    }
  }

  navigateToSignIn(): void {
    this.router.navigate(['']);
  }
}
