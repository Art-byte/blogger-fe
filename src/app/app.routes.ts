import { Routes } from '@angular/router';
import {UserComponent} from "./home/user/user.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./auth/login/login.component";

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "users", component: UserComponent}
    ]
  }
];
