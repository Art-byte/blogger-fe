import {Component, inject, OnInit} from '@angular/core';
import {ComponentsModule} from "../../components.module";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ComponentsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  private readonly router = inject(Router);
  private readonly loginForm = inject(FormBuilder);

  public reactiveForm: FormGroup = this.loginForm.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  get username() { return this.reactiveForm.get('username'); }
  get password() { return this.reactiveForm.get('password'); }

  ngOnInit(): void {
    this.reactiveForm.reset();
  }

  login(){
    this.router.navigate(['/home/users']);
  }

}