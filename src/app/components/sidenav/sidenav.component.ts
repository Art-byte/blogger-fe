import {Component, inject, OnInit} from '@angular/core';
import {SidenavService} from "../../shared/service/sidenav.service";
import {ComponentsModule} from "../../components.module";
import {RouterLink} from "@angular/router";

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
  private readonly sidenavService = inject(SidenavService);

  ngOnInit(): void {
    this.sidenavService.sidenavStatus$.subscribe((status) => {
      this.isOpen = status;
    });
  }

}
