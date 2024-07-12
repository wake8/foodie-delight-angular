import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialImportsModule } from '../../../material-modules/material-imports.module';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MaterialImportsModule
  ],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent {

}
