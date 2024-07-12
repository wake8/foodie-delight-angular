import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuComponent } from './top-menu.component';
import { MaterialImportsModule } from '../../../material-modules/material-imports.module';
import { ActivatedRoute } from '@angular/router';

describe('TopMenuComponent', () => {
  let component: TopMenuComponent;
  let fixture: ComponentFixture<TopMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopMenuComponent, MaterialImportsModule],
      providers:[
        {
          provide: ActivatedRoute, useValue: {}
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
