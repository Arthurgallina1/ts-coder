interface IPessoa {
    name: string
    [dynamicProp: string]: any,
    age?: number
    sayHello?: (name: IPessoa) => void
}

function changeName(pessoa: IPessoa) {
    pessoa.name = 'NewName'
}

function sayHello(pessoa: IPessoa) {
    console.log(`Hi ${pessoa.name}`)
}

const pessoa: IPessoa = {
    name: 'Art',
    age: 22,
    sayHello
}

pessoa.sayHello!({ name: 'teio da barca' })
// sayHello(pessoa)
// changeName(pessoa)
// sayHello({ name: 'teio', xy: true, test: 'olar' })

class Cliente implements IPessoa {
    name: string = ''
    sayHello = (pessoa: IPessoa) => {
        console.log(`Hi ${pessoa.name}`)
    }
}


const myClient = new Cliente()

myClient.name = 'Han Solo'
myClient.sayHello({ name: 'Han solo '})


// Interface função
interface FuncaoCalculo {
    (a: number, b: number): number 
}

let pow: FuncaoCalculo

pow = (base: number, exp: number): number => {
    console.log(base ** exp)
    return base ** exp
}

pow(2, 5)


//Herithance
interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}


class RealA implements A {
    a(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}


abstract class AbstractABD implements A, B {
    a(): void {}
    b(): void {}
    abstract d(): void
}


