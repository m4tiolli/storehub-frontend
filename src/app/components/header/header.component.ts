import { Component } from "@angular/core";
import { SidebarModule } from "primeng/sidebar";
import { ButtonModule } from "primeng/button";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [SidebarModule, ButtonModule, RouterOutlet],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  sidebarVisible: boolean = false;
  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
