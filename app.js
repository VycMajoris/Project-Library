const name = "James";

const person = { first: name };

console.log(person);

const sayHelloLinting = (fName) => {
  console.log(`Hello linting, ${fName}`);
};

const x = (value1 && value2) || (value3 && value4);
