import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { listOfCities, passengerDropDown, travelClass } from '../common/app.constants';
import { City } from '../Model/City.model';
import { SearchCriteria } from '../Model/SearchCriterea.model';
import { TravelClass } from '../Model/TravelClass.model';

@Injectable({
  providedIn: 'root'
})
export class SearchFlightsService {

  _passengers = passengerDropDown;

  _travelClass : TravelClass[] = travelClass;

  _destinations : City[] = listOfCities;

  private _flightSearchCriteria: SearchCriteria;
  flightSearchCriteria: Subject<SearchCriteria> = new Subject<SearchCriteria>();

  constructor() { }

  getDestinations(){
    return this._destinations;
  }

  getTravelClasses() {
    return this._travelClass;
  }

  getPassengersOptions() {
     return this._passengers;
  }

  get searchCriteria() : SearchCriteria {
    return this._flightSearchCriteria;
  }

  set searchCriteria(value:SearchCriteria) {
    this._flightSearchCriteria = value;
    this.flightSearchCriteria.next(this._flightSearchCriteria)
  }

}
