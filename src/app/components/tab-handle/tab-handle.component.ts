import { Component, Input, OnInit } from '@angular/core';
import { TabContentComponent } from '../tab-content/tab-content.component';

@Component({
  selector: 'tab-handle',
  templateUrl: './tab-handle.component.html',
  styleUrls: ['./tab-handle.component.scss']
})
export class TabHandleComponent implements OnInit {
  @Input() tabTitle:string;
  @Input() tabIcon: string;
  isActive:boolean;

  constructor(tabs: TabContentComponent) { 
    tabs.addTab(this)
  }

  ngOnInit(): void {
  }

}
