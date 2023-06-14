// 9 - never

function showErrorMessage(msg: string): never {
    throw new Error(msg);
}

//showErrorMessage('Error inesperado');

// 10 - Rest Operator

function sumAll(...n: number[]) {
    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));
//console.log(sumAll("Teste"));

// 11 - Destructuring

function showProductDetails2({ name, price }: { price: number, name: string }): string {
    return `O nome do produto é ${name} e o preço é ${price}`
}

const shirt = { name: 'Camisa Polo', price: 79.9 };

console.log(showProductDetails2(shirt));
