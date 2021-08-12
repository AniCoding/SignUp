import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/storage.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private storage: LocalStorageService) { }

  ngOnInit(): void {
  }

  navigateToSignUp(): void {
    this.router.navigate(['signup']);
  }
 

  

}
