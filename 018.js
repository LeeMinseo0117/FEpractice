const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, I'm ${this.name}`); // Hello, I'm Alice
  },
};

person.greet();
