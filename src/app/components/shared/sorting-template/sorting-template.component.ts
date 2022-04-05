import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Constants } from 'src/app/common/app.constants';
import { SortingList } from 'src/app/Interface/sorting-list.interface';

@Component({
  selector: 'sorting-template',
  templateUrl: './sorting-template.component.html',
  styleUrls: ['./sorting-template.component.scss']
})
export class SortingTemplateComponent implements OnInit {

  sortingList : SortingList[];
  selectedOption: SortingList;
  @Output('onSortEvent') onSortEvent = new EventEmitter<SortingList>();

  constructor() { }

  ngOnInit(): void {
    this.sortingList = Constants.sortingOptions;
  }

  radioChangehandler(optionSelected:SortingList){
    this.selectedOption = optionSelected;
  }

  handleOnClickEvent(event:any){
    this.onSortEvent.emit(this.selectedOption);
  }

}
