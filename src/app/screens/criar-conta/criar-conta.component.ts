import { FormsModule } from "@angular/forms";
import { Component } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { CheckboxModule } from "primeng/checkbox";

@Component({
  selector: "app-criar-conta",
  standalone: true,
  imports: [InputTextModule, FormsModule, CheckboxModule],
  templateUrl: "./criar-conta.component.html",
  styleUrl: "./criar-conta.component.scss",
})
export class CriarContaComponent {
  username: string | undefined;
  checked: boolean = false;
}
