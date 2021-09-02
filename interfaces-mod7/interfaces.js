"use strict";
function changeName(pessoa) {
    pessoa.name = 'NewName';
}
function sayHello(pessoa) {
    console.log(`Hi ${pessoa.name}`);
}
const pessoa = {
    name: 'Art',
    age: 22,
    sayHello
};
pessoa.sayHello({ name: 'teio da barca' });
// sayHello(pessoa)
// changeName(pessoa)
// sayHello({ name: 'teio', xy: true, test: 'olar' })
class Cliente {
    constructor() {
        this.name = '';
        this.sayHello = (pessoa) => {
            console.log(`Hi ${pessoa.name}`);
        };
    }
}
const myClient = new Cliente();
myClient.name = 'Han Solo';
myClient.sayHello({ name: 'Han solo ' });
let pow;
pow = (base, exp) => {
    console.log(Math.pow(base, exp));
    return Math.pow(base, exp);
};
pow(2, 5);
class RealA {
    a() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstractABD {
    a() { }
    b() { }
}
