// 1 - exemplo decorator
function myDecorator() {
  console.log('iniciando decorator')
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('executando decorator')
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)
  }
}

class MyClass {
  @myDecorator()
  testing() {
    console.log('testing')
  }
}

const myObject = new MyClass()
myObject.testing()

// 2 - multiplos decorators

function a() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('executando a')
  }
}
function b() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('executando b')
  }
}

class multipleDecoratos {
  @b()
  @a()
  testing() {
    console.log('terminando execução')
  }
}

const multiple = new multipleDecoratos()
multiple.testing()

// 3 - decorator de classe
function classDecorator(constructor: Function) {
  console.log('executando decorator de classe')
  console.log(constructor.name)
  if (constructor.name === 'User2') {
    console.log('Criando usuário...')
  }
}

@classDecorator
class User2 {
  name

  constructor(name: string) {
    this.name = name
  }
}

const Lucas = new User2('Lucas')
console.log(Lucas)

// 4 - decorator de metodo
function enumerators(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value
  }
}

class Machine2 {
  name

  constructor(name: string) {
    this.name = name
  }

  @enumerators(false)
  showName() {
    return `O nome da máquina é ${this.name}`
  }
}

const machine2 = new Machine2('Máquina 1')
machine2.showName()

// 5 - acessor decorator

class Monster {
  name?
  age?

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  @enumerators(true)
  get showName() {
    return `O nome do monstro é ${this.name}`
  }

  @enumerators(false)
  get showAge() {
    return `A idade do monstro é ${this.age}`
  }
}

const zumbi = new Monster('Zumbi', 100)
console.log(zumbi)

// 6 - property decorator
function formatNumber() {
  return function (target: object, propertyKey: string) {
    let value: string

    const getter = function () {
      return value
    }

    const setter = function (newValue: string) {
      value = newValue.padStart(5, '0')
    }

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    })
  }
}

class Id {
  @formatNumber()
  id

  constructor(id: string) {
    this.id = id
  }
}

const newItem2 = new Id('1')

console.log(newItem2.id)
