class Polinomio {
    /**
     * Crea un monomio
     * @param {number} coef El coeficiente que incluye el signo
     * @param {{string:number}} parteliteral La parte literal de forma "variable":exponente
     */
    constructor(coef, parteliteral) {
        this.coeficiente = coef
        this.parteliteral = parteliteral
    }
}
class Monomio {
    /**
     * Crea un monomio
     * @param {number} coef El coeficiente que incluye el signo
     * @param {{string:number}} parteliteral La parte literal de forma "variable":exponente
     */
    constructor(coef, parteliteral) {
        this.coeficiente = coef
        this.parteliteral = parteliteral
    }
}
let miMonomio = new Monomio(-3,{"x":2})

console.log(miMonomio)

class CustomNumber {
    constructor() {}
}
function sum(numbers) {
    
}