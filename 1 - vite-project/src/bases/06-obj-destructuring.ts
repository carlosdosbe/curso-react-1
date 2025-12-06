const person = {
  name: "Carlos",
  key: "Daniel",
  age: 26,
};

console.log("ARCHIVO 6 - OBJ DESTRUCTURING");

// Destructuring básico
const { name, key, age } = person;
console.log(name, key, age);

// Destructuring con alias
const { name: firstName, key: surName } = person;
console.log(firstName, surName);

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const useContext = ({ key, name, age, rank }: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank,
  };
};

const context = useContext(person);
console.log(context);
