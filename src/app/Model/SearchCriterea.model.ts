import { City } from "./City.model";
import { TravelClass } from "./TravelClass.model";

export class SearchCriteria {
    departure:City;
    destination:City;
    departureDate:Date;
    returnDate:Date;
    numOftravellers:number;
    travellerClass:TravelClass;
}