import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ComponentsModule} from "./components.module";
import {NavbarComponent} from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [
        RouterOutlet,
        ComponentsModule,
        NavbarComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
    ngOnInit(): void {
      console.log('Hola valeria')
    }
}
