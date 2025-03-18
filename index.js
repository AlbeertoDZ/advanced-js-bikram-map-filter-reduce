//RESUELVE LOS EJERCICIOS AQUI
//          ### Map ###
// 1.-Ejercicio 1. Dado el array numbers crear una función llamada "elevados" que sea el resultado de elevar cada número a si mismo.
// let numeroElevado = n => n ** n;

// let elevados = numbers.map(numeroElevado);
// console.log(elevados);

const numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados() {
  return numbers.map((num) => Math.pow(num, num));
}
console.log(elevados(numbers));

// 2.- Ejercicio 2. Dado el array foodList, generar un segundo array llamado result2 que consiga generar de salida el siguiente resultado
/* ['Como soy de Italia, amo comer Pizza',
'Como soy de Japón, amo comer Ramen',
'Como soy de Valencia, amo comer Paella',
'Aunque no como carne, el Entrecot es sabroso']`
*/
// const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
// const lugares = ["Italia", "Japon", "Valencia"];

// const result2 = foodList.map((comida, index) => {
//   if (index < lugares.length) {
//     return `Como soy de ${lugares[index]}, amo comer ${comida}`;
//   } else {
//     return `Aunque no soy de un lugar asociado, el ${comida} es sabroso`;
//   }
// });
// console.log(result2);

const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
const result2 = [];
foodList.forEach((comida) => {
  if (comida.includes("Pizza")) {
    result2.push("Como soy de Italia, amo comer Pizza");
  } else if (comida.includes("Ramen")) {
    result2.push("Como soy de Japón, amo comer Ramen");
  } else if (comida.includes("Paella")) {
    result2.push("Como soy de Valencia, amo comer Paella");
  } else if (comida.includes("Entrecot")) {
    result2.push("Aunque no como carne, el Entrecot es sabroso");
  }
});

// 3. Ejercicio 3. Dado el array staff, generar un segundo array staffDescriptions con el siguiente resultado [
// 'Pepe es The Boss y le gusta leer y ver pelis',
// 'Ana es becaria y le gusta nadar y bailar',
// 'Luis es programador y le gusta dormir y comprar',
// 'Carlos es secretario y le gusta futbol y queso'

const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

const staffDescriptions = staff.map(
  (x) =>
    x.name +
    " es " +
    x.role +
    " y le gusta " +
    x.hobbies[0] +
    " y " +
    x.hobbies[1]
);

// const staffDescriptions = staff.map(function (x) {
//   return [
//     x.name +
//       " es " +
//       x.role +
//       " y le gusta " +
//       x.hobbies[0] +
//       " y " +
//       x.hobbies[1]
//   ];
// });

let result3 = staffDescriptions;
console.log(result3);

//            ### Filter ###
// 4. Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter((impares) => impares % 2 != 0);
console.log(result4);

// 5. Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo

// ['Que rico Tempeh me voy a comer!',
//   'Que rica Tofu burguer me voy a comer!']

const foodList2 = [
  {
    name: "Tempeh",
    isVeggie: true,
  },
  {
    name: "Cheesbacon burguer",
    isVeggie: false,
  },
  {
    name: "Tofu burguer",
    isVeggie: true,
  },
  {
    name: "Entrecot",
    isVeggie: false,
  },
];
//.log(foodList2[0].name);

const result5 = foodList2
  .filter((vegan) => vegan.isVeggie == true)
  .map((x) =>
    x.name == "Tempeh"
      ? "Que rico " + x.name + " me voy a comer!"
      : "Que rica " + x.name + " me voy a comer!"
  );
console.log(result5);

// 6. Dado el array inventory, devolver un array result 6 con los nombres de los elementos que valgan más de 300 euros

const inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a Cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];

/*  RESULTADO
  [
    'TV Samsung,',
    'Viaje a Cancún'
  ]
*/

const result6 = inventory
  .filter((precio) => precio.price > 300)
  .map((tele) => tele.name);

console.log(result6);
//            ### Reduce ###

// 7. Dado el array numeros3, obten la multiplicación de todos los elementos del array en la variable result7

const numeros3 = [39, 2, 4, 25, 62];

let result7 = numeros3.reduce((anterior, actual) => anterior * actual);

console.log(result7);

// 8. Concatena todos los elementos del array con reduce para que devuelva una sola frase en la variable result8

const sentenceElements = [
  "Me",
  "llamo",
  "Alberto",
  "y",
  "quiero",
  "sentir",
  "la",
  "fuerza",
  "con",
  "javascript",
];

const result8 = sentenceElements.reduce((acc, actual) => acc + " " + actual);
console.log(result8);

// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

// 9. Obtener el monto total de los elementos que pertenecen a catergory "code" en la variable result9

const books = [
  {
    name: " JS for dummies",
    author: "Emily A. Vander Veer",
    price: 20,
    category: "code",
  },
  {
    name: "Don Quijote de la Mancha",
    author: "Cervantes",
    price: 14,
    category: "novel",
  },
  {
    name: "Juego de tronos",
    author: "George R. Martin",
    price: 32,
    category: "Fantasy",
  },
  {
    name: "javascript the good parts",
    author: "Douglas Crockford",
    price: 40,
    category: "code",
  },
];
// Resultado --> 60

const result9 = books
  .filter((categoria) => categoria.category == "code")
  .reduce((acc, actual) => acc.price + actual.price);

console.log(result9);
