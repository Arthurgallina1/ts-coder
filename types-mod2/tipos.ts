const log = console.log


let myAge: number

myAge = 26

log(typeof myAge)

//array
let hobbies: string[] = ["Sports", "Cooking"]
// hobbies = [0]
log(hobbies[0])

// tuplas
let endereco: [string, number, string] = ["Av Principal", 99, "Block B"]
log(endereco)

// enum
enum Cor {
    Cinza, // 0
    Verde, // 1
    Azul = 'azul'
}

let minhaCor = Cor.Azul
log(minhaCor) // 'azul'
minhaCor = Cor.Cinza
log(minhaCor) // 0

// funções
function multiply(numA: number, numB: number): number {
    return numA * numB
}

log(multiply(123, 2))

// type function
let calculo: (a: number, b: number) => number
calculo = multiply
log(calculo(2, 50))

//objetos
let user: { name: string, idade: number } = {
    name: 'Joao',
    idade: 25
}


//Challenge
type EmployeeType = {
    supervisores: string[]
    batePonto: (hora: number) => string
}

function batePonto(hora: number): string {
    if(hora > 8) return 'horario normal'
    return 'fora do horario'
}

let employee: EmployeeType = {
    supervisores: ['art', 'gal'],
    batePonto
}

log(employee.batePonto(5), employee.batePonto(9), employee.supervisores)

// Union Types
let nota: string | number = 10
log(`Minha nota é ${nota}`)
nota = 'R$ 10'
log(`Minha nota é ${nota}`)

//never
function fail(msg: string): never {
    // while(true) {
    // }
    throw new Error(msg)
}

// log(fail('Erro!!'))

const produto = {
	name: 'Sabao',
	preco: 12,
	// promocao: this.preco - 10,
    validarProduto() {
        if(this.name.length < 1) {
            fail('Need a name')
        }
        if(this.preco < 0) {
            fail('Need a price')
        }
    }
}

log(produto.validarProduto())

// Optional null
type Contact = {
    name: string,
    tel1: string,
    tel2: string | null
}
const contato1: Contact = {
    name: 'Art',
    tel1: '123132131',
    tel2: null
}