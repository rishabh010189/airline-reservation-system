import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { InputType } from 'src/app/Enums/input-type.enum';
import { SearchContolType } from 'src/app/Enums/search-control-type.enum';
import { City } from 'src/app/Model/City.model';
import { SearchCriteria } from 'src/app/Model/SearchCriterea.model';
import { SearchForm } from 'src/app/Model/SearchForm.model';
import { SearchFormControl } from 'src/app/Model/SearchFormControl.model';
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
  formControls: SearchForm;

  constructor(private flightService:SearchFlightsService, private router:Router) { }

  ngOnInit(): void {
    this.inputTypeEnum = InputType;
    this.departureOptions = this.flightService.getDestinations();
    this.classOptions = this.flightService.getTravelClasses();
    this.passengersOptions = this.flightService.getPassengersOptions();
    this.formControls = new SearchForm();
    this.initializeForm();
  }

  initializeForm(){
    this.formControls.departure = {isRequired:true, isTouched: false, isValid: false};
    this.formControls.destination = {isRequired:true, isTouched: false, isValid: false};
    this.formControls.derpartDate = {isRequired:true, isTouched: false, isValid: false};
    this.formControls.returnDate = {isRequired:false, isTouched: false, isValid: false};
    this.formControls.travelClass = {isRequired:true, isTouched: false, isValid: false};
    this.formControls.travellers = {isRequired:true, isTouched: false, isValid: false};
  }

  onDepartureSelect(event:any){
    this.searchCriteria = {...this.searchCriteria, departure : event };
    this.formControls.departure = this.updateFormControl(this.formControls.departure, SearchContolType.DEPARTURE, event);
  }

  onDestinationSelect(event:any){
    this.searchCriteria = {...this.searchCriteria, destination : event };
    this.formControls.destination = this.updateFormControl(this.formControls.destination, SearchContolType.DESTINATION, event);
  }

  onDepartureDateSelect(event:any){
    this.searchCriteria = {...this.searchCriteria, departureDate : new Date(event) };
    this.formControls.derpartDate = this.updateFormControl(this.formControls.derpartDate, SearchContolType.DEP_DATE, event);
  }

  onReturnDateSelect(event:any){
    this.searchCriteria = {...this.searchCriteria, returnDate : new Date(event) };
    this.formControls.returnDate = this.updateFormControl(this.formControls.returnDate, SearchContolType.RET_DATE, event);
  }

  onTravellersSelect(event:any){
    this.searchCriteria = {...this.searchCriteria, numOftravellers : event.name };
    this.formControls.travellers = this.updateFormControl(this.formControls.travellers, SearchContolType.TRAVELLERS, event);
  }

  onClassSelect(event:any){
    this.searchCriteria = {...this.searchCriteria, travellerClass : event };
    this.formControls.travelClass = this.updateFormControl(this.formControls.travelClass, SearchContolType.TRAVEL_CLASS, event);
  }

  handleOnClickEvent(event:any){
    this.markFieldsAsDirty();
    if(this.searchCriteria && this.searchCriteria.departure && this.searchCriteria.destination
      && this.searchCriteria.departureDate && this.searchCriteria.numOftravellers
      && this.searchCriteria.travellerClass){
        this.flightService.searchCriteria = this.searchCriteria;
        this.router.navigate(['/searchResults']);
      }

  }

  updateFormControl(formControl:SearchFormControl, type:SearchContolType, value:any) : SearchFormControl{
    switch(type){
      case SearchContolType.DEPARTURE :
      case SearchContolType.DESTINATION:
      case SearchContolType.DEP_DATE:
      case SearchContolType.TRAVELLERS:
      case SearchContolType.TRAVEL_CLASS: {
        formControl.isRequired = true;
        formControl.isTouched = true;
        value ? formControl.isValid = true : formControl.isValid = false;
        break;
      }

      default : {
        formControl.isRequired = false;
        formControl.isTouched = true;
        value ? formControl.isValid = true : formControl.isValid = false;
        break;
      }
    }

    return formControl;
  }

  markFieldsAsDirty(){
    this.formControls.departure.isTouched = true;
    this.formControls.destination.isTouched = true;
    this.formControls.derpartDate.isTouched = true;
    this.formControls.returnDate.isTouched = true;
    this.formControls.travelClass.isTouched = true;
    this.formControls.travellers.isTouched = true;
  }

}
