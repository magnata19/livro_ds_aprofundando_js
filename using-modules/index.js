//@ts-check
import * as area from "../common/math-module.js";
import Person from "../poo/person.js";

console.log(area.circleArea(5));
console.log(area.squareArea(4));

const person = new Person("John Doe");
console.log(person.getName);
