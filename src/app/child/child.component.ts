import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent{

  @Input('parentData') public demo;

  @Output() public childEvent = new EventEmitter;

  fireEvent(){
    this.childEvent.emit("i am fine")
  }
}
