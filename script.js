let clickCount = 0;  

function mostrarAmor() {
    clickCount++;


    if (clickCount >= 50) {
        document.querySelector(".si").disabled = true;  
        mostrarMensaje("TE AMO", "❤️");  
    } else {
        moverBoton("si");
    }
}

function mostrarDesilusion() {
    mostrarMensaje("Pensaba que me amabas", "💔");
}

function moverBoton(botonClass) {
    const boton = document.querySelector(`.${botonClass}`);
    const maxWidth = window.innerWidth - boton.offsetWidth;
    const maxHeight = window.innerHeight - boton.offsetHeight;

    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    boton.style.position = "absolute";
    boton.style.left = `${randomX}px`;
    boton.style.top = `${randomY}px`;
}

function mostrarMensaje(texto, corazon) {
    
    document.querySelector("h1").style.display = "none";
    document.querySelector(".opciones").style.display = "none";
    
    const mensaje = document.createElement("div");
    mensaje.classList.add("mensaje");

    const textoElemento = document.createElement("p");
    textoElemento.textContent = texto;

    const corazonElemento = document.createElement("span");
    corazonElemento.textContent = corazon;

    mensaje.appendChild(textoElemento);
    mensaje.appendChild(corazonElemento);

    document.body.appendChild(mensaje);  
}