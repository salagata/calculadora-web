const {abs,min,max,floor} = Math

function mSign(a) {
    if(abs(a) == a) {
        return 1
    } else {
        return -1
    }
}
class Fraction {
    constructor(intPart,fracA,fracB) {
        this.sign = mSign(intPart) * mSign(fracA) * mSign(fracB);
        this.intPart = abs(intPart);
        this.fracA = abs(fracA);
        this.fracB = abs(fracB);
        this.fixFrac()
        // this.simplifier()
    }

    fixFrac() {
        let f = math.fraction(math.number(this.fracA + this.intPart*this.fracB)/math.number(this.fracB))
        this.fracB = Number(f.d)
        if(Number(f.n) > this.fracB) {
            this.fracA = Number(f.n) % this.fracB
        } else {
            this.fracA = Number(f.n)
        }
        this.intPart = (Number(f.n) - this.fracA) / this.fracB
        //  
    }

    simplifier() {
        let mcd = euclidesMcd(this.fracA,this.fracB);
        this.fracA = this.fracA / mcd;
        this.fracB = this.fracB / mcd
    }
    parseDecimal() {
        return this.sign*this.intPart + this.sign*this.fracA/this.fracB
    }
    static parseFraction(dec) {
        let f = math.fraction(math.number(dec));
        let fracB = Number(f.d);
        let fracA;
        if(Number(f.n) > this.fracB) {
            fracA = Number(f.n) % fracB;
        } else {
            fracA = Number(f.n);
        }
        let intPart = (Number(f.n) - fracA) / fracB;
        return new Fraction(intPart,Number(f.s)*fracA,fracB)
    }
    static binaryAdd(a,b) {
        let signA = a.sign
        let intA = a.intPart
        let fracAA = a.fracA
        let fracBA = a.fracB
        let signB = b.sign
        let intB = b.intPart
        let fracAB = b.fracA
        let fracBB = b.fracB

        let resFrac;
        if(signA == 1 && signB == 1) {
            let intAns = intA + intB
            let fracBAns = fracBA*fracBB
            let fracAAns = fracAA*fracBB + fracAB*fracBA
            resFrac = new Fraction(intAns,fracAAns,fracBAns)
        } else if(signA == 1 && signB == -1) {
            let intAns = intA - intB
            let fracBAns = fracBA*fracBB
            let fracAAns = fracAA*fracBB - fracAB*fracBA
            resFrac = new Fraction(intAns,fracAAns,fracBAns)
        } else if(signA == -1 && signB == 1) {
            let intAns = -intA + intB
            let fracBAns = fracBA*fracBB
            let fracAAns = -fracAA*fracBB + fracAB*fracBA
            resFrac = new Fraction(intAns,fracAAns,fracBAns)
        } else if(signA == -1 && signB == -1) {
            let intAns = -intA - intB
            let fracBAns = fracBA*fracBB
            let fracAAns = -fracAA*fracBB - fracAB*fracBA
            resFrac = new Fraction(intAns,fracAAns,fracBAns)
        }
        return resFrac
    }
    unaryAdd() {
        return this
    }
    unarySub() {
        this.sign *= -1
        return this
    }
    static binarySub(a,b) {
        let signA = a.sign
        let intA = a.intPart
        let fracAA = a.fracA
        let fracBA = a.fracB
        let signB = -1*b.sign
        let intB = b.intPart
        let fracAB = b.fracA
        let fracBB = b.fracB

        let resFrac;
        if(signA == 1 && signB == 1) {
            let intAns = intA + intB
            let fracBAns = fracBA*fracBB
            let fracAAns = fracAA*fracBB + fracAB*fracBA
            resFrac = new Fraction(intAns,fracAAns,fracBAns)
        } else if(signA == 1 && signB == -1) {
            let intAns = intA - intB
            let fracBAns = fracBA*fracBB
            let fracAAns = fracAA*fracBB - fracAB*fracBA
            resFrac = new Fraction(intAns,fracAAns,fracBAns)
        } else if(signA == -1 && signB == 1) {
            let intAns = -intA + intB
            let fracBAns = fracBA*fracBB
            let fracAAns = -fracAA*fracBB + fracAB*fracBA
            resFrac = new Fraction(intAns,fracAAns,fracBAns)
        } else if(signA == -1 && signB == -1) {
            let intAns = -intA - intB
            let fracBAns = fracBA*fracBB
            let fracAAns = -fracAA*fracBB - fracAB*fracBA
            resFrac = new Fraction(intAns,fracAAns,fracBAns)
        }
        return resFrac
    }
    static multiplication(a,b) {
        let signA = a.sign
        let fracAA = a.fracA+a.intPart*a.fracB
        let fracBA = a.fracB
        let signB = b.sign
        let fracAB = b.fracA+b.intPart*b.fracB
        let fracBB = b.fracB

        let resFrac;
        let signAns = signA*signB
        let fracAAns = fracAA*fracAB * signAns
        let fracBAns = fracBA*fracBB
        resFrac = new Fraction(0,fracAAns,fracBAns)
        

        
        return resFrac
    }
    static division(a,b) {
        let signA = a.sign
        let fracAA = a.fracA+a.intPart*a.fracB
        let fracBA = a.fracB
        let signB = b.sign
        let fracAB = b.fracA+b.intPart*b.fracB
        let fracBB = b.fracB

        let resFrac;
        let signAns = signA*signB
        let fracAAns = fracAA*fracBB * signAns
        let fracBAns = fracBA*fracAB
        resFrac = new Fraction(0,fracAAns,fracBAns)
        

        
        return resFrac
    }
}

console.log(new Fraction(0,1,2))
console.log(new Fraction(0,1,2))
console.log(Fraction.division(new Fraction(0,1,2),new Fraction(0,1,2)))
