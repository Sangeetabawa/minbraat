import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any
  
  private updatedData = new BehaviorSubject<any>(5);
  newdata$ = this.updatedData.asObservable();
  constructor(private http: HttpClient) {
   
   }

   
  StateCityData(data: any) {
    // this.updatedData.next(10);
    
    this.updatedData.next(data);
    console.log(this.updatedData)
    console.log(this.newdata$)
  }

  getData() {
    return this.http.get('http://api.minebrat.com/api/v1/states', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'origin-list  '
      })
    })
  }
  getCitiesData(StateId) {
    return this.http.get('http://api.minebrat.com/api/v1/states/cities/' + StateId, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'origin-list  '
      })
    })
  }







}
