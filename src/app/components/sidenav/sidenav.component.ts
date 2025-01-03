import {Component, inject, OnInit} from '@angular/core';
import {SidenavService} from "../../shared/service/sidenav.service";
import {ComponentsModule} from "../../components.module";
import {RouterLink} from "@angular/router";
import {AuthService} from "../../shared/service/auth.service";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    ComponentsModule,
    RouterLink,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit{

  isOpen = false;
  username: string;
  private readonly sidenavService = inject(SidenavService);
  private readonly authService = inject(AuthService);

  ngOnInit(): void {
    this.getUsername();
    this.sidenavService.sidenavStatus$.subscribe((status) => {
      this.isOpen = status;
    });
  }

  getUsername():void {
    this.username = this.authService.getUsernameFromToken();
  }

}
