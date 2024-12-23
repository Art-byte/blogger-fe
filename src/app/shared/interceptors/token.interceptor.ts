import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const router = inject(Router);
  const authService = inject(AuthService);
  const currentURL = router.url;
  if(currentURL == '/' || currentURL.startsWith('login')){
    return next(req);
  }

  const tokenSession = sessionStorage.getItem("token");
  if(tokenSession == null){
    authService.logout();
  }

  if(tokenSession){
    const authReq = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${tokenSession}`)
    })
    return next(authReq);
  }

  return next(req);
};
