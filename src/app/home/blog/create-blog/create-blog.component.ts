import { Component } from '@angular/core';
import {ComponentsModule} from "../../../components.module";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [
    ComponentsModule,
    RouterLink
  ],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss'
})
export class CreateBlogComponent {
  blog = {
    title: '',
    content: '',
  };

  files: File[] = [];

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files) {
      this.files = Array.from(input.files);
    }
  }

  triggerFileInput(): void {
    const fileInput = document.getElementById('file-upload') as HTMLInputElement;
    fileInput.click();
  }

  onSubmit(): void {
    console.log('Formulario enviado:', this.blog);
    console.log('Archivos seleccionados:', this.files);
    // Aquí puedes enviar los datos al backend o realizar otras acciones
  }
}
