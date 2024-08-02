const paramCount = {
    "+": 2,
    "-": 2,
    "x": 2,
    "/": 2
}

function evaluatePostfix(expression) {
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];

        if (!isNaN(char)) {
            pushStack(+char);
        } else {
            switch (char) {
                case '+':
                    addStack()
                    break;
                case '-':
                    minusStack()
                    break;
                case 'x':
                    multiplyStack()
                    break;
                case '/':
                    dividedStack()
                    break;
            }
        }
    }

    return popStack();
}