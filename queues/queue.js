class Queue {
  constructor(){
    this.count = 0;
    this.lowestCount = 0;
    this.items = {}
  }

  enqueue(element){
    this.items[this.count] = element;
    this.count++
  }

  dequeue(){
    if(this.isEmpty()){
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  peek(){
    if(this.isEmpty()){
      return undefined;
    }
    return this.items[this.lowestCount]
  }

  size(){
    return this.count - this.lowestCount
  }

  isEmpty(){
    return this.count - this.lowestCount === 0
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if(this.isEmpty()){
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for(let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Camila');
console.log(queue.size());
queue.dequeue()
queue.dequeue()
queue.enqueue("Davidson")
queue.dequeue()
console.log(queue.toString());

//funcao para simular jogo da batata quente
function hotPotato(elementList, num) {
  const queue = new Queue();
  const eliminatedList = [];
  for(let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i]);
  }
  while(queue.size() > 1) {
    for(let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminatedList.push(queue.dequeue());
  }
  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  }
}
const names = ['Alice', 'Bruno', 'Carla', 'Diego', 'Eva'];
const result = hotPotato(names, 7)
result.eliminated.forEach(name => {
  console.log(`${name} was eliminated from the Hot Potato game.`);
})
console.log(`The winner is: ${result.winner}`);