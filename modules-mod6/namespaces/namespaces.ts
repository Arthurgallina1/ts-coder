namespace Areas {
    export const PI = 3.14

    //this functions are all scoped

    export function areaCinc(raio: number): number {
        return PI * Math.pow(raio, 2)
    }

    
    export namespace NestSpaceSquare {
        export function areaRetancle(base: number, height: number): number {
            return base * height
        }
    }
}

const PI = 2.99

console.log(Areas.areaCinc(20))
console.log(Areas.NestSpaceSquare.areaRetancle(10, 20))
console.log(Areas.PI)