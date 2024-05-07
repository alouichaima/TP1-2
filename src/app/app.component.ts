import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first_app';
  color='pink'

  countNum=1;
  discountNum=1;

  count(){
    this.countNum++;

  }

  discount(){
    this.discountNum--;

  }

  nom='chaima';
  username='chaima_aloui';


result=0
showValue(value:any){
  this.result=value;
}

}
