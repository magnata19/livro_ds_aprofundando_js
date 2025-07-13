export default class Person {
  constructor(name) {
    this._name = name;
  }

  get getName() {
    return this._name;
  }

  set setName(value) {
    this._name = value;
  }
}

let person = new Person("John Doe");
console.log(person.getName);
person.setName = "Jane Doe";
console.log(person.getName);
