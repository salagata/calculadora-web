const input = document.getElementById("input");
const button = document.getElementById("send");
const output = document.getElementById("output")

button.onclick = () => {
    const postFixed = infixed2postfixed(input.value);
    output.innerHTML = evaluatePostfix(postFixed);
}
