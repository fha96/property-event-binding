import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  increamentNumber: number;

  startIncrease(number){
    this.increamentNumber = number.value;
  }
}
