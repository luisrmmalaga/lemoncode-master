console.log("************** DELIVERABLE 03 *********************");

function clone(source) {
    return {...source};
}

interface Source{
    name: string,
    age: number,
    adult: boolean
}

const source: Source = {
    name: "Luis",
    age: 25,
    adult: true
}

const sourceCloned = clone(source);
console.log("Source object cloned", sourceCloned);
console.log(source === sourceCloned);
console.log(source.name, sourceCloned.name, source.name === sourceCloned.name);
console.log(source.age, sourceCloned.age, source.age === sourceCloned.age);
console.log(source.adult, sourceCloned.adult, source.adult === sourceCloned.adult);

function merge(source, target)  {
    return {...target, ...source};
}

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

console.log(a, b, merge(a, b));


