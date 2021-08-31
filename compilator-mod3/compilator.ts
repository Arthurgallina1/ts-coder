let canal: string = 'Gaveta'
let inscritos: number = 12312

// canal = inscritos
console.log(`canal = ${canal}`)

let nome: string = 'Pedro batata'

console.log(`nome = ${nome}`)

const soma = (a: any, b: any) => a+b


function sayHi(isMorning: boolean): string {
    let hiho: string
    if(isMorning) {
        hiho = 'good morning'
    } else {
        hiho = 'good night'
    }

    return hiho
}