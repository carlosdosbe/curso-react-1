console.log("ARCHIVO 9 - PROMISES");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("100");
  }, 2000);

  setTimeout(() => {
    reject("400");
  }, 4000);
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error en la promesa: ", error);
  })
  .finally(() => {
    console.log("Finally se ejecuta siempre al final de una promesa");
  });
