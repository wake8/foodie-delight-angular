import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA, useValue: {
            name: 'abc',
            description: 'ericks',
            location: 'mm',
            type: 'Food',
            id: null
          }
        },
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
