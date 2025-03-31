// document.getElementById("header").innerHTML = "welcome";
// document.getElementById("header").style.color = "green";

// function displayName(){
//     let name = document.getElementById("name").value;
//     document.getElementById("nameheader").innerHTML = name;

// }

function add() {
    let num1 = parseFloat(document.getElementById("digit1").value);
    let num2 = parseFloat(document.getElementById("digit2").value);
    let operator = document.getElementById("operator").value;
    let answer; // Declare answer before using it

    switch (operator) {
        case "+":
            answer = num1 + num2;
            break;
        case "-":
            answer = num1 - num2;
            break;
        case "*":
            answer = num1 * num2;
            break;
        case "/":
            answer = num2 !== 0 ? num1 / num2 : "OGAH NO PUT ZERO FOR THERE"; // Prevent division by zero
            break;
        case "%":
            answer = num2 !== 0 ? num1 % num2 : "OGAH NO PUT 0 FOR THERE"; // Prevent modulus by zero
            break;
        default:
            answer = "Invalid Operator";
    }

    document.getElementById("answer").innerHTML = answer; // Ensure output is always updated
}




 