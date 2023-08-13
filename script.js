const pantalla = document.querySelector(".pantalla");
const btn = document.querySelectorAll(".btn");
const borrar = document.querySelector("#delete");
const multiplicar = document.getElementById("multiplicar");
const especial = document.querySelector("#especial")
const igual = document.querySelector("#igual-2")
pantalla.textContent = "0";



btn.forEach(boton => {
    boton.addEventListener("click", () => {



        if (boton === igual) {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            }
            catch { pantalla.textContent = "ERROR" }
            return;
        }

        if (boton === multiplicar) {
            pantalla.textContent += "*";
            return;
        }
        if (boton === borrar) {
            pantalla.textContent = "0";
            return
        }

        if (boton === especial) {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "ERROR") {
                pantalla.textContent = "0";
                return;
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1)
                return
            }
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "ERROR") {
            pantalla.textContent = boton.textContent;
        } else {
            pantalla.textContent += boton.textContent;
        }
    })


});

