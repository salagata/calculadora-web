// function tokenizate(string) {
//     const regex = /[0-9]+\.?[0-9]*/g;
//     let coincidencia;
//     const regexpIndexs = {}
//     const regexps = [
//         /[0-9]+\.?[0-9]*/g,
//         /\+/g
//     ]
//     for (const key of regexps) {
//         while ((coincidencia = key.exec(string)) !== null) {
//             regexpIndexs[coincidencia.index] = coincidencia[0];
//         } 
//     }
//     return regexpIndexs

// }

function tokenizate(string) {
    let pseudoTokens = string.split("");
    pseudoTokens.unshift(" ")
    let tokens = [];
    let counterDecimal = 0;
    let currentToken = "";
    for (let i = 0; i < pseudoTokens.length; i++) {
        const token = pseudoTokens[i];
        
        if (/[0-9]|\./.test(token)) { 
            if(/\./.test(token)) {
                if(counterDecimal == 1) {
                    throw new SyntaxError("Don't Use Double decimal dot")
                } else {
                    counterDecimal++
                }
            }
              
            currentToken += token;
        } else { 
            if (currentToken !== "") { 
                tokens.push(currentToken); 
                currentToken = "";
                counterDecimal = 0 
            } 
            if (/\+|\-|\*|\/|\(|\)/.test(token)) {
                if(/\-/.test(token)) {
                    if(/[0-9]+|\)|\s/.test(tokens.at(-1))) {
                        tokens.push("b-")
                    } else {
                        tokens.push("u-")
                    }
                } else if(/\+/.test(token)) {
                    if(/[0-9]+|\)|\s/.test(tokens.at(-1))) {
                        tokens.push("b+")
                    } else {
                        tokens.push("u+")
                    }
                } else {
                    tokens.push(token)
                }
                
            } 
        }
    }

    if (currentToken !== "") { 
        tokens.push(currentToken); 
    }
    return tokens
}
console.log(tokenizate("+2"))