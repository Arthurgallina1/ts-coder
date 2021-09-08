// @logarClasse
// @logarClasseSe(true)
@decorator('teste', 123)
class Eletrodom {
    constructor() {
        console.log('novo...')
    }
}
//funciona por classe é uma função
function logarClasse(construtor: Function) {
    console.log(`Logando: ${construtor}`)
}

new Eletrodom()
new Eletrodom() //logarClasse será chamada uma vez só

function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : emptyDecorator
}

function emptyDecorator(_: Function) {}

//Factory that returns the decorator
function decorator(a: string, b: number) {
    return (_construtor: Function): void => {
        console.log(a + ' ' + b)
    }
}


///


class CC {
    @notNegative
    private saldo: number
    constructor(saldo: number) {
        this.saldo = saldo
    }


    @congelar
    sacar(@paramInfo valor: number) {
         if(valor < this.saldo) {
            this.saldo -= valor 
            return true
         } else {
             return false
         }
    }

    @congelar
    getSaldo() {
        return this.saldo
    }
}

const cc = new CC(500)
cc.sacar(215)

console.log(cc.getSaldo())
// cc.getSaldo = function() {
//     return this['saldo'] + 5000
// }

cc.sacar(800)

console.log(cc.getSaldo())
//decorator freeze 
function congelar(alvo: any, nomeProp: string, descritor: PropertyDescriptor) {
    console.debug('alvo', alvo)
    console.debug('nomeProp', nomeProp)
    descritor.writable = false

}

console.log(cc.getSaldo())

//atribute decorator
function notNegative(alvo: any, nomeProp: string) {
    delete alvo[nomeProp]
    Object.defineProperty(alvo, nomeProp, {
        get: () => alvo["_" + nomeProp],
        set: (valor: any): void => {
            if(valor < 0) {
                throw new Error('saldo invalido')
            } else {
                alvo["_" + nomeProp] = valor
            }
        }
    })
}

// method decorator
function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
    console.log(`alvo: ${alvo}`)
    console.log(`nomeMetodo: ${nomeMetodo}`)
    console.log(`indiceParam: ${indiceParam}`)
}