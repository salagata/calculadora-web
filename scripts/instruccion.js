function addStack() {
    let a = popStack();
    let b = popStack();
    pushStack(sum(a,b))
}

function minusStack() {
    let a = popStack();
    let b = popStack();
    pushStack(minus(a,b))
}

function multiplyStack() {
    let a = popStack();
    let b = popStack();
    pushStack(multiply(a,b))
}

function dividedStack() {
    let a = popStack();
    let b = popStack();
    pushStack(divided(a,b))
}