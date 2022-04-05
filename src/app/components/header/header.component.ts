import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(){
    this.isMenuActive = !this.isMenuActive;
  }

}
