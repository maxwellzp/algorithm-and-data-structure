class SelectSort {
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
    let min;
    const length = this.array.length;
    for (let out = 0; out < length - 1; out++) {
      min = out;
      for (let inner = out + 1; inner < length; inner++) {
        if (this.array[inner] < this.array[min]) {
          min = inner;
          const temp = this.array[out];
          this.array[out] = this.array[min];
          this.array[min] = temp;
        }
      }
    }
  }
}

const select = new SelectSort();

select.insert(9);
select.insert(5);
select.insert(3);

select.display();
select.sort();
select.display();
