console.log("ARCHIVO 7 - ARRAY DESTRUCTURING");

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];

// Destructuring básico
const [p1, p2, p3] = dbz;
console.log(p1, p2, p3);

const returnArray = () => {
  return ["ABC", 123] as const;
};

const [letters, numbers] = returnArray();
console.log(letters, numbers);

// Tarea
console.log("TAREA");

const useState = (name: String) => {
  return [
    name,
    (nameB: String) => {
      console.log(nameB);
    },
  ] as const;
};

const [nombre, setNombre] = useState("Goku");
console.log(nombre);
setNombre("Vegeta");
