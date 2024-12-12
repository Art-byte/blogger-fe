import {Component, inject} from '@angular/core';
import {ComponentsModule} from "../../components.module";
import {Router} from "@angular/router";
import {SidenavService} from "../../shared/service/sidenav.service";

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
  private readonly sidenavService = inject(SidenavService);

  logout(){
    this.router.navigate(['/']);
  }

  toggleSidenav(){
    this.sidenavService.toggleSidenav();
  }

}
