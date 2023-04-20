// LIFO - Last-In-First-Out
class Stack {
  array = [];
  top = 0;
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.top = -1;
  }

  push(element) {
    if (!this.isFull()) {
      this.array[++this.top] = element;
    } else {
      throw new Error("The stack is full.");
    }
  }

  pop() {
    if (!this.isEmpty()) {
      return this.array[this.top--];
    } else {
      throw new Error("The stack is empty.");
    }
  }

  peek() {
    return this.array[this.top];
  }

  isEmpty() {
    return this.top === -1;
  }

  isFull() {
    return this.top === this.maxSize - 1;
  }
}

const stack = new Stack(5);
if (stack.isEmpty()) {
  console.log("Stack is empty");
}
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
console.log(`Last element: ${stack.peek()}`);

if (stack.isFull()) {
  console.log("Stack is full");
}

while (!stack.isEmpty()) {
  console.log(`pop element: ${stack.pop()}`);
}

if (stack.isEmpty()) {
  console.log("Stack is empty");
}
