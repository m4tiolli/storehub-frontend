import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: "app-login",
  standalone: true,
  imports: [InputTextModule, FormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;
}
