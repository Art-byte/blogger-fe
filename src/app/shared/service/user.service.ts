import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080/api/users";
  private readonly http = inject(HttpClient);

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseURL}`);
  }

  getUserById(userId: string): Observable<User>{
    return this.http.get<User>(`${this.baseURL}/getUser/${userId}`);
  }

  getRoles(): Observable<any>{
    return this.http.get(`${this.baseURL}/roles`);
  }

  createUser(user: User): Observable<any>{
    return this.http.post<any>(`${this.baseURL}`, user);
  }

  enabledUser(userId: string): Observable<any>{
    return this.http.post(`${this.baseURL}/enabled/${userId}`, null);
  }

  disabledUser(userId: string): Observable<any>{
    return this.http.delete(`${this.baseURL}/disabled/${userId}`);
  }

}
