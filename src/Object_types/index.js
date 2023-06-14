"use strict";
// 1 - tipo de objeto para funçao com interface 
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e o preço é ${product.price}`);
    if (product.isAvailable) {
        console.log('Este produto está disponível');
    }
}
const camiseta = {
    name: 'Camiseta',
    price: 39.90,
    isAvailable: true
};
showProductDetails(camiseta);
function showUserInfo(user) {
    console.log(`Olá ${user.name}, tudo bem?, você tem ${user.age} anos`);
    if (user.role) {
        console.log(`Você é ${user.role}`);
    }
}
const u1 = {
    name: 'João',
    age: 20,
    role: 'Admin'
};
const u2 = {
    name: 'Maria',
    age: 25,
    role: 'Caixa'
};
const fusca = {
    brand: 'Volkswagen',
    wheels: 4,
    name: "",
    brand2: ""
};
let coords = {
    x: 1,
};
coords.y = 10;
console.log(coords);
const Gabriel = {
    name: 'Gabriel',
    age: 20
};
const Goku = {
    name: 'Goku',
    age: 30,
    superPower: ['Super Sayajin', 'Kamehameha']
};
console.log(Goku);
console.log(Gabriel);
const arnold = {
    name: 'Arnold',
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
// 7 - readonly array
let myArray = [
    "Maça",
    "Banana",
    "Laranja"
];
console.log(myArray);
myArray.forEach((fruit) => {
    console.log("Fruta: " + fruit);
});
myArray = myArray.map((fruit) => {
    return `Fruta: ${fruit}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
const myStringArray = ['a', 'b', 'c'];
console.log(myNumberArray);
console.log(myStringArray);
// 9 = tupla com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
    console.log(numbers[2]);
}
showNumbers([1, 2, 3]);
