import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputType } from 'src/app/Enums/input-type.enum';


@Component({
  selector: 't-dropdown',
  templateUrl: './t-dropdown.component.html',
  styleUrls: ['./t-dropdown.component.scss']
})
export class TDropdownComponent implements OnInit {
  @Output('onSelect') onSelect = new EventEmitter();
  @Input() options?:any[];
  @Input() labelTxt:string;
  @Input() inputType:any;
  displayedValue:string;
  inputTypeEnum:any;
  todayDate:string;


  constructor() { }

  ngOnInit(): void {
    this.inputTypeEnum = InputType;
    this.displayedValue = `Choose you ${this.labelTxt}`;
    this.todayDate = new Date().toISOString().slice(0, 10);
  }

  onChange(event:any){
    const selectedValue = event.target.value;
    switch(this.inputType) {
      case InputType.select : {
        const selectedOption = this.options!.find(item => item.code === selectedValue);
        if(selectedOption && 'state' in selectedOption){
          this.displayedValue = `(${selectedOption.code}) ${selectedOption.name}, ${selectedOption.state}, ${selectedOption.country}`
          this.onSelect.emit(selectedOption)
        }
        else if(selectedOption && 'type' in selectedOption){
          this.displayedValue = `${selectedOption.name} ${selectedOption.type}`
          this.onSelect.emit(selectedOption)
        }
        else{
          this.displayedValue = `${selectedOption.name}`
          this.onSelect.emit(selectedOption)
        }
        break;
      }

      case InputType.date : {
        this.onSelect.emit(selectedValue);
        break;
      }

      case InputType.input : {
        this.onSelect.emit(selectedValue);
        break;
      }

    }
  }


}
