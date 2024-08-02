function addStack() {
    let b = popStack();
    let a = popStack();
    return pushStack(sum(a,b))
}

function minusStack() {
    let b = popStack();
    let a = popStack();
    return pushStack(minus(a,b))
}

function multiplyStack() {
    let b = popStack();
    let a = popStack();
    return pushStack(multiply(a,b))
}

function dividedStack() {
    let b = popStack();
    let a = popStack();
    return pushStack(divided(a,b))
}