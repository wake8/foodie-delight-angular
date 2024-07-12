import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialImportsModule } from '../../../material-modules/material-imports.module';
import { Restaurent } from '../../../models/restaurent.model';

@Component({
  selector: 'app-restaurent-card',
  standalone: true,
  imports: [
    CommonModule,
    MaterialImportsModule
  ],
  templateUrl: './restaurent-card.component.html',
  styleUrl: './restaurent-card.component.scss'
})
export class RestaurentCardComponent {

  @Input() data!: Restaurent;
  @Output() clickEmitter: EventEmitter<any> = new EventEmitter();

  ngOnChanges() {

  }

  onClick(val: string, data: Restaurent) {
    switch (val) {
      case 'view':
        this.clickEmitter.emit({value:'view', data:data})
        break;
      case 'edit':
        this.clickEmitter.emit({value:'edit', data:data})
        break;
      case 'delete':
        this.clickEmitter.emit({value:'delete', data:data})
        break;
      default:
        break;
    }
  }

}
