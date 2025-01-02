import {Component, inject, OnInit} from '@angular/core';
import {UserService} from "../../shared/service/user.service";
import {AuthService} from "../../shared/service/auth.service";
import {ComponentsModule} from "../../components.module";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ComponentsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  reactiveForm: FormGroup;
  private readonly profileForm = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly userService = inject(UserService);

  initForm(): void{
    this.reactiveForm = this.profileForm.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      aboutMe: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.getDataFromUser();
  }

  getDataFromUser(){
    const username = this.authService.getUsernameFromToken();
    console.log(username);
    this.userService.getUserByUsername(username).subscribe(user => {
      console.log(user);
    });
  }

}
