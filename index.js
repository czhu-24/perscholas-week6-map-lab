// 1
const numbers = [2, 4, 6, 8]

console.log("#1 ", numbers.map((x) => x * 2));

// 2
const names = ["Alice", "Bob", "Charlie"];

console.log("#2 ", names.map((name) => `Hello, ${name}!`));

// 3
const people = [
   {firstName: "John", lastName: "Doe"},
   {firstName: "Anna", lastName: "Smith"},
   {firstName: "Peter", lastName: "Jones"}
];

console.log("#3 ", people.map((person) => person.lastName));

// 4
const words = ["apple", "banana", "cherry"];

console.log("#4 ", words.map(word => word.length));

// 5
const books = ["1984", "Brave New World", "Fahrenheit 451"];

console.log("#5 ", books.map(book => `<li key=${book}>${book}</li>`));

