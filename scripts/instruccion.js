function addStack() {
    let a = popStack();
    let b = popStack();
    return pushStack(sum(a,b))
}

function minusStack() {
    let a = popStack();
    let b = popStack();
    return pushStack(minus(a,b))
}

function multiplyStack() {
    let a = popStack();
    let b = popStack();
    return pushStack(multiply(a,b))
}

function dividedStack() {
    let a = popStack();
    let b = popStack();
    return pushStack(divided(a,b))
}