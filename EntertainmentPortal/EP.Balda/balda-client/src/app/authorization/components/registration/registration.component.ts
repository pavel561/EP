import { Router } from '@angular/router';
import { HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {
  registerGroup: FormGroup;
  errotText: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerGroup = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
    });
   }

  ngOnInit() {
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
    this.authService.registerUser(form.value).subscribe(p => {
      console.log(p),
      this.router.navigateByUrl('welcome');
    },
    (err: HttpErrorResponse) => {
      console.log(err.error);
      this.errotText = err.error;
    });
  }

  get userName() {
    return this.registerGroup.get('userName');
  }

  get email() {
    return this.registerGroup.get('email');
  }

  get password() {
    return this.registerGroup.get('password');
  }

  get passwordConfirm() {
    return this.registerGroup.get('passwordConfirm');
  }

  checkPasswords(group: FormGroup) {
  const pass = this.registerGroup.controls.password.value;
  const confirmPass = this.registerGroup.controls.confirmPass.value;

  return pass === confirmPass ? null : { notSame: true };
}

}