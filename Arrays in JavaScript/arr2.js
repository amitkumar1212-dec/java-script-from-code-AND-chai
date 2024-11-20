const marvel_heros = ["THor", "Ironman", "spider_man", ];
const dc_heros = ["superman", "flash", "Batman"];

// marvel_heros.push(dc_heros)
// console.log (marvel_heros);
// console.log(marvel_heros[3] [2]);
const tangileArray = [1,2,3 [2,3,9,8[5,1,6,9]]]
const real_another_array= tangileArray.flat(Infinity); // it basicaally remover tangilement of any array;
console.log(real_another_array);

//now learn about how to convert any datatypes to array;

console.log(Array.isArray("Amit"))
console.log(Array.from("Amit"))

let age = 18, name= 'Amit', uid= 22;
console.log(Array.of (age , name, uid))
