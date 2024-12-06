console.log("************** DELIVERABLE 02 *********************");

const numberArray2: number[] = [1, 2, 3, 4, 5];
const stringArray2: string[] = ["Hello", "World"];
const booleanArray2: boolean[] = [true];

const concat = (a: any[], b: any[]): any[] => {
    return [...a, ...b];
};

console.log("Test concat in [1, 2, 3, 4, 5]", concat(numberArray2, numberArray2));
console.log("Test concat in ['Hello', 'World']", concat(stringArray2, stringArray2));
console.log("Test concat in [true]", concat(booleanArray2, booleanArray2));
console.log("Test concat in []", concat([], []));
console.log("Test concat in number array and string array", concat(numberArray2, stringArray2));
console.log("Test concat in string array and empty array", concat(stringArray2, []));
console.log("Test concat in boolean array and number array", concat(booleanArray2, numberArray2));

const multipleConcat = (...args: any[]): any[] => {
    return args.reduce((accum, current) => [...accum, ...current], []);
};

console.log("Test multipleConcat", multipleConcat(numberArray2, numberArray2));
console.log("Test multipleConcat", multipleConcat(stringArray2, numberArray2, booleanArray2));
console.log("Test multipleConcat", multipleConcat(numberArray2, []));
console.log("Test multipleConcat", multipleConcat(numberArray2));