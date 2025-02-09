document.querySelector(".result").addEventListener("click", (e) => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    const output = document.querySelector(".output");
    e.preventDefault();
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
            break;
        case "%":
            result = num2 !== 0 ? num1 % num2 : "Error: Division by zero";
            break;
        default:
            result = "Invalid operator";
    }

    console.log(result);
    output.innerHTML = result;
});
