const input = document.getElementById("input");
const button = document.getElementById("send");
const output = document.getElementById("output");

const tokenPost = document.getElementById("tokens");
const postFixPost = document.getElementById("postfix");
const evalPost = document.getElementById("eval");
const formatPost = document.getElementById("format");


button.onclick = () => {
    const tokens = tokenizate(input.value);
    const postfixed = infix2postfix(tokens);
    const evaluated = evaluatePostFix(postfixed)[0];
    const formatted = format(evaluated,{})
    tokenPost.textContent = tokens.join(",");
    postFixPost.textContent = postfixed.join(",");
    evalPost.textContent = evaluated;
    formatted.textContent = formatted;
}


function isPrime(number,array) {
    for (let i = 0; i < array.length / 2; i++) {
      const prime = array[i];
      if(number % prime == 0) {
        return false
      }
    }
    return true
}
  
function generatePrimes(max) {
    const primes = [ 3 ];
    let j = 0
    for (let i = 6; i < max; i+= 2) {
        let pseudoPrime = i - primes[j]
        if (isPrime(pseudoPrime,primes)) {
            while(isPrime(pseudoPrime,primes)) {
                j++
                pseudoPrime = i - primes[j]
            }
        }
        
    }
    return [2,...primes]
}  

// console.log(generatePrimes(18))
// 6 - 3 = 3 V
// 8 - 3 = 5 V
// 10 - 3 = 7 V
// 12 - 3 = 9 X
// 12 - 5 = 7 V
// 14 - 3 = 11 V
// 16 - 3 = 13 V
// 18 - 3 = 15