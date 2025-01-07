import {Component, inject, OnInit} from '@angular/core';
import {UserService} from "../../shared/service/user.service";
import {AuthService} from "../../shared/service/auth.service";
import {ComponentsModule} from "../../components.module";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserProfile} from "../../shared/models/profile/UserProfile";
import {RouterLink} from "@angular/router";
import {Blog} from "../../shared/models/Blog";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ComponentsModule,
    RouterLink
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  reactiveForm: FormGroup;
  userData: UserProfile;
  private readonly profileForm = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly userService = inject(UserService);

  blogsList :Blog[] = [
    {
      title: "Blog de muestra",
      content: "Este es el contenido de este blog",
      authorId: "Arturo Pedraza",
    },
    {
      title: "Blog de muestra",
      content: "Este es el contenido de este blog",
      authorId: "Arturo Pedraza",
    },
    {
      title: "Blog de muestra",
      content: "Este es el contenido de este blog",
      authorId: "Arturo Pedraza",
    },
    {
      title: "Blog de muestra",
      content: "Este es el contenido de este blog",
      authorId: "Arturo Pedraza",
    },
  ];

  initForm(): void{
    this.reactiveForm = this.profileForm.group({
      username: ['', Validators.required],
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
    this.userService.getUserByUsername(username).subscribe(user => {
      this.userData = user;
    });
  }

}
