// 1 - tipo de objeto para funçao com interface 

interface Product {
    name: string;
    price: number;
    isAvailable: boolean;
}

function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e o preço é ${product.price}`)
    if (product.isAvailable) {
        console.log('Este produto está disponível')
    }
}

const camiseta: Product = {
    name: 'Camiseta',
    price: 39.90,
    isAvailable: true
}

showProductDetails(camiseta);

// 2 - propriedade opcional em interface 

interface User {
    name: string;
    age: number;
    role?: string;
}

function showUserInfo(user: User) {
    console.log(`Olá ${user.name}, tudo bem?, você tem ${user.age} anos`)

    if (user.role) {
        console.log(`Você é ${user.role}`)
    }
}

const u1: User = {
    name: 'João',
    age: 20,
    role: 'Admin'
}

const u2: User = {
    name: 'Maria',
    age: 25,
    role: 'Caixa'
}

// 3 - readonly

interface Car {
    brand: string;
    readonly wheels: number;
}

const fusca: Car = {
    brand: 'Volkswagen',
    wheels: 4,
    name: "",
    brand2: ""
}

// 4 - index signature

interface CoordObjects {
    [index: string]: number;

}

let coords: CoordObjects = {
    x: 1,
}

coords.y = 10;

console.log(coords);

// 5 - extending interfaces

interface Human {
    name: string;
    age: number;
}

interface SuperHuman extends Human {
    superPower: string[];
}

const Gabriel: Human = {
    name: 'Gabriel',
    age: 20
}

const Goku: SuperHuman = {
    name: 'Goku',
    age: 30,
    superPower: ['Super Sayajin', 'Kamehameha']
}

console.log(Goku);
console.log(Gabriel);

// 6 - intersection types 

interface character {
    name: string;
}

interface Gun {
    type: string;
    caliber: number;
}

type HumanWithGun = character & Gun;

const arnold: HumanWithGun = {
    name: 'Arnold',
    type: "Shotgun",
    caliber: 12
}

console.log(arnold);

// 7 - readonly array

let myArray: ReadonlyArray<string> = [
    "Maça",
    "Banana",
    "Laranja"
]
console.log(myArray);

myArray.forEach((fruit) => {
    console.log("Fruta: " + fruit);
})

myArray = myArray.map((fruit) => {
    return `Fruta: ${fruit}`
});

console.log(myArray);

// 8 - tuplas

type fiveNumbers = [number, number, number, number, number];
type myStringArray = [string, string, string];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];
const myStringArray: [string, string, string] = ['a', 'b', 'c'];

console.log(myNumberArray);
console.log(myStringArray);

// 9 = tupla com readonly

function showNumbers(numbers: readonly [number, number, number]) {
    console.log(numbers[0]);
    console.log(numbers[1]);
    console.log(numbers[2]);
}

showNumbers([1, 2, 3]);
