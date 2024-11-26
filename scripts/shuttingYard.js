function shuttingYard(tokens) {
    const stack1 = [];
    const stack2 = [];
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (/[0-9]+/.test(token)) {
            stack1.push(token);
        } else {
            if (/\)/.test(token)) {
                const excess = stack2.slice(stack2.lastIndexOf("(") + 1);
                stack2.splice(token.lastIndexOf("("));
                stack1.push(...excess.reverse());
                stack2.pop();
            } else if (/\/|\*/.test(stack2.at(-1)) && /\+|\-/.test(token)) {
                if (/\//.test(stack2.at(-1))) {
                    const excess = stack2.slice(stack2.indexOf("/"));
                    stack2.splice(token.indexOf("/"));
                    stack1.push(...excess.reverse());

                } else if (/\*/.test(stack2.at(-1))) {
                    const excess = stack2.slice(stack2.indexOf("*"));
                    stack2.splice(token.indexOf("*"));
                    stack1.push(...excess.reverse());

                } else {
                    const excess = stack2.slice(0);
                    stack2.splice(0, stack2.length);
                    stack1.push(...excess.reverse());
                }
                stack2.push(token);
            } else {
                stack2.push(token);
            }
        }
    }
    if (stack2.length != 0) {
        stack1.push(...stack2.reverse());

    }
    return stack1;
}
