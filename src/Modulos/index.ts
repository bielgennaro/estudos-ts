// 1 - importação de arquivos
import importGreet from "./greet.js";

importGreet();

// 2 - importação de variavel
import { x } from "./variable.js";

console.log(x);

//3 - multiplass importações
import { a, b, myFunction } from "./multiple.js";

console.log(a);
console.log(b);
myFunction();

// 4 - alias para importação
import { someName as Name } from "./changeName.js";

console.log(Name);

// 5 - importação de tudo
import * as all from "./all.js";

console.log(all);

// 6 - importando tipos
import { Human } from "./myType.js";

class User implements Human {
  name
  age

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const user = new User("Gabriel", 20);

console.log(user);
