import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RestaurentCardComponent } from '../restaurent-card/restaurent-card.component';
import { CommonModule } from '@angular/common';
import { MaterialImportsModule } from '../../../material-modules/material-imports.module';
import { Restaurent } from '../../../models/restaurent.model';

@Component({
  selector: 'app-restaurent-card-container',
  standalone: true,
  imports: [
    CommonModule,
    MaterialImportsModule,
    RestaurentCardComponent,
  ],
  templateUrl: './restaurent-card-container.component.html',
  styleUrl: './restaurent-card-container.component.scss'
})
export class RestaurentCardContainerComponent {

  @Input() dataSource!: Restaurent[];
  @Output() actionEmitter: EventEmitter<any> = new EventEmitter();

  ngOnChnges() {

  }

  onAction(obj: any){
    this.actionEmitter.emit(obj);
  }

}
