"use strict";
var log = console.log;
var myAge;
myAge = 26;
log(typeof myAge);
//array
var hobbies = ["Sports", "Cooking"];
// hobbies = [0]
log(hobbies[0]);
// tuplas
var endereco = ["Av Principal", 99, "Block B"];
log(endereco);
// enum
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor["Azul"] = "azul";
})(Cor || (Cor = {}));
var minhaCor = Cor.Azul;
log(minhaCor); // 'azul'
minhaCor = Cor.Cinza;
log(minhaCor); // 0
// funções
function multiply(numA, numB) {
    return numA * numB;
}
log(multiply(123, 2));
// type function
var calculo;
calculo = multiply;
log(calculo(2, 50));
//objetos
var user = {
    name: 'Joao',
    idade: 25
};
function batePonto(hora) {
    if (hora > 8)
        return 'horario normal';
    return 'fora do horario';
}
var employee = {
    supervisores: ['art', 'gal'],
    batePonto: batePonto
};
log(employee.batePonto(5), employee.batePonto(9), employee.supervisores);
// Union Types
var nota = 10;
log("Minha nota \u00E9 " + nota);
nota = 'R$ 10';
log("Minha nota \u00E9 " + nota);
//never
function fail(msg) {
    // while(true) {
    // }
    throw new Error(msg);
}
// log(fail('Erro!!'))
var produto = {
    name: 'Sabao',
    preco: 12,
    // promocao: this.preco - 10,
    validarProduto: function () {
        if (this.name.length < 1) {
            fail('Need a name');
        }
        if (this.preco < 0) {
            fail('Need a price');
        }
    }
};
log(produto.validarProduto());
var contato1 = {
    name: 'Art',
    tel1: '123132131',
    tel2: null
};
