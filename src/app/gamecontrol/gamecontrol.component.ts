import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent {
  refNumber: number = 0;
  incNumber: number;
  @Output() increament= new EventEmitter<{value: number}>() ;

  constructor() {

  }
  
  startEmitting(){
    this.refNumber++;
    this.incNumber = 0;
    setInterval(() => {
      this.increament.emit({value:this.incNumber++});
    }, 1000)
  }

  stopEmitting(){
    console.log('event stopped');
    clearInterval(this.refNumber);
  }


}
