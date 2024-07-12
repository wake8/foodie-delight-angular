import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialImportsModule } from '../../../material-modules/material-imports.module';
import { OperationsService } from '../../../services/operations.service';
import { NotFoundComponent } from '../../views/not-found/not-found.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ListingComponent } from '../listing/listing.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

const routes: Routes = [
  {
    path: '', component: DashboardHomeComponent,
    children: [
      {
        path: '', redirectTo:'list', pathMatch:'full'
      },
      {
        path:'list', component:ListingComponent
      },
      {path:"**", component:NotFoundComponent}
    ]
  }
];

@NgModule({
  declarations: [
    DashboardHomeComponent
  ],
  imports: [
    CommonModule,
    MaterialImportsModule,
    RouterModule.forChild(routes),

    //standalone components
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    TopMenuComponent
  ],
  exports: [
    DashboardHomeComponent
  ],
  providers:[
    OperationsService,
  ]
})
export class DashboardModule { }
