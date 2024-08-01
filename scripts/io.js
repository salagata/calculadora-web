const input = document.getElementById("input");
const button = document.getElementById("send");
const output = document.getElementById("output")

button.onclick = () => {
    output.innerHTML = infixed2postfixed(input.value);
    console.log(infixed2postfixed(input.value));
}
