const stack = []; // [sum(4,5),minus(sum(4,5),2)]

function pushStack(dat) {
    stack.push(dat)
}

function popStack() {
    return stack.pop()
}

export {stack,pushStack,popStack}