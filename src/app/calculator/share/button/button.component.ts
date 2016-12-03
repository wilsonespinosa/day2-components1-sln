import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() value: number;
  @Output() eventBinding = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  emittValue(){
    console.log(this.value);
    this.eventBinding.emit(this.value);
  }
}
