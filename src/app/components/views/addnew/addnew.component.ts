import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialImportsModule } from '../../../material-modules/material-imports.module';
import { Restaurent } from '../../../models/restaurent.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addnew',
  standalone: true,
  imports: [
    CommonModule,
    MaterialImportsModule,
    ReactiveFormsModule
  ],
  templateUrl: './addnew.component.html',
  styleUrl: './addnew.component.scss'
})
export class AddnewComponent {
  
  restoForm!: FormGroup;

  constructor( private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddnewComponent>){

  }

  ngOnInit(){
    
    this.restoForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      type: ['', Validators.required],
      id: [{ value: null, disabled: true }]
    });


  }
  onSubmit(): void {
    if (this.restoForm.valid) {
      const updatedRestaurent: Restaurent = this.restoForm.getRawValue();

      this.dialogRef.close(updatedRestaurent);
    }
  }
  
}
