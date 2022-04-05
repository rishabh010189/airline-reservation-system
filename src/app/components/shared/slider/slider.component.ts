import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() isVisible:boolean;
  @Input() sliderTemplateRef: TemplateRef<HTMLElement>;
  @Input() isSortingMenu:boolean;
  @Output('closedEvent') closedEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onBackClick(){
    this.isVisible = false;
    this.closedEvent.emit(false);
  }



}
