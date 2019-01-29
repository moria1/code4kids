import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson11',
  templateUrl: './lesson11.component.html',
  styleUrls: ['./lesson11.component.css']
})
export class Lesson11Component implements OnInit {
  script:string;
  leftCar:string;
  leftNumber:number;

  constructor() { }

  ngOnInit() {
    this.script = "go stright()";
    this.leftCar = "0px";
    this.leftNumber = 0;
  }

  runScript(){
   let value = this.script;//get value
    value.trim();
   if(value.startsWith("go stright(")){     
     value = value.substring(value.indexOf('(')+1);
     value = value.replace(/\D/g, "");
   }
   let distance = 10 * parseInt(value);
   this.leftNumber+=distance;
   let x = this.leftNumber.toString() +"px";
   this.leftCar = x;
  }

}
