const myArray = [1, 2, 3, 4, 5];

console.log("ARCHIVO 4 - ARRAYS");
console.log(myArray);
console.log(...myArray);

for (const element of myArray) {
  console.log(element + ": // Elemento del array");
}
const myArray2: number[] = [10, 20, 30, 40, 50];

console.log(myArray2);

const myArray3 = [...myArray, ...myArray2, 60, 70, 80];

console.log(myArray3);
