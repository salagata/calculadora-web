const postFixedRegexp = /\d+\.?\d*|\+|\-|\x|\/|\(|\)/g;
const numberRegexp = /\d+\.?\d*/;
const operationArray = ["+","-","x","/","(",")"] 

function infixed2postfixed(instruction) {
    const postFixed = [];
    const operation = [];
    const infixed = instruction.replaceAll(/\s/g, "").match(/(\d+\.?\d*|\+|\-|\x|\/|\(|\))/g);
    const tierlistOperation = { "+": 1, "-": 1, "x": 2, "/": 2, "(": 0 };

    for (const token of infixed) {
        if (!isNaN(token)) {
            postFixed.push(token);
        } else if (token === "(") {
            operation.push(token);
        } else if (token === ")") {
            while (operation.length && operation[operation.length - 1] !== "(") {
                postFixed.push(operation.pop());
            }
            operation.pop(); // Remove the "("
        } else {
            while (operation.length && tierlistOperation[token] <= tierlistOperation[operation[operation.length - 1]]) {
                postFixed.push(operation.pop());
            }
            operation.push(token);
        }
    }

    while (operation.length) {
        postFixed.push(operation.pop());
    }

    return postFixed;
}

