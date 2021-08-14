import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { LocalStorageService } from '../../services/storage.service';
import { wrongCredentials } from 'src/app/validators/wrong-credenials';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string = '';
  password: string = '';


  constructor(
    private router: Router,
    public storage: LocalStorageService,
    private userService: UsersService,
    
    ) { }

  signInForm = new FormGroup ({
    email: new FormControl ('', [
      Validators.required,
      Validators.email,  
    ]),
    password: new FormControl ('',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ] )
  }, { validators: [wrongCredentials(this.userService.getUsers())]})


  ngOnInit(): void {
  }

  navigateToSignUp(): void {
    this.router.navigate(['signup']);
  }

  onSubmit() {
    console.log('canvas')
   
      this.router.navigate(['canvas'])
      
  }
}
