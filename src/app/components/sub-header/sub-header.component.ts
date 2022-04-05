import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchCriteria } from 'src/app/Model/SearchCriterea.model';

@Component({
  selector: 'sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  @Input() flightSearchCriteria:SearchCriteria;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onBackClick(){
    this.router.navigate(['/'])
  }

}
