export class SearchFormControl {
    isTouched:boolean;
    isRequired:boolean;
    isValid:boolean;

    constructor(){
        this.isTouched = true;
        this.isRequired = false;
        this.isValid = false;
    }
}