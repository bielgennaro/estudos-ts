"use strict";
// 1 - Campos em classes
class User {
}
const gabriel = new User();
gabriel.name = 'Gabriel';
gabriel.age = 20;
console.log(gabriel);
// 2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser('João', 20);
console.log(joao);
//const pedro = new NewUser('Pedro', "20");
// 3 - campos readonly
class Car {
    constructor(name) {
        this.brand2 = "VW";
        this.name = name;
    }
}
const Fusca = new Car('Fusca');
console.log(Fusca);
fusca.name = "Fusca turbo";
// 4 - herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine('Trator');
class killerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new killerMachine('Destroyer', 4);
console.log(trator);
console.log(destroyer);
// 5 - métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey, stranger!");
    }
}
const kimmy = new Dwarf('Kimmy');
console.log(kimmy.name);
kimmy.greeting();
// 6 - this
class Truck2 {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck2("FH", 500);
volvo.showDetails();
// 7 - getters
class Person2 {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const gabrielZirondi = new Person2("Gabriel", "Zirondi");
console.log(gabrielZirondi.fullName);
// 8 - setters
class Coords {
    set fillX(x) {
        if (x == 0) {
            return;
        }
        this.x = x;
        console.log("X foi preenchido");
    }
    set fillY(y) {
        if (y == 0) {
            return;
        }
        this.y = y;
        console.log("Y foi preenchido");
    }
    get getCoords() {
        return `X: ${this.x}, Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 10;
myCoords.fillY = 20;
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do post é ${this.title}`;
    }
}
const myPost = new blogPost("Ola mundo");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo é ${this.title}`;
    }
}
// 10 - override de métodos
class Base {
    someMethod() {
        console.log("alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("outra coisa");
    }
}
const myObject2 = new Nova();
myObject2.someMethod();
// 11 - visibilidade de métodos
/*
Public: visibilidade padrão, pode ser acessado por qualquer classe
Protected: só pode ser acessado pela classe que o define e suas subclasses
Private: só pode ser acessado pela classe que o define
*/
// 11.1 - public
class B {
    constructor() {
        this.x = 10;
    }
}
const bInstance = new B();
console.log(bInstance.x);
// 11.2 - protected
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log("protected method");
    }
}
class F extends E {
    showMethods() {
        console.log("X: " + this.x);
        this.protectedMethod();
    }
}
const fInstance = new F();
console.log(fInstance.showMethods());
// 11.3 - private
class PrivateClass {
    constructor() {
        this.name = "Gabriel";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("private method");
    }
    showPrivateMethod() {
        return this.privateMethod();
    }
}
const pObj = new PrivateClass();
console.log(pObj.showName());
console.log(pObj.showPrivateMethod());
/*
Só pode ser acessado pela classe que o define

class TestingPrivate extends PrivateClass {
    myMethod() {
        this.privateMethod()
    }
}
*/
// 12 - static members
class StaticMember {
    static staticMethod() {
        console.log("Static method");
    }
}
StaticMember.prop = "Teste static";
console.log(StaticMember.prop);
StaticMember.staticMethod();
// 13 - generic classes
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é ${this.first}`;
    }
}
const newItem = new Item("Caixa", "surpresa");
console.log(newItem.showFirst);
const secondItem = new Item(10, true);
console.log(secondItem.showFirst);
// 14 - parameters properties
class parametersProperties {
    constructor(name, cpf, age, address) {
        this.name = name;
        this.cpf = cpf;
        this.age = age;
        this.address = address;
        this.name = name;
        this.cpf = cpf;
        this.age = age;
        this.address = address;
    }
    get showCpf() {
        return `O cpf é ${this.cpf}`;
    }
    get showAddress() {
        return `O endereço é ${this.address}`;
    }
}
const newPerson = new parametersProperties("Gabriel", "123.456.789-10", 19, "Rua dos bobos, 0");
console.log(newPerson.name);
console.log(newPerson.age);
console.log(newPerson.showCpf);
console.log(newPerson.showAddress);
// 15 - class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Gabriel");
console.log(pessoa);
// 16 - abstract classes
class Abstract {
}
class AbstractClass extends Abstract {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é ${this.name}`);
    }
}
const abstractObj = new AbstractClass("Gabriel");
abstractObj.showName();
// 17 - relacoes entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
