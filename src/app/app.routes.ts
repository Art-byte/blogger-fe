import { Routes } from '@angular/router';
import {UserComponent} from "./home/user/user.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./auth/login/login.component";
import {ProfileComponent} from "./home/profile/profile.component";
import {BlogDashboardComponent} from "./home/blog/blog-dashboard/blog-dashboard.component";
import {CreateBlogComponent} from "./home/blog/create-blog/create-blog.component";

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {path: "blogs", component: BlogDashboardComponent},
      {path: "create", component: CreateBlogComponent},
      { path: "users", component: UserComponent},
      { path: "profile", component: ProfileComponent}
    ]
  }
];
