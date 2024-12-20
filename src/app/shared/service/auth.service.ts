import {inject, Injectable} from '@angular/core';
import {User} from "../models/User";
import {HttpClient} from "@angular/common/http";
import {AuthRequest} from "../models/auth_models/AuthRequest";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AuthResponse} from "../models/auth_models/AuthResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User;
  private readonly baseURL = 'http://localhost:8080/api';
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  login(authReq: AuthRequest): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.baseURL}/authenticate`, authReq);
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.clear();
    this.router.navigate(['/']);
  }

  saveToken(token: string){
    if(token != null){
      localStorage.setItem("token", token);
    }
  }

}
