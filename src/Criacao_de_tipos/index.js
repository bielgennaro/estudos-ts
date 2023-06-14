"use strict";
// 1 - generics
function showData(arg) {
    return `O dado é ${arg}`;
}
console.log(showData('testando generic'));
console.log(showData(10));
// 2 - constraints com generic
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
const myObj = {
    name: 'Camiseta',
    price: 39.90,
    isAvailable: true
};
const otherProduct = {
    name: 'Carro',
    price: 100000,
    year: 2020
};
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const meuCarro = { name: 'Fusca', wheels: 4, engine: 1 };
const minhaCaneta = { name: 'Bic', wheels: false, engine: false };
console.log(meuCarro);
console.log(minhaCaneta);
// 4 - type parameters
function getSomeKey(obj, key) {
    return `A chave ${obj[key]} tem o valor ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "16GB",
};
console.log(getSomeKey(server, 'hd'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: 'João',
    age: 20,
    hasDriverLicense: true
};
console.log(showCharName(myChar, 'name'));
// 6 - typeof type operator
const userName = "Gabriel";
const userName2 = "Gabriel";
const newTruck = {
    km: 10000,
    year: 2020,
    description: 'Caminhão novo'
};
function showKm(km) {
    return `O caminhão tem ${km} km rodados`;
}
showKm(newTruck.km);
const newCar = {
    km: 10000,
    year: 2020,
    description: 'Carro novo'
};
const someVar = 10;
const testing = "This is a Text";
// 10 - never
function showErrorMessage(msg) {
    throw new Error(msg);
}
//showErrorMessage('Error inesperado');
// 11 - Rest Operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));
//console.log(sumAll("Teste"));
// 12 - Destructuring
function showProductDetails2({ name, price }) {
    return `O nome do produto é ${name} e o preço é ${price}`;
}
const shirt = { name: 'Camisa Polo', price: 79.9 };
console.log(showProductDetails2(shirt));
