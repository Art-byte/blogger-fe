import {Component, inject, OnInit} from '@angular/core';
import {ComponentsModule} from "../../../components.module";
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Blog} from "../../../shared/models/Blog";

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
export class CreateBlogComponent implements OnInit{

  files: File[] = [];
  blog: Blog;
  private readonly router = inject(Router);
  private readonly  blogForm = inject(FormBuilder);
  reactiveForm: FormGroup

  initForm(){
    this.reactiveForm = this.blogForm.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.reactiveForm.reset();
  }

  saveBlog(){
    this.blog = new Blog();
    this.blog.title = this.reactiveForm.get('title').value;
    this.blog.content = this.reactiveForm.get('content').value;
    this.blog.authorId = "Author dummy"

    console.log(this.blog);
  }

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

}
