import { Component, OnInit } from '@angular/core';
import { TabHandleComponent } from '../tab-handle/tab-handle.component';

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {
  tabs:TabHandleComponent[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  selectTab(tab:TabHandleComponent) {
    this.tabs.forEach((tab) => {
      tab.isActive = false;
    });
    tab.isActive = true
  }

  addTab(tab:TabHandleComponent) {
    if (this.tabs.length === 0) {
      tab.isActive = true;
    }
    this.tabs.push(tab);
  }

}
