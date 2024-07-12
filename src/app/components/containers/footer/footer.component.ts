import { Component } from '@angular/core';
import { MaterialImportsModule } from '../../../material-modules/material-imports.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MaterialImportsModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
