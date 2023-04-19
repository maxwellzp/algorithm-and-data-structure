class BubbleSort {
  array = [];
  constructor() {}
  insert(element) {
    this.array.push(element);
  }
  display() {
    const result = [];
    for (let i = 0; i < this.array.length; i++) {
      result.push(`${this.array[i]}(${i})`);
    }
    const output = result.join(", ");
    console.log(output);
  }
  sort() {
    const length = this.array.length;
    for (let out = length - 1; out >= 1; out--) {
      for (let inner = 0; inner < out; inner++) {
        if (this.array[inner] > this.array[inner + 1]) {
          const temp = this.array[inner];
          this.array[inner] = this.array[inner + 1];
          this.array[inner + 1] = temp;
        }
      }
    }
  }
}

const buble = new BubbleSort();

buble.insert(9);
buble.insert(5);
buble.insert(3);

buble.display();
buble.sort();
buble.display();
