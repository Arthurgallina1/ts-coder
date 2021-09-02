let isCold = true

let acao
if(isCold) {
    acao = 'put casaco'
}
console.log(acao)

{
    const acao: string = 'escopo'
    console.log(acao)
}


//arrow

// function normalWithThis() {
//     console.log('this')
// }
// const normalWithThis2: any = normalWithThis.bind({ nome: 'Ana'})

// normalWithThis2()

//callback
function wait3s(callback: (dado: string) => void) {
    setTimeout(() => {
        callback('3s later...')
    }, 3000)
}

wait3s((resultado: string) =>{
    console.log(resultado)
})


//promise
function wait3sPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('3s later')
        }, 3000)
    })
}

wait3sPromise().then(data => console.log(data))
