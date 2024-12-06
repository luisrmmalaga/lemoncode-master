console.log("************** DELIVERABLE 01 *********************");

const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ["Hello", "World"];
const booleanArray: boolean[] = [true];

const head = ([first, ] : any[]): any => {
    return first;
};

console.log("Test head in [1, 2, 3, 4, 5]", head(numberArray));
console.log("Test head in ['Hello', 'World']", head(stringArray));
console.log("Test head in [true]", head(booleanArray));
console.log("Test head in []", head([]));

const tail = ([first, ...rest]: any[]): any[] => {
    return rest;
};

console.log("Test tail in [1, 2, 3, 4, 5]", tail(numberArray));
console.log("Test tail in ['Hello', 'World']", tail(stringArray));
console.log("Test tail in [true]", tail(booleanArray));
console.log("Test tail in []", tail([]));


const init = (array: any[]): any[] => {
    return array.slice(0,-1);
};

console.log("Test init in [1, 2, 3, 4, 5]", init(numberArray));
console.log("Test init in ['Hello', 'World']", init(stringArray));
console.log("Test init in [true]", init(booleanArray));
console.log("Test init in []", init([]));

const last = (array: any[]): any => {
    return array.slice(-1);
};

console.log("Test last in [1, 2, 3, 4, 5]", last(numberArray));
console.log("Test last in ['Hello', 'World']", last(stringArray));
console.log("Test last in [true]", last(booleanArray));
console.log("Test last in []", last([]));