const input = document.querySelector('.input__texto');
const output = document.querySelector('.output__texto');

let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];
function btnEncriptar() {
    const textoEncriptado = encriptar(input.value);
    output.value = textoEncriptado;
    input.value = "";
}
function encriptar(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(
                matrizCodigo[i][0],
                matrizCodigo[i][1]
            );
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(input.value);
    output.value = textoDesencriptado;
    input.value = "";
}
function desencriptar(stringDesencriptada) {
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(
                matrizCodigo[i][1],
                matrizCodigo[i][0]
            );
        }
    }
    return stringDesencriptada;
}

// Copiar texto e limpar o texto no output
function copiarTexto() {
    output.select();
    navigator.clipboard.writeText(output.value);
    output.value = "";
}