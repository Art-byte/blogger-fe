import {Component, inject} from '@angular/core';
import {MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuItem} from "@angular/material/menu";
import {ComponentsModule} from "../../components.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-float-button',
  standalone: true,
    imports: [
      ComponentsModule
    ],
  templateUrl: './float-button.component.html',
  styleUrl: './float-button.component.scss'
})
export class FloatButtonComponent {

  private readonly router = inject(Router);

  openCreateBlogComponent(){
    this.router.navigate(['/home/create']);
  }

}
