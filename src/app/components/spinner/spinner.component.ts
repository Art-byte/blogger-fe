import {Component} from '@angular/core';
import {ComponentsModule} from "../../components.module";

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [
    ComponentsModule
  ],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
}
