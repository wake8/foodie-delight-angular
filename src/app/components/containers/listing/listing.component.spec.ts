import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingComponent } from './listing.component';
import { HttpClientModule } from '@angular/common/http';
import { OperationsService } from '../../../services/operations.service';
import { MatDialog } from '@angular/material/dialog';
import { MaterialImportsModule } from '../../../material-modules/material-imports.module';
import { LoaderService } from '../../../services/loader.service';

describe('ListingComponent', () => {
  let component: ListingComponent;
  let fixture: ComponentFixture<ListingComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingComponent, HttpClientModule, MaterialImportsModule],
      providers: [
        OperationsService,
        LoaderService,
        MatDialog
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
