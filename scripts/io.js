const input = document.getElementById("input");
const button = document.getElementById("send");
const output = document.getElementById("output");
const radios = document.querySelectorAll('input[name="notation"]');
const settingsDecimal = document.getElementById("formatExtras")
let selected = "norm"
const settings = {
    numberFormat: {
        type:"norm",
        cutDecimals:0
    }
}
radios.forEach(
    (radio) => { 
        radio.addEventListener('change', (event) => { 
            selected = event.target.id
            switch (selected) {
                case "fix":
                    settingsDecimal.innerHTML = `
                <label for="fixset">
                    <h3>Fixed Comma max length:</h3>
                </label>
                <input type="number" name="name" id="fixdec" min="0" max="10" step="1" size="2" value="0" onchange="settings.numberFormat.cutDecimals = +this.value">`
                    settings.numberFormat.type = "fix"
                    break;
                case "sci":
                    settingsDecimal.innerHTML = `
                <label for="fixset">
                    <h3>Scientific Notation Mantissa length:</h3>
                    </label>
                <input type="number" name="name" id="scideg" min="0" max="10" step="1" size="2" value="0" onchange="settings.numberFormat.cutDecimals = +this.value">`
                    settings.numberFormat.type = "sci"
                    break;
                case "norm":
                    settingsDecimal.innerHTML = ``
                //     settingsDecimal.innerHTML = `
                // <h3>Normal Type:</h3>
                // <label for="norm1">
                //     Normal One:
                // </label>
                // <input type="radio" name="notation" id="norm1">
                // <br>
                // <label for="norm2">
                //     Normal Two:
                // </label>
                // <input type="radio" name="notation" id="norm2">`
                    settings.numberFormat.type = "norm"
                    break;
            }
        }); 
    });

button.onclick = () => {
    const debugMode = document.getElementById("debug").checked
    const tokens = tokenizate(input.value);
    const postfixed = shuttingYard(tokens);
    const evaluated = evaluatePostFix(postfixed)[0];
    const formatted = format(evaluated,settings)

    if(debugMode) {
        output.innerHTML = `
        <dt>Tokens:</dt>
        <dd id="tokens">${tokens.join(",")}</dd>
        <dt>PostFix:</dt>
        <dd id="postfix">${postfixed.join(",")}</dd>
        <dt>Evaluated:</dt>
        <dd id="eval">${evaluated}</dd>
        <dt>Format:</dt>
        <dd id="format">${formatted}</dd>`
    } else {
        output.innerHTML = formatted
    }
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