import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public RegForm: FormGroup;

  constructor(private _fb: FormBuilder, private apiService: ApiServiceService, private router: Router) {
    this.RegForm = this._fb.group({
      'name' : ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required],
      'confirmPassword' : ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.RegForm.controls.password.value === this.RegForm.controls.confirmPassword.value) {
      const body = {
        'name' : this.RegForm.controls.name.value,
        'email' : this.RegForm.controls.email.value,
        'password' : this.RegForm.controls.password.value,
      };
     return this.apiService.post('/api/users' , body).subscribe(res => {
        alert('posted');
        this.router.navigate(['login']);
     });
    } else {
     alert('Passwords did not match');
    }
  }
  ngOnInit() {
  }

}
