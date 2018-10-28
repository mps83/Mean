import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private _fb: FormBuilder , private router: Router) {
    this.loginForm = this._fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });
   }
   onSubmit() {
   console.warn(this.loginForm.value);
   this.router.navigate(['dashboard']);
   }
  ngOnInit() {
  }

}
