// Uma pilha é uma coleção ordenada de itens que obedece ao princípio
// LIFO (Last In First Out, isto é, o último a entrar é o primeiro a sair).
class Stack {
  constructor(){
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop(){
    return this.items.pop();
  }

  peek(){//retorna informacao do topo da pilha
    return this.items[this.items.length - 1];// se a pilha tiver tamanho 5, retorna o elemento 4
  }

  isEmpty () {
    return this.items.length === 0; //true se vazia, e false se tiver elementos
  }

  size(){
    return this.items.length;
  }

  clear(){
    this.items = [];
  }
}

const stack = new Stack();
stack.push(10)
stack.push(20)
console.log(stack.peek()); // 20
stack.pop()
stack.pop()
console.log(stack.isEmpty()); // true
console.log(stack.size()); // 0