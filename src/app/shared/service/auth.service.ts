import {inject, Injectable} from '@angular/core';
import {User} from "../models/User";
import {HttpClient} from "@angular/common/http";
import {AuthRequest} from "../models/auth_models/AuthRequest";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AuthResponse} from "../models/auth_models/AuthResponse";
import {jwtDecode} from "jwt-decode";

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
    sessionStorage.removeItem("token");
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  saveToken(token: string){
    if(token != null){
      sessionStorage.setItem("token", token);
    }
  }

  decodeToken(): any{
    try{
      const token = sessionStorage.getItem("token");
      return jwtDecode(token);
    } catch (error){
      console.error("invalid token", error);
      return null;
    }
  }

  saveRole(){
    const role = this.getRoleFromToken();
    sessionStorage.setItem("role", role);
  }

  saveUsername(){
    const username = this.getUsernameFromToken();
    sessionStorage.setItem("username", username);
  }

  getRoleFromToken(): string | null{
    const decoded = this.decodeToken();
    return decoded ? decoded.role : null;
  }

  getUsernameFromToken(): string | null {
    const decoded = this.decodeToken();
    return decoded ? decoded.sub : null;
  }

  isTokenExpired(): boolean{
    const decoded = this.decodeToken();
    if(!decoded || !decoded.exp){
      return true;
    }
    const now = Math.floor(new Date().getTime()/100);
    return decoded.exp < now;
  }

}
