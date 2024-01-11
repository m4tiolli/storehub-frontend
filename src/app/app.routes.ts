import { Routes } from "@angular/router";
import { HomeComponent } from "./screens/home/home.component";
import { LoginComponent } from "./screens/login/login.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
];
