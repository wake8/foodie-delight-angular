import { Component } from '@angular/core';
import { MaterialImportsModule } from '../../../material-modules/material-imports.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MaterialImportsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
