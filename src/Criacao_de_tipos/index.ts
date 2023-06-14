// 1 - generics

function showData<T>(arg: T): string {
    return `O dado é ${arg}`
}

console.log(showData('testando generic'))
console.log(showData(10))

// 2 - constraints com generic

function showProductName<T extends { name: string }>(obj: T) {
    return `O nome do produto é ${obj.name}`
}

const myObj = {
    name: 'Camiseta',
    price: 39.90,
    isAvailable: true
}
const otherProduct = {
    name: 'Carro',
    price: 100000,
    year: 2020
}

console.log(showProductName(myObj))
console.log(showProductName(otherProduct))

// 3 - interface com generic

interface MyObject<T, U> {
    name: string;
    wheels: T,
    engine: U
}

type Carro = MyObject<number, number>
type Pen = MyObject<boolean, boolean>

const meuCarro: Carro = { name: 'Fusca', wheels: 4, engine: 1 }
const minhaCaneta: Pen = { name: 'Bic', wheels: false, engine: false }

console.log(meuCarro)
console.log(minhaCaneta)

// 4 - type parameters

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${obj[key]} tem o valor ${obj[key]}`
}

const server = {
    hd: "2TB",
    ram: "16GB",
}

console.log(getSomeKey(server, 'hd'))

// 5 - keyof type operator

type Character = { name: string, age: number, hasDriverLicense: boolean }

type C = keyof Character

function showCharName(obj: Character, name: C): string {
    return `${obj[name]}`
}

const myChar: Character = {
    name: 'João',
    age: 20,
    hasDriverLicense: true
}

console.log(showCharName(myChar, 'name'))

// 6 - typeof type operator

const userName: string = "Gabriel"

const userName2: typeof userName = "Gabriel"

// 7 - indexed access types

type Truck = { km: number, year: number, description: string }

type Km = Truck['km']

const newTruck: Truck = {
    km: 10000,
    year: 2020,
    description: 'Caminhão novo'
}

function showKm(km: Km) {
    return `O caminhão tem ${km} km rodados`
}

showKm(newTruck.km)

const newCar = {
    km: 10000,
    year: 2020,
    description: 'Carro novo'
}

// 8 - conditional types

interface A {

}

interface B extends A {

}


interface Teste {
    showName(): string;
}

type myType = B extends A ? number : string

const someVar: myType = 10
//? const someVar2: myType = '10'

type myType2 = Teste extends { showNumber(): number } ? number : boolean

// 9 - template literals type

type testA = "Text"

type CustomType = `This is a ${testA}`

const testing: CustomType = "This is a Text"
// 10 - never

function showErrorMessage(msg: string): never {
    throw new Error(msg);
}

//showErrorMessage('Error inesperado');

// 11 - Rest Operator

function sumAll(...n: number[]) {
    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));
//console.log(sumAll("Teste"));

// 12 - Destructuring

function showProductDetails2({ name, price }: { price: number, name: string }): string {
    return `O nome do produto é ${name} e o preço é ${price}`
}

const shirt = { name: 'Camisa Polo', price: 79.9 };

console.log(showProductDetails2(shirt));
