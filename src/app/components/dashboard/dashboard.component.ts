import { Component, OnInit } from '@angular/core';
declare var $
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openModal(){
    $('#exampleModalCenter').modal('show')
    }
}
