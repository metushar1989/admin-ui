import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators,FormGroup} from "@angular/forms";
import { CommonFunction } from 'src/app/core/services/common-function.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private commonFunction : CommonFunction,
    private router: Router,
  ) {}


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  async onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    if(this.loginForm.value.email === 'admin@abc.com' && this.loginForm.value.password ==='admin@123'){
        const encode: any = await this.commonFunction.encode(
        JSON.stringify({
          name: 'admin',
          email: 'admin@abc.com',
          role:'Super Admin'
        })
      );
        localStorage.setItem('userData', encode);
        this.router.navigate(['./dashboard']);
    }else {alert ('User Not Verify')}
  }

}
