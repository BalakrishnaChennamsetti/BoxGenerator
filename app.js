var count = 0;
function grater() {
    var number1 = document.getElementById('num1').value;
    var color = document.getElementById('clr').value;
    number1 = Number(number1);
    for (let i = 0; i < number1; i++) {
        count++;
        var btn = document.createElement("button");
        btn.id = "btn1";
        btn.innerHTML = "new Button " + count;
        btn.style = "background-color:" + (color) + ";"
        document.body.appendChild(btn);
    }

}