import {Component, inject} from '@angular/core';
import {ComponentsModule} from "../../components.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ComponentsModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  private readonly router = inject(Router);

  logout(){
    this.router.navigate(['/']);
  }

}
