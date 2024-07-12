import { Component } from '@angular/core';
import { MaterialImportsModule } from '../../../material-modules/material-imports.module';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    MaterialImportsModule,
    RouterModule
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

  links = [
    { path:'list', displayName: 'Restaurants List'},
    { path:'add', displayName: 'Add New'},
    { path: 'info', displayName: 'Account Info'}
  ]
  activePath = 'list';

  constructor(private router: Router) {

  }

  ngOnInit(){
   this.router.events.pipe(filter(event=>event instanceof NavigationEnd)).subscribe({next:(event)=>{
    let cpath = window.location.pathname.split("/").filter(val=>!!val)[0];
    this.activePath = this.links.find(link=>link.path == cpath)?.path || '';
   }})
  }

}
