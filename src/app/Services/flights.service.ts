import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { allFlights } from 'src/dummy-data/flight-details.data';
import { ValueType } from '../Enums/value-type.enum';
import { FlightDetails } from '../Model/FlightDetails.model';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  _allFlights: FlightDetails[] = allFlights;
  allFlights$ = new Subject<FlightDetails[]>();

  get allFlights(){
    return this._allFlights;
  }

  set allFlights(value){
    this._allFlights = value;
    this.allFlights$.next(this._allFlights)
  }

  getAllFlightDetails(){
    return new Observable<FlightDetails[]>((subscriber) => {
      setTimeout(() => {
        subscriber.next([...this._allFlights]);
        subscriber.complete();
      }, 2000); 
    })
  }

  sortFlights(sortObject:any){
    
    return new Observable<FlightDetails[]>((subscriber) => {
      setTimeout(() => {
        const sortedList = this.utility.sort(sortObject.arrayToBeSorted, sortObject.columnToBeSorted, sortObject.columnValueType, sortObject.isDescending);
        subscriber.next([...sortedList]);
        subscriber.complete();
      }, 1000); 
    })
  }

  constructor(private utility:UtilityService) {
   }


}
