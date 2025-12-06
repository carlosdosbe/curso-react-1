console.log("ARCHIVO 5 - FUNCTIONS");

function greet(name: string): string {
  return `Hello, ${name}`;
}

const message = greet("Carlos");
console.log(message);

const greetArrow = (name: string): string => {
  return `Hi, ${name}`;
};

const messageArrow = greetArrow("Ana");
console.log(messageArrow);

const greetArrow2 = (name: string): string => `Hey, ${name}`;

const messageArrow2 = greetArrow2("Pedro");
console.log(messageArrow2);

const getUser = () => ({
  uid: "ABC123",
  username: "carlosd",
});

const myNumbers: number[] = [1, 2, 3, 4, 5];

myNumbers.forEach((n) => console.log(n));

myNumbers.forEach(console.log);

console.log(getUser());
