function externalGreeting() {
    alert("Hello from the external JavaScript file!");
}

function addNumbers() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let sum = Number(num1) + Number(num2);

    alert("Sum (after type conversion) = " + sum);
}
