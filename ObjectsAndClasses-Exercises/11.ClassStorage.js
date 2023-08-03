class Storage {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = [
      {
        name: storage.name,
        price: storage.price,
        quantity: storage.price,
      },
    ];
    this.totalCost = this.storage.price * this.storage.quantity;
  }
  addProduct(product) {
    this.storage.push(product);
  }
  getProducts() {
    this.storage.forEach((element) => {
      console.log(JSON.stringify(element));
    });
  }
}

// let productOne = { name: "Cucamber", price: 1.5, quantity: 15 };
// let productTwo = { name: "Tomato", price: 0.9, quantity: 25 };
// let productThree = { name: "Bread", price: 1.1, quantity: 8 };
// let storage = new Storage(50);
// storage.addProduct(productOne);
// storage.addProduct(productTwo);
// storage.addProduct(productThree);
// console.log(storage.getProducts());
// console.log(storage.capacity);
// console.log(storage.totalCost);

let productOne = { name: "Tomato", price: 0.9, quantity: 19 };
let productTwo = { name: "Potato", price: 1.1, quantity: 10 };
let storage = new Storage(30);
storage.addProduct(productOne);
storage.addProduct(productTwo);
console.log(storage.totalCost);
