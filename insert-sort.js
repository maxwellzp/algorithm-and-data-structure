class InsertSort {
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
    for (let out = 1; out < this.array.length; out++) {
      const temp = this.array[out];
      let inner = out;
      while (inner > 0 && this.array[inner - 1] >= temp) {
        this.array[inner] = this.array[inner - 1];
        --inner;
      }
      this.array[inner] = temp;
    }
  }
}

const isort = new InsertSort();

select.insert(9);
select.insert(5);
select.insert(3);

isort.display();
isort.sort();
isort.display();
