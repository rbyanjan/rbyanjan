/*
class Utility {
    //Use static keyword below to use this function throughout the app without having to create new instances of the Utility Class
    static getInputValue(elementID: string): string  {
        const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
        return inputElement.value;

        //getElementById returns a value with type HTMLElement, however as we know we are only going to pass ids of elements that are actual input elements
        //so we are adding type assertions that will treat the element it receivees as  more specific HTML Input Element type

        //if (inputElement.value === '') {
        //    return undefined;
        //}
        //else {
        //    return inputElement.value;
        //}
    }
}

commented above to use modules
*/

function getInputValue(elementID: string): string  {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    return inputElement.value;
}

function logger(message: string): void {
    console.log(message);
}

export { getInputValue as getValue, logger };