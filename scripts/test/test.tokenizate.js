
function tokenizate(string) {
    let pseudoTokens = string.split("");
    let tokens = [];
    let currentToken = "";
    for (let i = 0; i < pseudoTokens.length; i++) {
        const token = pseudoTokens[i];
        if (/[0-9]/.test(token)) { 
            currentToken += token; 
        } else { 
            if (currentToken !== "") { 
                tokens.push(currentToken); 
                currentToken = ""; 
            } 
            if (/\+|\-|\*|\/|\(|\)/.test(token)) {
                if(/\-/.test(token)) {
                    if(/\[0-9]|\)/.test(tokens.at(-1))) {
                        tokens.push("b-")
                    } else {
                        tokens.push("u-")
                    }
                } else {
                    tokens.push(token);
                }
                 
            } 
        }
    }
    if (currentToken !== "") { 
        tokens.push(currentToken); 
    }
    return tokens
}


