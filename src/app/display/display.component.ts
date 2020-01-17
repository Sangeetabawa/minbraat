import { Component, OnInit } from '@angular/core';
import {DataService}from '../data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],

})
export class DisplayComponent implements OnInit {
Data:any;
  constructor(private dataService:DataService) {
    this.dataService.newdata$.subscribe((data=>{
      console.log(data)
this.Data=data;
    }))
   }

  ngOnInit() {
  }

}
