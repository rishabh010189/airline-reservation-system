import { City } from "./City.model";
import { FareOptions } from "./FareOptions.model";
import { TravelClass } from "./TravelClass.model";

export class FlightDetails {
    airlines:string;
    imgHandle:string;
    departure:City;
    destination:City;
    departureDate:Date;
    departTime:string;
    arrivalTime:string;
    travelTime:string;
    stoppageCities:City[];
    numOfStoppages:number;
    fareOptions: FareOptions[];
    travelClasses : TravelClass[];
}