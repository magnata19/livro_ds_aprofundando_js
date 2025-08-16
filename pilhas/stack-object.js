class Stack {
  constructor(){
    this.count = 0;
    this.items = {}
  }

  push(element) {
    this.items[this.count] = element; // item na posicao 0 recebe o primeiro elemento
    this.count++;
  }

  size(){
    return this.count;
  }

  isEmpty(){
    return this.count === 0 
  }

  pop(){
    if(this.isEmpty()){
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek(){
    return this.items[this.count - 1];
  }

  clear(){
    this.items = {};
    this.count = 0;
  }

  toString(){
    if(this.isEmpty()){
      return '';
    }
    let objString = this.items[0];
    for(let i = 1; i < this.count; i++){
      objString = `[${objString}, ${this.items[i]}]`
    }
    return objString;
  }
}

const stack = new Stack();
stack.push(1)
stack.push(1)
console.log(stack.toString())

module.exports = {Stack}