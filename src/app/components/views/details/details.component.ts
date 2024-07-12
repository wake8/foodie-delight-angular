import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MaterialImportsModule } from '../../../material-modules/material-imports.module';
import { Restaurent } from '../../../models/restaurent.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    MaterialImportsModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Restaurent) {
  }
  
}
