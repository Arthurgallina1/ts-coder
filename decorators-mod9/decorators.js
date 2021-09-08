"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// @logarClasse
// @logarClasseSe(true)
let Eletrodom = class Eletrodom {
    constructor() {
        console.log('novo...');
    }
};
Eletrodom = __decorate([
    decorator('teste', 123)
], Eletrodom);
//funciona por classe é uma função
function logarClasse(construtor) {
    console.log(`Logando: ${construtor}`);
}
new Eletrodom();
new Eletrodom(); //logarClasse será chamada uma vez só
function logarClasseSe(valor) {
    return valor ? logarClasse : emptyDecorator;
}
function emptyDecorator(_) { }
//Factory that returns the decorator
function decorator(a, b) {
    return (_construtor) => {
        console.log(a + ' ' + b);
    };
}
///
class CC {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor < this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    notNegative
], CC.prototype, "saldo", void 0);
__decorate([
    congelar,
    __param(0, paramInfo)
], CC.prototype, "sacar", null);
__decorate([
    congelar
], CC.prototype, "getSaldo", null);
const cc = new CC(500);
cc.sacar(215);
console.log(cc.getSaldo());
// cc.getSaldo = function() {
//     return this['saldo'] + 5000
// }
cc.sacar(800);
console.log(cc.getSaldo());
//decorator freeze 
function congelar(alvo, nomeProp, descritor) {
    console.debug('alvo', alvo);
    console.debug('nomeProp', nomeProp);
    descritor.writable = false;
}
console.log(cc.getSaldo());
//atribute decorator
function notNegative(alvo, nomeProp) {
    delete alvo[nomeProp];
    Object.defineProperty(alvo, nomeProp, {
        get: () => alvo["_" + nomeProp],
        set: (valor) => {
            if (valor < 0) {
                throw new Error('saldo invalido');
            }
            else {
                alvo["_" + nomeProp] = valor;
            }
        }
    });
}
// method decorator
function paramInfo(alvo, nomeMetodo, indiceParam) {
    console.log(`alvo: ${alvo}`);
    console.log(`nomeMetodo: ${nomeMetodo}`);
    console.log(`indiceParam: ${indiceParam}`);
}
