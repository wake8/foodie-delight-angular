import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from '../../../material-modules/material-imports.module';
import { EditDetailsComponent } from './edit-details.component';

describe('EditDetailsComponent', () => {
  let component: EditDetailsComponent;
  let fixture: ComponentFixture<EditDetailsComponent>;
  let dialogRef: jasmine.SpyObj<MatDialogRef<EditDetailsComponent>>;
  let fb: FormBuilder;

  beforeEach(async () => {
    const mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
    await TestBed.configureTestingModule({
      imports: [EditDetailsComponent, MaterialImportsModule, ReactiveFormsModule, BrowserAnimationsModule],
      providers: [
        FormBuilder,
        {
          provide: MAT_DIALOG_DATA, useValue: {
            name: 'abc',
            description: 'ericks',
            location: 'mm',
            type: 'Food',
            id: null
          }
        },
        { provide: MatDialogRef, useValue: {} }
      ]

    })
      .compileComponents();
    dialogRef = TestBed.inject(MatDialogRef) as jasmine.SpyObj<MatDialogRef<EditDetailsComponent>>;
    fixture = TestBed.createComponent(EditDetailsComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize restoForm', () => {
    component.ngOnInit();
    expect(component.restoForm).toBeDefined();
    expect(component.restoForm.get('name')?.value).toBe('abc');
    expect(component.restoForm.get('description')?.value).toBe('ericks');
    expect(component.restoForm.get('location')?.value).toBe('mm');
    expect(component.restoForm.get('type')?.value).toBe('Food');
    expect(component.restoForm.get('id')?.value).toBeNull();
  });
});
