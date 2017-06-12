import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})


export class ElementsComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
