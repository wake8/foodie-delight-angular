import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentCardComponent } from './restaurent-card.component';
import { MaterialImportsModule } from '../../../material-modules/material-imports.module';

xdescribe('RestaurentCardComponent', () => {
  let component: RestaurentCardComponent;
  let fixture: ComponentFixture<RestaurentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurentCardComponent, MaterialImportsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
