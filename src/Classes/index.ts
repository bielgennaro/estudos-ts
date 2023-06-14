// 1 - Campos em classes

class User {
    name!: string;
    age!: number;
}

const gabriel = new User();

gabriel.name = 'Gabriel';
gabriel.age = 20;

console.log(gabriel)

// 2 - constructor

class NewUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const joao = new NewUser('João', 20);

console.log(joao)

//const pedro = new NewUser('Pedro', "20");

// 3 - campos readonly

class Car {
    name
    readonly brand2: string = "VW"

    constructor(name: string) {
        this.name = name;
    }
}

const Fusca = new Car('Fusca');

console.log(Fusca)

fusca.name = "Fusca turbo"

// 4 - herança e super

class Machine {
    name

    constructor(name: string) {
        this.name = name
    }
}

const trator = new Machine('Trator')

class killerMachine extends Machine {
    guns

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns
    }
}

const destroyer = new killerMachine('Destroyer', 4)
console.log(trator)
console.log(destroyer)

// 5 - métodos

class Dwarf {
    name

    constructor(name: string) {
        this.name = name
    }

    greeting() {
        console.log("Hey, stranger!")
    }
}

const kimmy = new Dwarf('Kimmy')

console.log(kimmy.name)

kimmy.greeting()

// 6 - this

class Truck2 {
    model
    hp

    constructor(model: string, hp: number) {
        this.model = model
        this.hp = hp
    }

    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`)
    }
}

const volvo = new Truck2("FH", 500)
volvo.showDetails()

// 7 - getters

class Person2 {
    name
    surname

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }
    get fullName() {
        return this.name + " " + this.surname
    }
}


const gabrielZirondi = new Person2("Gabriel", "Zirondi")
console.log(gabrielZirondi.fullName)

// 8 - setters

class Coords {
    x!: number;
    y!: number;

    set fillX(x: number) {
        if (x == 0) {
            return
        }

        this.x = x

        console.log("X foi preenchido")
    }

    set fillY(y: number) {
        if (y == 0) {
            return
        }

        this.y = y

        console.log("Y foi preenchido")
    }

    get getCoords() {
        return `X: ${this.x}, Y: ${this.y}`
    }
}

const myCoords = new Coords()

myCoords.fillX = 10
myCoords.fillY = 20

console.log(myCoords.getCoords)

// 9 - implements

interface showTitle2 {
    itemTitle(): string
}

class blogPost implements showTitle2 {
    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle() {
        return `O titulo do post é ${this.title}`
    }
}

const myPost = new blogPost("Ola mundo")

console.log(myPost.itemTitle())

class TestingInterface implements showTitle2 {
    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle() {
        return `O titulo é ${this.title}`
    }
}

// 10 - override de métodos

class Base {
    someMethod() {
        console.log("alguma coisa")
    }
}

class Nova extends Base {
    someMethod() {
        console.log("outra coisa")
    }
}

const myObject2 = new Nova()

myObject2.someMethod()

// 11 - visibilidade de métodos

/*
Public: visibilidade padrão, pode ser acessado por qualquer classe
Protected: só pode ser acessado pela classe que o define e suas subclasses
Private: só pode ser acessado pela classe que o define
*/

// 11.1 - public
class B {
    public x = 10
}

const bInstance = new B()

console.log(bInstance.x)

// 11.2 - protected
class E {
    protected x = 10
    protected protectedMethod() {
        console.log("protected method")
    }
}

class F extends E {
    showMethods() {
        console.log("X: " + this.x)
        this.protectedMethod()
    }
}

const fInstance = new F()
console.log(fInstance.showMethods())

// 11.3 - private
class PrivateClass {
    private name = "Gabriel"
    showName() {
        return this.name
    }

    private privateMethod() {
        console.log("private method")
    }

    showPrivateMethod() {
        return this.privateMethod()
    }
}

const pObj = new PrivateClass()
console.log(pObj.showName())
console.log(pObj.showPrivateMethod())

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
    static prop = "Teste static"
    static staticMethod() {
        console.log("Static method")
    }
}

console.log(StaticMember.prop)
StaticMember.staticMethod()

// 13 - generic classes

class Item<T, U> {
    first
    second

    constructor(first: T, second: U) {
        this.first = first
        this.second = second
    }

    get showFirst() {
        return `O first é ${this.first}`
    }

}

const newItem = new Item("Caixa", "surpresa")
console.log(newItem.showFirst)

const secondItem = new Item(10, true)
console.log(secondItem.showFirst)

// 14 - parameters properties
class parametersProperties {
    constructor(public name: string,
        private cpf: string,
        public age: number,
        private address: string
    ) {
        this.name = name
        this.cpf = cpf
        this.age = age
        this.address = address
    }
    get showCpf() {
        return `O cpf é ${this.cpf}`
    }
    get showAddress() {
        return `O endereço é ${this.address}`
    }
}

const newPerson = new parametersProperties("Gabriel", "123.456.789-10", 19, "Rua dos bobos, 0")

console.log(newPerson.name)
console.log(newPerson.age)
console.log(newPerson.showCpf)
console.log(newPerson.showAddress)

// 15 - class expressions
const myClass = class <T> {
    name

    constructor(name: T) {
        this.name = name
    }
}

const pessoa = new myClass("Gabriel")

console.log(pessoa)

// 16 - abstract classes
abstract class Abstract {
    abstract showName(): void
}

class AbstractClass extends Abstract {
    name: string;

    constructor(name: string) {
        super()
        this.name = name;
    }

    showName() {
        console.log(`O nome é ${this.name}`)
    }
}

const abstractObj = new AbstractClass("Gabriel")
abstractObj.showName()

// 17 - relacoes entre classes
class Dog {
    name!: string;

}

class Cat {
    name!: string;
}

const doguinho: Dog = new Cat()
console.log(doguinho)

