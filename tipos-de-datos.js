console.log(typeof 42);         // number
console.log(typeof 'Veinticinco'); // string
console.log(typeof -666);       // number
console.log(typeof true);       // boolean
console.log(typeof 0);          // number
console.log(typeof '');         // string
console.log(typeof null);       // object
console.log(typeof undefined);  // undefined
console.log(typeof FALSE);      // boolean 

// Mis propios ejemplos:
console.log(typeof Symbol("id")); // symbol
console.log(typeof 3.1416);      // number
console.log(typeof "Hola mundo"); // string
console.log(typeof false);       // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object (JS considera null como un objeto)
console.log(typeof BigInt(999999999999999999999n)); // bigint (porque es un número muy grande)