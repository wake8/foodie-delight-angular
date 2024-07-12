import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialImportsModule } from '../../../material-modules/material-imports.module';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    CommonModule,
    MaterialImportsModule
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
