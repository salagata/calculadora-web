const input = document.getElementById("input");
const button = document.getElementById("send");
const output = document.getElementById("output")

button.onclick = () => {
    output.innerHTML = eval(input.value)
}