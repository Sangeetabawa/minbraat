import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router } from '@angular/router'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
 
})
export class ListComponent implements OnInit {
  registerForm: FormGroup;
  allState: any;
  stateId: any;
  cityData:any;
  stateName:any;
  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router:Router) { }

  ngOnInit() {
    this.dataService.getData().subscribe((result: any) => {
      console.log(result);
      this.allState = result;

    }, (error) => {
      console.log(error)
    }
    )

    this.registerForm = this.formBuilder.group({

      state: ["", [Validators.required]],

    });
  }
  get f() {
    return this.registerForm.controls;
  }
  changeState() {

    this.stateId= this.registerForm.controls['state'].value.stateId;
    this.stateName=this.registerForm.controls['state'].value.stateName;

  console.log(this.stateId)
  }

receivedValue(city){
console.log(city)
this.cityData=city;
  }

  onSubmit(){
    const obj:object={
      state:this.stateName,
      city:this.cityData
    }
    
    this.dataService.StateCityData(obj);
    if(this.dataService.newdata$.subscribe((res)=>console.log(res))){
      this.router.navigate(['/display']);

    }
   
  
  }




}


