document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
    let num1 = +document.getElementById("num1-in").value;
    let num2 = +document.getElementById("num2-in").value;

    let total = num1 + num2;

    document.getElementById("output").innerHTML = total;
}