import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavbarComponent} from "../components/navbar/navbar.component";
import {SidenavComponent} from "../components/sidenav/sidenav.component";
import {ComponentsModule} from "../components.module";
import {FloatButtonComponent} from "../components/float-button/float-button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SidenavComponent,
    ComponentsModule,
    FloatButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
