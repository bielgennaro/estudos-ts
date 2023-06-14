"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1 - exemplo decorator
function myDecorator() {
    console.log('iniciando decorator');
    return function (target, propertyKey, descriptor) {
        console.log('executando decorator');
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class MyClass {
    testing() {
        console.log('testing');
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "testing", null);
const myObject = new MyClass();
myObject.testing();
// 2 - multiplos decorators
function a() {
    return function (target, propertyKey, descriptor) {
        console.log('executando a');
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log('executando b');
    };
}
class multipleDecoratos {
    testing() {
        console.log('terminando execução');
    }
}
__decorate([
    b(),
    a()
], multipleDecoratos.prototype, "testing", null);
const multiple = new multipleDecoratos();
multiple.testing();
// 3 - decorator de classe
function classDecorator(constructor) {
    console.log('executando decorator de classe');
    console.log(constructor.name);
    if (constructor.name === 'User2') {
        console.log('Criando usuário...');
    }
}
let User2 = class User2 {
    name;
    constructor(name) {
        this.name = name;
    }
};
User2 = __decorate([
    classDecorator
], User2);
const Lucas = new User2('Lucas');
console.log(Lucas);
// 4 - decorator de metodo
function enumerators(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine2 {
    name;
    constructor(name) {
        this.name = name;
    }
    showName() {
        return `O nome da máquina é ${this.name}`;
    }
}
__decorate([
    enumerators(false)
], Machine2.prototype, "showName", null);
const machine2 = new Machine2('Máquina 1');
machine2.showName();
// 5 - acessor decorator
class Monster {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `O nome do monstro é ${this.name}`;
    }
    get showAge() {
        return `A idade do monstro é ${this.age}`;
    }
}
__decorate([
    enumerators(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerators(false)
], Monster.prototype, "showAge", null);
const zumbi = new Monster('Zumbi', 100);
console.log(zumbi);
// 6 - property decorator
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            value = newValue.padStart(5, '0');
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
class Id {
    id;
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], Id.prototype, "id", void 0);
const newItem2 = new Id('1');
console.log(newItem2.id);
