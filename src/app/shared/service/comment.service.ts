import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comments} from "../models/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private readonly baseURL = "http://localhost:8080/api/comments";
  private readonly http = inject(HttpClient);

  getAllCommentsFromBlog(blogId: string): Observable<Comments[]>{
    return this.http.get<Comments[]>(`${this.baseURL}/${blogId}`);
  }

  getComment(commentId: string): Observable<Comments>{
    return this.http.get<Comments>(`${this.baseURL}/getComment/${commentId}`)
  }

  createComment(comment: Comments): Observable<Comments>{
    return this.http.post<Comments>(`${this.baseURL}`, comment);
  }

  deleteComment(commentId: string):Observable<void>{
    return this.http.delete<void>(`${this.baseURL}/${commentId}`);
  }

}
