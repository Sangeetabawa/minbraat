import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service'
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [DataService],
})
export class ResultComponent implements OnInit {
 subscription:Subscription;

  constructor(private dataService:DataService) {
    this.subscription=this.dataService.newdata$.subscribe((updatedData) => {
      console.log(updatedData)

  }
);
   }

  ngOnInit() {
   
   
  }

}
