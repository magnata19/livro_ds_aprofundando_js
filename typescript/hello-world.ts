//@ts-check
interface Person {
  name: string;
  age: number;
}

function saudar(pessoa: Person) {
  console.log(`Olá ${pessoa.name}`)
}

const pessoa: Person = {
  name: "Davidson",
  age: 25
}

const pessoa2 = {
  name: "Davidson",
  age: 25,
  phone: '123123'
}

saudar(pessoa);
saudar(pessoa2);

interface Comparable<T> {
  compareTo(obj: T): number;
}

class MyObj implements Comparable<number> {
  age: number;
  compareTo(obj: number): number {
    if (this.age < obj) {
      return 0;
    }
    return this.age > obj ? 1 : -1;
  }

}