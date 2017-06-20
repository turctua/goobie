import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})

export class PortalComponent implements OnInit {
  value;

  public totalItems: number = 64;
  public currentPage: number = 4;
  public smallnumPages: number = 0;
 
  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }
 
  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }


  constructor(private router: Router) { }

  ngOnInit() {
  	
  }
}



