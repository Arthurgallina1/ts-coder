"use strict";
function echo(object) {
    return object;
}
console.log(echo('joao').length);
console.log(echo(1).length);
console.log(echo({ name: 'joao' }).length);
//echo with generics
function echoGeneric(object) {
    return object;
}
console.log(echoGeneric('joao').length);
console.log(echoGeneric(1));
console.log(echoGeneric({ name: 'joao' }).name);
// Generics available on API
const notes = [10, 9.3, 5.2];
notes.push(3);
// notes.push('5.5') // erro 
function print(args) {
    args.forEach(el => console.log(el));
}
print([1, 2, 3]);
print([1, 2, 3]);
print(['Art', 'Gal', 'Teste']);
print([
    { nome: 'art', idade: 20 },
    { nome: 'gal', idade: 20 },
]);
print([
    { nome: 'art', idade: 20 },
    { nome: 'gal', idade: 20 },
]);
// Tipo generics
const callEcho = echoGeneric;
console.log(callEcho('alguma coisa'));
// Class com generics
class BinaryOperation {
    constructor(op1, op2) {
        this.op1 = op1;
        this.op2 = op2;
    }
    execute(arg) {
        return arg;
    }
}
console.log(new BinaryOperation(1, 2).execute(123));
// Esta função recebe um conjunto de objetos que possuem uma função
// para desenhar na tela
function renderizarNaTela(entrada) {
    entrada.forEach(i => i.pintar());
}
const objetosComDesenhar = [
    { pintar: () => { }, name: '55' },
    { pintar: () => { } }
];
renderizarNaTela(objetosComDesenhar);
function AddToCache(obj, cache) {
    cache.salvar(obj);
    return cache;
}
const cache = {
    salvar: (obj) => {
        console.log(`Obj ${obj} salvo no cachce`);
    },
    id: '123'
};
AddToCache('12312', cache);
// Agora quando o HostDeCacheGenerico é usado, você deve dizer
// a dele qual é o TipoDeConteudo
function addTipedObjectToCache(obj, cache) {
    cache.salvar(obj);
    return cache;
}
///////////// generic constraints
function loggingId(arg) {
    console.log(arg.length);
    return arg;
}
function tester(arg) {
    console.log(arg);
    return arg;
}
tester('123');
