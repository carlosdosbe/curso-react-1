const person = {
  name: "Carlos",
  lastName: "Daniel",
  age: 26,
};

// Modifica la propiedad name del objeto person a "Juan"
// No se modifica el objeto original, solo se actualiza la propiedad
person.name = "Juan";

console.log("ARCHIVO 3 - OBJECT LITERAL");
console.log(person);
console.log({ ...person });

const person2 = person;

person2.name = "Pedro";
person2.lastName = "Gonzalez";
person2.age = 30;

console.log(person, person2);

// Ambo s objetos apuntan a la misma referencia en memoria

const person3 = { ...person };
console.log(person3, "person3");

const person4 = structuredClone(person);
console.log(person4, "person4");
///////////////////////////////////

interface Person {
  name: string;
  lastName: string;
  age: number;
  phone?: string;
  address?: Address;
}

interface Address {
  street: string;
}

const person5: Person = {
  name: "Ana",
  lastName: "Lopez",
  age: 28,
};

console.log(person5);
///////////////////////////////////
