function shuttingYard(tokens) {
    const stack1 = []
    const stack2 = [] 
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if(/[0-9]+/.test(token)) {
            stack1.push(token)
        } else {
            if(/\)/.test(token)) {
                const excess = stack2.slice(stack2.lastIndexOf("(")+1);
                stack2.splice(token.lastIndexOf("("))
                stack1.push(...excess.reverse())
                stack2.pop()
            } else if(/\/|\*/.test(stack2.at(-1)) && /\+|\-/.test(token)) {
                if(/\//.test(stack2.at(-1))) {
                    const excess = stack2.slice(stack2.indexOf("/"));
                    stack2.splice(token.indexOf("/"))
                    stack1.push(...excess.reverse())
                    
                } else if(/\*/.test(stack2.at(-1))) {
                    const excess = stack2.slice(stack2.indexOf("*"));
                    stack2.splice(token.indexOf("*"))
                    stack1.push(...excess.reverse())
                    
                } else {
                    const excess = stack2.slice(0);
                    stack2.splice(0,stack2.length)
                    stack1.push(...excess.reverse())
                }
                stack2.push(token)
            } else {
                stack2.push(token)      
            }    
        }
    }
    if(stack2.length != 0) {
        stack1.push(...stack2.reverse())

    }
    return stack1
}

// const postFixedRegexp = /\d+\.?\d*|\+|\-|\x|\/|\(|\)/g;
// const numberRegexp = /\d+\.?\d*/;
// const operationArray = ["+","-","x","/","(",")"] 

// function infixed2postfixed(instruction) {
//     const postFixed = [];
//     const operation = [];
//     const infixed = instruction.replaceAll(/\s/g, "").match(/(\d+\.?\d*|\+|\-|\x|\/|\(|\))/g);
//     const tierlistOperation = { "+": 1, "-": 1, "x": 2, "/": 2, "(": 0 };

//     for (const token of infixed) {
//         if (!isNaN(token)) {
//             postFixed.push(token);
//         } else if (token === "(") {
//             operation.push(token);
//         } else if (token === ")") {
//             while (operation.length && operation[operation.length - 1] !== "(") {
//                 postFixed.push(operation.pop());
//             }
//             operation.pop(); // Remove the "("
//         } else {
//             while (operation.length && tierlistOperation[token] <= tierlistOperation[operation[operation.length - 1]]) {
//                 postFixed.push(operation.pop());
//             }
//             operation.push(token);
//         }
//     }

//     while (operation.length) {
//         postFixed.push(operation.pop());
//     }

//     return postFixed;
// }



function evaluatePostFix(tokens) {
    let postFixExp = tokens.slice(0);
    let stack = [];
    let p1, p2;

    for(const token of postFixExp ) {
        if (/[0-9]+/.test(token)) {
            stack.push(Number(token));
        } else if (/\+|\-|\*|\//.test(token)) {

            switch (token) {
                case "b+":
                    p2 = stack.pop();
                    p1 = stack.pop();
                    stack.push(p1 + p2);
                    break;
                case "u+":
                    p1 = stack.pop();
                    stack.push(+p1);
                    break;
                case "b-":
                    p2 = stack.pop();
                    p1 = stack.pop();
                    stack.push(p1 - p2);
                    break;
                case "u-":
                    p1 = stack.pop();
                    stack.push(-p1);
                    break;
                case "*":
                    p2 = stack.pop();
                    p1 = stack.pop();
                    stack.push(p1 * p2);
                    break;
                case "/":
                    p2 = stack.pop();
                    p1 = stack.pop();
                    stack.push(p1 / p2);
                    break;
            }
        }
    }

    return stack;
}


console.log(evaluatePostFix([ '2', '2', 'u-', 'b-' ])); // Debería imprimir el resultado correcto

// function evaluatePostFix(tokens) {
//     let postFixExp = tokens.slice(0)
//     let stack = [];
//     let p1,p2;

//     console.log(postFixExp);
//     while (postFixExp.length > 0) {
//         let token = postFixExp.shift()
//         if(/[0-9]+/.test(postFixExp[0])) {
//             stack.push(Number(token))
            
//         } else if(/\+|\-|\*|\//.test(postFixExp[0])) {
            
//             switch(postFixExp[0]) {
//                 case "+":
//                     p2 = stack.pop()
//                     p1 = stack.pop() 
//                     stack.push(p1+p2)  
//                     break;
//                 case "-":
//                     p2 = stack.pop()
//                     p1 = stack.pop() 
//                     stack.push(p1-p2)  
//                     break;
//                 case "*":
//                     p2 = stack.pop()
//                     p1 = stack.pop() 
//                     stack.push(p1*p2)  
//                     break;

//                 case "/":
//                     p2 = stack.pop()
//                     p1 = stack.pop() 
//                     stack.push(p1/p2)  
//                     break;

//             }
//             postFixExp.shift()
//         }
//     }
//     return postFixExp
// }
