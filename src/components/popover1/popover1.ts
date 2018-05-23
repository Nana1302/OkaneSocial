import { Component } from '@angular/core';

@Component({
  selector: 'popover1',
  templateUrl: 'popover1.html'
})
export class Popover1Component {

  text: string;

  constructor() {
    console.log('Hello Popover1Component Component');
    this.text;
  }

}
