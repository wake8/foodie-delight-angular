import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentCardContainerComponent } from './restaurent-card-container.component';

describe('RestaurentCardContainerComponent', () => {
  let component: RestaurentCardContainerComponent;
  let fixture: ComponentFixture<RestaurentCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurentCardContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurentCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
