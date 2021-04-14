var boxes = document.querySelectorAll(".box");


window.onload = function() {
    console.log(boxes);
    document.querySelector("#btnCyan").addEventListener("click", function() {
        //alert("CYAN");
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].classList.remove("purple");
            boxes[i].classList.add("cyan");
        }
    });
}

function test() {
    alert("¡Presionaste el botón!")
}