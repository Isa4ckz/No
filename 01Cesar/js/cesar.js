const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const cifrado = document.getElementById("cifrado");
const desplazamiento2 = document.getElementById("desplazamiento2");
const texto2 = document.getElementById("texto2");
const descifrado = document.getElementById("descifrado");

function cifrarTexto() {
    const textoIngresado = texto.value;
    let textoCifrado = '';
    textoCifrado = textoIngresado.split('').map(c => {
        let mayus = (c === c.toUpperCase());
        let valorEntero = c.toLowerCase().charCodeAt(0);
        if ((valorEntero >= 97 && valorEntero <= 122) || (valorEntero >= 48 && valorEntero <= 57)) {
            const valorDesplazamiento = parseInt(desplazamiento.value);
            if (valorEntero >= 97 && valorEntero <= 122) {
                if (valorEntero + valorDesplazamiento > 122) {
                    valorEntero = 97 + (valorEntero - 122) + valorDesplazamiento - 1;
                } else {
                    valorEntero = valorEntero + valorDesplazamiento;
                }
            } else if (valorEntero >= 48 && valorEntero <= 57) {
                if (valorEntero + valorDesplazamiento > 57) {
                    valorEntero = 48 + (valorEntero - 57) + valorDesplazamiento - 1;
                } else {
                    valorEntero = valorEntero + valorDesplazamiento;
                }
            }
        }
        let cifrado = String.fromCharCode(valorEntero);
        return mayus ? cifrado.toUpperCase() : cifrado;
    }).join('');
    cifrado.value = textoCifrado;
}

texto.addEventListener("input", cifrarTexto);
desplazamiento.addEventListener("input", cifrarTexto);
cifrarTexto();

function descifrarTexto() {
    const textoCifrado = texto2.value;
    let textoDescifrado = '';
    textoDescifrado = textoCifrado.split('').map(c => {
        let mayus = (c === c.toUpperCase());
        let valorEntero = c.toLowerCase().charCodeAt(0);
        if ((valorEntero >= 97 && valorEntero <= 122) || (valorEntero >= 48 && valorEntero <= 57)) {
            const valorDesplazamiento = parseInt(desplazamiento2.value);
            if (valorEntero >= 97 && valorEntero <= 122) {
                if (valorEntero - valorDesplazamiento < 97) {
                    valorEntero = 122 - (valorDesplazamiento - (valorEntero - 97)) + 1;
                } else {
                    valorEntero = valorEntero - valorDesplazamiento;
                }
            } else if (valorEntero >= 48 && valorEntero <= 57) {
                if (valorEntero - valorDesplazamiento < 48) {
                    valorEntero = 57 - (valorDesplazamiento - (valorEntero - 48)) + 1;
                } else {
                    valorEntero = valorEntero - valorDesplazamiento;
                }
            }
        }
        let descifrado = String.fromCharCode(valorEntero);
        return mayus ? descifrado.toUpperCase() : descifrado;
    }).join('');
    descifrado.value = textoDescifrado;
}

texto2.addEventListener("input", descifrarTexto);
desplazamiento2.addEventListener("input", descifrarTexto);
descifrarTexto();
