let posicion = -200; //Inicializa la posición del primer círculo en -200 píxeles desde la parte superior de la ventana
let posicion1 = -250;
let posicion2 = -150;
let posicion3 = -300;
var contador = 0; // Inicializa el contador del puntaje del jugador
let intervalo; // Declara una variable para almacenar el intervalo de tiempo


function terminar() {
    var reproductor = document.getElementById('audio'); // Obtiene el elemento de audio del documento
    reproductor.addEventListener('ended', function () { // Añade un evento para cuando la reproducción del audio termine
        score(); // Llama a la función "score" cuando la reproducción del audio termine
    });
}

function reinicio() {
    // Reinicia las posiciones de los círculos a sus valores iniciales
    posicion = -200;
    posicion1 = -250;
    posicion2 = -150;
    posicion3 = -300;
}
// Se define una función para generar un número entero aleatorio dentro de un rango dado
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Se define una función para generar una velocidad aleatoria de movimiento
function velocidad() {
    var min = 10;
    var max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Se definen funciones para mover cada círculo
// Estas funciones actualizan la posición del círculo y verifican si ha salido de la ventana
function nota1() {
    posicion += 8;
    document.querySelector(".circulo1").style.top = posicion + 'px';
    if (posicion >= (window.innerHeight)) {
        posicion = getRandomInt(200, 700) * -1
        document.querySelector(".circulo1").style.visibility = 'visible';
        terminar();
    }
}

function nota2() {
    posicion1 += 8;
    document.querySelector(".circulo2").style.top = posicion1 + 'px';
    if (posicion1 >= (window.innerHeight)) {
        posicion1 = getRandomInt(200, 700) * -1;
        document.querySelector(".circulo2").style.visibility = 'visible';
        terminar();
    }
}

function nota3() {
    posicion2 += 8;
    document.querySelector(".circulo3").style.top = posicion2 + 'px';
    if (posicion2 >= (window.innerHeight)) {
        posicion2 = getRandomInt(200, 700) * -1;
        document.querySelector(".circulo3").style.visibility = 'visible';
        terminar();
    }
}

function nota4() {
    posicion3 += 8;
    document.querySelector(".circulo4").style.top = posicion3 + 'px';
    if (posicion3 >= (window.innerHeight)) {
        posicion3 = getRandomInt(200, 700) * - 1;
        document.querySelector(".circulo4").style.visibility = 'visible';
        terminar();
    }
}
// Se define una función para iniciar el movimiento de los círculos a intervalos regulares
function start() {

    intervalo = setInterval(function () {
        nota1();
        nota2();
        nota3();
        nota4();
    }, 40);
}
// Se define una función para detener el movimiento de los círculos
function detenerMovimiento() {
    clearInterval(intervalo);
}
// Se define una función para reproducir un sonido
function sonido(){
    var pin = document.getElementById('coin');
    pin.play();
}
// Se definen funciones para reproducir y pausar la música de fondo
function reproducirMusica() {
    var reproductor = document.getElementById('audio');
    reproductor.play();
}

function pausarMusica() {
    var reproductor = document.getElementById('audio');
    reproductor.pause();
}
// Se definen funciones para mostrar y ocultar un menú de pausa
function mostrarMenu() {
    document.getElementById("menu-pausa").style.display = "block";
    detenerMovimiento();
    pausarMusica();
}

function ocultarMenu() {
    document.getElementById("menu-pausa").style.display = "none";
    start();
    reproducirMusica();
}

// Se definen funciones para cambiar el contenido de un elemento HTML
function iniciar() {
    var contenido = document.getElementById("gitar").innerHTML
    document.getElementById("menu").innerHTML = contenido;
    start();
}

function volverMenuPrincipal() {
    var contenido = document.getElementById("principal").innerHTML
    document.getElementById("menu").innerHTML = contenido;
    reinicio();
}

document.addEventListener('keyup', function (event) {
    if (event.key === 'a') {
        // Verifica si el círculo 4 está dentro de los píxeles definidos
        if (posicion >= 480 && posicion <= 560) {
            sonido();
            contador += 100;
            document.querySelector(".circulo1").style.visibility = 'hidden';
            actualizarPuntaje(); // Asegúrate de que esta función actualice el contador en el HTML
        }
    }
});
// Añade eventos de teclado para detectar cuando se presionan ciertas teclas
// Cada evento verifica si el círculo correspondiente está dentro de ciertos píxeles y realiza acciones en consecuencia
document.addEventListener('keyup', function (event) {
    if (event.key === 's') {
        // Verifica si el círculo 4 está dentro de los píxeles definidos
        if (posicion1 >= 480 && posicion1 <= 560) {
            sonido();
            contador += 100;
            document.querySelector(".circulo2").style.visibility = 'hidden';
            actualizarPuntaje(); // Asegúrate de que esta función actualice el contador en el HTML
        }
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key === 'k')  {
        // Verifica si el círculo 4 está dentro de los píxeles definidos
        
        if (posicion2 >= 480 && posicion2 <= 560) {
            sonido();
            contador += 100;
            document.querySelector(".circulo3").style.visibility = 'hidden';
            actualizarPuntaje(); // Asegúrate de que esta función actualice el contador en el HTML
        }
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key === 'l') {
        // Verifica si el círculo 4 está dentro de los píxeles definidos
        if (posicion3 >= 480 && posicion3 <= 560) {
            sonido();
            contador += 100;
            document.querySelector(".circulo4").style.visibility = 'hidden';
            actualizarPuntaje(); // Asegúrate de que esta función actualice el contador en el HTML
        }
    }
});
// Define una función para actualizar el puntaje en el documento HTML
function actualizarPuntaje() {
    document.getElementById('puntajeDisplay').textContent = contador;
}
// Define una función para mostrar el puntaje más alto alcanzado por el jugador
function score() {
    if (contador >= objetivoPuntaje) { // Verifica si se alcanzó el puntaje objetivo
        document.getElementById("variable").innerText = contador;
        document.getElementById("puntajeX").style.display = "block";
        detenerMovimiento();
        document.querySelector(".circulo1").style.visibility = 'hidden';
        document.querySelector(".circulo2").style.visibility = 'hidden';
        document.querySelector(".circulo3").style.visibility = 'hidden';
        document.querySelector(".circulo4").style.visibility = 'hidden';
        console.log("¡Has alcanzado el puntaje objetivo!");
    } else {
        // Si no se alcanzó el puntaje objetivo, se sigue jugando normalmente
        console.log("Puntaje actual:", contador);
    }
}