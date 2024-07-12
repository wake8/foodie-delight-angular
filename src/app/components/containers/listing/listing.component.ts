import { Component, TemplateRef, ViewChild } from '@angular/core';
import { OperationsService } from '../../../services/operations.service';
import { Subscription, tap, BehaviorSubject } from 'rxjs';
import { Restaurent } from '../../../models/restaurent.model';
import { CommonModule, JsonPipe } from '@angular/common';
import { LoaderService } from '../../../services/loader.service';
import { MaterialImportsModule } from '../../../material-modules/material-imports.module';
import { RestaurentCardContainerComponent } from '../../views/restaurent-card-container/restaurent-card-container.component';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../../views/details/details.component';
import { EditDetailsComponent } from '../../views/edit-details/edit-details.component';
import { AddnewComponent } from '../../views/addnew/addnew.component';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [
    JsonPipe,
    MaterialImportsModule,
    CommonModule,
    RestaurentCardContainerComponent,
  ],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent {
  @ViewChild('deletewarning') warningTemplate!: TemplateRef<any>;

  deleteDialogRef: any;
  tempItem!: Restaurent;

  subs: Subscription = new Subscription();
  dataSource: Restaurent[] = [];
  constructor(
    private service: OperationsService, 
    public loader: LoaderService,
    private dialog: MatDialog){

  }

  ngOnInit() {
    this.service.getRestaurantsList();
    this.subs.add(
      this.service.list.pipe(tap(data=>{
        this.dataSource = data;
      })).subscribe()
    )
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  actionExecution(obj: any){
    switch (obj.value) {
      case 'view':
        this.openViewDialog(obj);
        break;
      case 'edit':
        this.editDetailsDialog(obj);
        break;
      case 'delete':
        this.deletePopup(obj)
        break
      default:
        break;
    }
  }

  deletePopup(data: any) {
    this.tempItem = data.data;
    this.deleteDialogRef =  this.dialog.open(this.warningTemplate,);
  }
  closeWarning(str: string){
    if(str == 'YES'){
      this.service.deleteItem(this.tempItem)
    }
    this.deleteDialogRef.close();
  }

  openViewDialog(data: any){
    this.dialog.open(DetailsComponent,{
      data: data.data,
      // height: '80vh'
    })
  }
  editDetailsDialog(data: any){
    let dialogRef = this.dialog.open(EditDetailsComponent,{
      data: data.data,
      // height: '80vh'
    })

    dialogRef.afterClosed().subscribe((data)=>{
      if(data){
        this.service.updateInfo(data);
      }
    })
  }

  addNewResto() {
    let dialogref = this.dialog.open(AddnewComponent);

    dialogref.afterClosed().subscribe(data=>{
      if(data){
        this.service.addNewItem(data)
      }
    })
  }

}
