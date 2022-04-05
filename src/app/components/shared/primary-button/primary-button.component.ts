import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent implements OnInit {
  @Input() textToBeDisplayed:string;
  @Input() disabled:boolean;
  @Output('onClickBtn') onClickBtn = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clkHandler(event:any){
    event.stopPropagation();
    event.preventDefault();
    this.onClickBtn.emit(true)
  }

}
