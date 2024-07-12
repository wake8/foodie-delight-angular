import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MaterialImportsModule } from '../../../material-modules/material-imports.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Restaurent } from '../../../models/restaurent.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-details',
  standalone: true,
  imports: [
    CommonModule,
    MaterialImportsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './edit-details.component.html',
  styleUrl: './edit-details.component.scss'
})
export class EditDetailsComponent {

  restoForm!: FormGroup;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: Restaurent, private fb: FormBuilder,
  public dialogRef: MatDialogRef<EditDetailsComponent>) {
  }

  ngOnInit(){
    
    this.restoForm = this.fb.group({
      name: [this.data.name || '', Validators.required],
      description: [this.data.description || '', Validators.required],
      location: [this.data.location || '', Validators.required],
      type: [this.data.type || '', Validators.required],
      id: [{ value: this.data.id, disabled: true }]
    });

    if(this.data){
      this.restoForm.setValue(this.data);
    }

  }
  onSubmit(): void {
    if (this.restoForm.valid) {
      const updatedRestaurent: Restaurent = this.restoForm.getRawValue();
      this.dialogRef.close(updatedRestaurent);
    }
  }
  
}
