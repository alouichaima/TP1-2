import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarteVisite } from '../Models/CarteVisite';

@Component({
  selector: 'app-carte-visit',
  templateUrl: './carte-visit.component.html',
  styleUrls: ['./carte-visit.component.css']
})
export class CarteVisitComponent implements OnInit{
  @Input() data:string|undefined;
  carteVisite: CarteVisite = new CarteVisite();

  ngOnInit(): void {

  }

  onSubmit():void{
    console.log(this.carteVisite)
  }


  value=0;
  @Output() valuechanged=new EventEmitter();
  incrementValue(){
    this.value++;
    this.valuechanged.emit(this.value);
  }
}
