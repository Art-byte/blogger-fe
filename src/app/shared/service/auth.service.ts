import {inject, Injectable} from '@angular/core';
import {User} from "../models/User";
import {HttpClient} from "@angular/common/http";
import {AuthRequest} from "../models/auth_models/AuthRequest";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private $user: User;
  private $token: string;
  private readonly baseURL = 'http://localhost:8080/api';
  private readonly http = inject(HttpClient);

  public get token(): string{
    if(this.$token != null){
      return this.$token;
    }
    this.$token = localStorage.getItem("token");
    return this.$token;
  }


  login(authReq: AuthRequest): Observable<AuthenticatorResponse>{
    return this.http.post<AuthenticatorResponse>(`${this.baseURL}/authenticate`, authReq);
  }

}
