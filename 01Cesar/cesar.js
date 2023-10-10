const desplazamiento= document.getElementById("desplazamiento");
const texto= document.getElementById("texto");
const cifrado=document.getElementById("cifrado");
//vamos a crear una funcion para cifrar
function cifrarTexto(){
    //declarar texto
    const textoIngresado= texto.value;
    let textoCifrado='';
    textoCifrado.value=textoIngresado.split('').map(c=>{
        let mayus=(c === c.toUpperCase()) ? true : false;
        let valorEntero= c.toLowerCase().charCodeAt(0);
        if (valorEntero >=97 && valorEntero<=122){
            const valorDesplazamiento=parseInt(desplazamiento.value);
            if(valorEntero+  valorDesplazamiento >122){
                valorEntero=97+(valorEntero-122)+valorDesplazamiento-1;
            }else{
                valorEntero=valorEntero+valorDesplazamiento;
            }
        }
        let cifrado =String.fromCharCode(valorEntero);
        return mayus ? cifrado.toUpperCase():cifrado;
    }).join('');
    //cifrado.value = textoCifrado;
    };
    texto.addEventListener("keyup",cifrarTexto);
    desplazamiento.addEventListener("input",cifrarTexto);
