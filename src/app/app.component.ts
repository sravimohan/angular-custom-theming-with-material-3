import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonsComponent } from "./buttons/buttons.component";
import { CheckboxesComponent } from "./checkboxes/checkboxes.component";
import { MatDividerModule } from '@angular/material/divider';
import { InputsComponent } from "./inputs/inputs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatDividerModule, ButtonsComponent, CheckboxesComponent, InputsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-custom-theming-with-material-3';
}
