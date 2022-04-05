import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValueType } from 'src/app/Enums/value-type.enum';
import { SortingList } from 'src/app/Interface/sorting-list.interface';
import { FlightDetails } from 'src/app/Model/FlightDetails.model';
import { SearchCriteria } from 'src/app/Model/SearchCriterea.model';
import { FlightsService } from 'src/app/Services/flights.service';
import { SearchFlightsService } from 'src/app/Services/search-flights.service';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  flightSearchCriteria:SearchCriteria;
  allFlights:FlightDetails[];
  filteredFlights:FlightDetails[];
  isLoading:boolean;
  isSliderVisible:boolean;
  isSortOptionsVisible:boolean;

  constructor(private searchService:SearchFlightsService,
     private flightService: FlightsService,
     private router:Router) { }

  ngOnInit(): void {
    this.flightSearchCriteria = this.searchService.searchCriteria;
    if(!this.flightSearchCriteria){
      this.router.navigate(["/"])
    }
    this.isLoading = true;
    this.flightService.getAllFlightDetails().subscribe(res => {
      if(res && res.length){
        this.isLoading = false;
        this.allFlights = res;
        this.initializeScreen();
      }
    })
  }

  initializeScreen(){
    this.filteredFlights = this.getRelevantFlights(this.flightSearchCriteria);
    console.log(this.filteredFlights);
  }

  getRelevantFlights(criteria:SearchCriteria):FlightDetails[]{
    if(!criteria){
      return []
    }
    const filteredFlights = this.allFlights.filter(flight => {
      return flight.departure.code === criteria.departure.code && flight.destination.code === criteria.destination.code &&
      flight.departureDate.toLocaleDateString() === criteria.departureDate.toLocaleDateString() && flight.travelClasses.find(item => item.code === criteria.travellerClass.code)
    })
    return filteredFlights;
  }

  onSortClick(){
    this.isSortOptionsVisible = true;
    this.isSliderVisible = true;
  }

  onFilterClick(){
    this.isSortOptionsVisible = false;
    this.isSliderVisible = true;
  }

  onSliderCloseEvent(event:any){
    this.isSliderVisible = false;
  }

  onSortingAppliedEvent(event:SortingList){
    this.isSliderVisible = false;
    console.log(event);
    const filteredResults:FlightDetails[] = [];
    let sortObject = {}
    switch(event.sortValue) {
      case 'priceL2H' : {
        sortObject = {
          arrayToBeSorted : this.filteredFlights,
          columnToBeSorted : 'fareOptions',
          columnValueType : ValueType.Number,
          isDescending : false
        }
        break;
      }

      case 'priceH2L' : {

        break;
      }

      case 'durationS2L' : {
        sortObject = {
          arrayToBeSorted : this.filteredFlights,
          columnToBeSorted : 'travelTime',
          columnValueType : ValueType.String,
          isDescending : false
        }

        break;
      }

      case 'durationL2S' : {
        sortObject = {
          arrayToBeSorted : this.filteredFlights,
          columnToBeSorted : 'travelTime',
          columnValueType : ValueType.String,
          isDescending : true
        }

        break;
      }

      case 'departureE2L' : {
        sortObject = {
          arrayToBeSorted : this.filteredFlights,
          columnToBeSorted : 'departTime',
          columnValueType : ValueType.String,
          isDescending : false
        }

        break;
      }

      case 'arrivalE2L' : {
        sortObject = {
          arrayToBeSorted : this.filteredFlights,
          columnToBeSorted : 'arrivalTime',
          columnValueType : ValueType.String,
          isDescending : false
        }

        break;
      }

      case 'airlineA2Z' : {
        sortObject = {
          arrayToBeSorted : this.filteredFlights,
          columnToBeSorted : 'airlines',
          columnValueType : ValueType.String,
          isDescending : false
        }

        break;
      }

      case 'airlineZ2A' : {
        sortObject = {
          arrayToBeSorted : this.filteredFlights,
          columnToBeSorted : 'airlines',
          columnValueType : ValueType.String,
          isDescending : true
        }

        break;
      }

      default : {
        sortObject = {
          arrayToBeSorted : this.filteredFlights,
          columnToBeSorted : 'airlines',
          columnValueType : ValueType.String,
          isDescending : false
        }
      }
    }

    this.isLoading = true;
    this.flightService.sortFlights(sortObject).subscribe(
      res => {
        if(res){
          this.isLoading = false;
          this.filteredFlights = [...res]
        }
      }
    )
  }

  onFilterAppliedEvent(event:any){
    console.log(event);
  }

}
