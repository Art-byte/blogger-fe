import {Component, inject, OnInit} from '@angular/core';
import {ComponentsModule} from "../../components.module";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SpinnerComponent} from "../../components/spinner/spinner.component";
import {AuthService} from "../../shared/service/auth.service";
import {AuthRequest} from "../../shared/models/auth_models/AuthRequest";
import {AuthResponse} from "../../shared/models/auth_models/AuthResponse";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ComponentsModule,
    SpinnerComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  showSpinner = false;
  reactiveForm: FormGroup;
  authReq: AuthRequest;
  private readonly router = inject(Router);
  private readonly loginForm = inject(FormBuilder);
  private readonly authService = inject(AuthService);

  initForm(): void{
    this.reactiveForm = this.loginForm.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.reactiveForm.reset();
  }

  login(){
    this.showSpinner = true;
    this.authReq = new AuthRequest();
    this.authReq.username = this.reactiveForm.get('username').value;
    this.authReq.password = this.reactiveForm.get('password').value;
    this.authService.login(this.authReq).subscribe((data: AuthResponse) => {
      this.authService.saveToken(data.jwt);
      setTimeout(() => {
        this.showSpinner = false;
        this.authService.saveRole();
        this.authService.saveUsername();
        this.router.navigate(['/home/blogs']);
      }, 3000);
    })
  }

}
