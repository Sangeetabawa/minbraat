import { Component, OnInit, Input,OnChanges ,Output ,EventEmitter} from '@angular/core';
import {DataService} from '../data.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  providers: [DataService],
})
export class CitiesComponent implements OnChanges  {
  @Input() childMessage: string;
  @Output() parentMessage=new EventEmitter();
  registerForm: FormGroup;
  city:any;
  allCity:any;
  constructor(private formBuilder: FormBuilder, private dataService: DataService,) { }

  ngOnChanges() {
    console.log(this.childMessage); 
    this.dataService.getCitiesData(this.childMessage).subscribe((result)=>{
      console.log(result)
      this.allCity=result;
})
this.registerForm = this.formBuilder.group({

  city: ["", [Validators.required]],

});

}
changeCity(){
  this.city= this.registerForm.controls['city'].value;
  console.log(this.city)
  this.parentMessage.emit(this.city);
  

}





}

  

