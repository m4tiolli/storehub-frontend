import { Routes } from "@angular/router";
import { HomeComponent } from "./screens/home/home.component";
import { LoginComponent } from "./screens/login/login.component";
import { CriarContaComponent } from "./screens/criar-conta/criar-conta.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "criar-conta",
    component: CriarContaComponent,
  }
];
