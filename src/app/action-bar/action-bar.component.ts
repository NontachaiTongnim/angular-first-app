import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.css'
})
export class ActionBarComponent {
  counter: number = 0
  @Input() step:number = 1
  less(){
    if(this.counter-1 >= 0){
      // this.counter = this.counter - this.step;}
      // this.numberChange.emit(this.counter);
         this.counter = this.counter -1;
  }
}
  more(){
    if(this.counter+1 <100){
      // this.counter= this.counter + this.step;}
      // this.numberChange.emit(this.counter);
      this.counter = this.counter +1;

    }
  }

  // @Output() numberChange = new EventEmitter();

 testClick(){
  console.log("test");
 }


}
