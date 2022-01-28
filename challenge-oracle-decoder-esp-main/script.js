//funcion para encriptar
function encriptar(texto){
    var texto = document.getElementById("text-enc").value;
    if (texto.match(/[^a-z\s]/)) {
        return alert("Solo puedes encriptar letras minúsculas sin acentos");
    }
    
    var resultado = texto.replace(/(e)/ig, "enter").replace(/(i)/ig, "imes").replace(/(a)/ig, "ai").replace(/(o)/ig, "ober").replace(/(u)/ig, "ufat");
    document.texto.texto2.value= resultado;
    
}



//funcion para desencriptar
function desencriptar(texto){
    var texto = document.getElementById("text-enc").value;
    if (texto.match(/[^a-z\s]/)) {
        return alert("Solo puedes desencriptar letras minúsculas sin acentos");
    }

    var resultado = texto.replace(/(enter)/ig, "e").replace(/(imes)/ig, "i").replace(/(ai)/ig, "a").replace(/(ober)/ig, "o").replace(/(ufat)/ig, "u");
    document.texto.texto2.value= resultado;
}


//funcion para copiar el texto al portapapeles 
function copiar() {
    var copyText = document.getElementById("texto2");
    copyText.select();
    copyText.setSelectionRange(0,99999);
    document.execCommand("copy");
}

  

