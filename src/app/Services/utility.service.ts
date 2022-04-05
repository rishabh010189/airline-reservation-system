import { Injectable } from '@angular/core';
import { ValueType } from '../Enums/value-type.enum';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

      /**
     * custom function to sort json array
     * @param arrayToBeSorted Array/List to be sorted
     * @param columnToBeSorted Name of colummn
     * @param columnValueType Column value type
     * @param isDescending DESC/ASC
     */
       sort(
        arrayToBeSorted: any[],
        columnToBeSorted: any,
        columnValueType: ValueType,
        isDescending: boolean
    ) {
        return arrayToBeSorted.sort((a, b) => {
            if (columnValueType === ValueType.Number) {
                return isDescending
                    ? b[columnToBeSorted] - a[columnToBeSorted]
                    : a[columnToBeSorted] - b[columnToBeSorted];
            } else if (columnValueType === ValueType.Date) {
                if (isDescending) {
                    return new Date(b[columnToBeSorted]).getTime() - new Date(a[columnToBeSorted]).getTime();
                } else {
                    return new Date(a[columnToBeSorted]).getTime() - new Date(b[columnToBeSorted]).getTime();
                }
            } else {
                let firstValue = typeof (a[columnToBeSorted]) === 'undefined' ?
                    ((isNaN(a[columnToBeSorted]) && isNaN(b[columnToBeSorted])) ? '' : -1) :
                    (isNaN(a[columnToBeSorted]) ? a[columnToBeSorted].toString().trim().toLowerCase() : a[columnToBeSorted]);

                let secondValue = typeof (b[columnToBeSorted]) === 'undefined' ?
                    ((isNaN(a[columnToBeSorted]) && isNaN(b[columnToBeSorted])) ? '' : -1) :
                    (isNaN(b[columnToBeSorted]) ? b[columnToBeSorted].toString().trim().toLowerCase() : b[columnToBeSorted]);

                if (isDescending) {
                    if (firstValue > secondValue) {
                        return -1;
                    }

                    if (firstValue < secondValue) {
                        return 1;
                    }
                } else {
                    if (firstValue < secondValue) {
                        return -1;
                    }

                    if (firstValue > secondValue) {
                        return 1;
                    }
                }
                return 0;
            }
        });
    }
}
