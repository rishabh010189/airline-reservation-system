import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { InputType } from 'src/app/Enums/input-type.enum';

@Component({
  selector: 'filter-template',
  templateUrl: './filter-template.component.html',
  styleUrls: ['./filter-template.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilterTemplateComponent implements OnInit {
  @Output('onFilterEvent') onFilterEvent = new EventEmitter();
  inputTypeEnum:any;
  minPrice:number;
  maxPrice:number;

  constructor() { }

  ngOnInit(): void {
    this.inputTypeEnum = InputType;
  }

  onMinPriceSelect(event:any){
    this.minPrice = event;
  }

  onMaxPriceSelect(event:any){
    this.maxPrice = event;
  }

  handleOnClickEvent(event:any){
    this.onFilterEvent.emit({minPrice:+this.minPrice, maxPrice:+this.maxPrice})
  }

}
