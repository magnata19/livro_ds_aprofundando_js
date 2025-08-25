import { Node } from "../models/node.js";
import { defaultEquals } from "../utils/defaultEqualsFn.js";

class LinkedList {
  constructor(equalsFn = defaultEquals){
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if(this.head == null){//caso em que a list esteja vazia
      this.head = node;
    } else {//caso em que a lista tenha um elemento
      current = this.head;
      while(current.next != null) {
        current = current.next
      }
      current.next = node;
    }
    count++
  }

  insert(element, position){

  }

  getElementAt(index){
    
  }

  remove(element){

  }

  indexOf(element){

  }

  removeAt(index){
    if(index >= 0 && index < this.count) {
      let current = this.head;
      if(index === 0) {
          this.head = current.next;
      } else {
        let previous;
        for(let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      } 
      this.count--;
      return current.element;
    } 
    return undefined;
  }

  isEmpty(){
    return this.count === 0
  }

  size(){
    return this.count;
  }

  toString(){

  }
}

const list = new LinkedList();
list.push(5)
list.push(6)
console.log(list.size())
console.log(list.isEmpty())