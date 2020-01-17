import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any
  
  private updatedData = new BehaviorSubject<any>(1);
  newdata$ = this.updatedData.asObservable();
  constructor(private http: HttpClient) {
    console.log(this.updatedData)
    console.log(this.newdata$)
   }

   
  StateCityData(data: any) {
   console.log(data)
    
    this.updatedData.next(data);
    
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
