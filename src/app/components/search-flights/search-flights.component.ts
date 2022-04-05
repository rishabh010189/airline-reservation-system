import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InputType } from 'src/app/Enums/input-type.enum';
import { City } from 'src/app/Model/City.model';
import { SearchCriteria } from 'src/app/Model/SearchCriterea.model';
import { TravelClass } from 'src/app/Model/TravelClass.model';
import { SearchFlightsService } from 'src/app/Services/search-flights.service';

@Component({
  selector: 'search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.scss']
})
export class SearchFlightsComponent implements OnInit {

  departureOptions:City[] = [];
  inputTypeEnum:any;
  classOptions:TravelClass[] = []
  passengersOptions: any[];
  searchCriteria: SearchCriteria = new SearchCriteria();

  constructor(private flightService:SearchFlightsService, private router:Router) { }

  ngOnInit(): void {
    this.inputTypeEnum = InputType;
    this.departureOptions = this.flightService.getDestinations();
    this.classOptions = this.flightService.getTravelClasses();
    this.passengersOptions = this.flightService.getPassengersOptions();
  }

  onDepartureSelect(event:any){
    this.searchCriteria = {...this.searchCriteria, departure : event };
  }

  onDestinationSelect(event:any){
    this.searchCriteria = {...this.searchCriteria, destination : event };
  }

  onDepartureDateSelect(event:any){
    this.searchCriteria = {...this.searchCriteria, departureDate : new Date(event) };
  }

  onReturnDateSelect(event:any){
    this.searchCriteria = {...this.searchCriteria, returnDate : new Date(event) };
  }

  onTravellersSelect(event:any){
    this.searchCriteria = {...this.searchCriteria, numOftravellers : event.name };
  }

  onClassSelect(event:any){
    this.searchCriteria = {...this.searchCriteria, travellerClass : event };
  }

  handleOnClickEvent(event:any){
    this.flightService.searchCriteria = this.searchCriteria;
    this.router.navigate(['/searchResults']);
  }

  getDisabledClass():boolean{
    let isDisabled = true;
    if(this.searchCriteria && this.searchCriteria.departure && this.searchCriteria.destination
      && this.searchCriteria.departureDate && this.searchCriteria.numOftravellers
      && this.searchCriteria.travellerClass){
        isDisabled = false;
      }
      
      return isDisabled;
  }

}
