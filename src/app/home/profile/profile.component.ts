import {Component, inject, OnInit} from '@angular/core';
import {UserService} from "../../shared/service/user.service";
import {AuthService} from "../../shared/service/auth.service";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  private readonly authService = inject(AuthService);
  private readonly userService = inject(UserService);

  ngOnInit(): void {
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
