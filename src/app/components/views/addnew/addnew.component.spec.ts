import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewComponent } from './addnew.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialImportsModule } from '../../../material-modules/material-imports.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddnewComponent', () => {
  let component: AddnewComponent;
  let fixture: ComponentFixture<AddnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddnewComponent, MaterialImportsModule, BrowserAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
