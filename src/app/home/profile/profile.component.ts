import {Component, inject} from '@angular/core';
import {UserService} from "../../shared/service/user.service";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  private readonly userService = inject(UserService);


  getDataFromUser(){
    const username = sessionStorage.getItem("username")
    this.userService.getUserByUsername(username).subscribe(user => {
      console.log(user);
    });
  }

}
