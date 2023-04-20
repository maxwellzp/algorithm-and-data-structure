// FIFO - First-In-First-Out
class Queue {
  array = [];
  nItems = 0;
  front = 0;
  rear = -1;
  constructor(maxSize) {
    this.maxSize = maxSize;
  }

  insert(item) {
    if (this.rear === this.maxSize - 1) this.rear = -1;
    this.array[++this.rear] = item;
    this.nItems++;
  }

  remove() {
    const temp = this.array[this.front++];
    if (this.front === this.maxSize) this.front = 0;
    this.nItems--;
    return temp;
  }

  peekFront() {
    return this.array[this.front];
  }

  isEmpty() {
    return this.nItems === 0;
  }

  isFull() {
    return this.nItems === this.maxSize;
  }

  size() {
    this.nItems;
  }
}

const queue = new Queue(5);

if (queue.isEmpty()) {
  console.log("Queue is empty");
}

queue.insert(10);
queue.insert(20);
queue.insert(30);
queue.insert(40);

console.log(`The first element: ${queue.peekFront()}`);

queue.remove();
queue.remove();
queue.remove();

console.log(`The first element: ${queue.peekFront()}`);

queue.insert(50);
queue.insert(60);
queue.insert(70);
queue.insert(80);

while (!queue.isEmpty()) {
  console.log(`remove: ${queue.remove()}`);
}

if (queue.isEmpty()) {
  console.log("Queue is empty");
}
