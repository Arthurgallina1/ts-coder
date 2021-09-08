function echo(object: any): any {
    return object
}

console.log(echo('joao').length)
console.log(echo(1).length)
console.log(echo({ name: 'joao' }).length)

//echo with generics
function echoGeneric<T>(object: T): T {
    return object
}

console.log(echoGeneric('joao').length)
console.log(echoGeneric<number>(1))
console.log(echoGeneric({ name: 'joao' }).name)

// Generics available on API
const notes: Array<number> = [10, 9.3, 5.2]
notes.push(3)
// notes.push('5.5') // erro 

function print<T>(args: T[]) {
    args.forEach(el => console.log(el))
}
print([1, 2, 3])
print<number>([1, 2, 3])
print<string>(['Art', 'Gal', 'Teste'])
print<{ nome: string, idade: number }>([
    { nome: 'art', idade: 20 },
    { nome: 'gal', idade: 20 },
])

type Person = { nome: string, idade: number }
print<Person>([
    { nome: 'art', idade: 20 },
    { nome: 'gal', idade: 20 },
])

// Tipo generics
const callEcho: <T>(data: T) => T = echoGeneric
console.log(callEcho('alguma coisa'))

// Class com generics
class BinaryOperation<T, R> {
    constructor(public op1: T, public op2: T) {}

    execute(arg: R): R {
        return arg
    }
}

console.log(new BinaryOperation(1, 2).execute(123))

interface Pintor {
    pintar: () => void
}

// Esta função recebe um conjunto de objetos que possuem uma função
// para desenhar na tela
function renderizarNaTela<T extends Pintor>(entrada: T[]) {
    entrada.forEach(i => i.pintar())
}


const objetosComDesenhar = [
    { pintar: () => {}, name: '55' },
    { pintar: () => {} }
]

renderizarNaTela(objetosComDesenhar);
// renderizarNaTela([{}, { pintar: () => {} }]) // ERRO pois não tem pintar


// Exemplo de uma função de caching
// que permite que você tenha diferentes conjuntos de tipos de entrada
// e caches.
interface HostDeCache {
    salvar: (a: any) => void;
}

  
function AddToCache<Tipo, Cache extends HostDeCache>(obj: Tipo, cache: Cache): Cache {
    cache.salvar(obj)
    return cache
}

const cache = {
    salvar: <Tipo>(obj: Tipo) => {
        console.log(`Obj ${obj} salvo no cachce`)
    },
    id: '123'
}

AddToCache('12312', cache )

// Agora usando tipo generico
interface HostDeCacheGenerico<TipoDeConteudo> {
    salvar: (a: TipoDeConteudo) => void
}
// Agora quando o HostDeCacheGenerico é usado, você deve dizer
// a dele qual é o TipoDeConteudo
function addTipedObjectToCache
<Tipo, Cache extends HostDeCacheGenerico<Tipo>>(obj: Tipo, cache: Cache): Cache {
    cache.salvar(obj)
    return cache
}

interface HasLength {
    length: number
}

///////////// generic constraints
function loggingId<Type extends HasLength>(arg: Type): Type {
    console.log(arg.length)
    return arg
}

function tester<T extends string | number>(arg: T) {
    console.log(arg)
    return arg
}

tester('123')