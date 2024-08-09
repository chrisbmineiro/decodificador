// pegando o click do botão para criptografar
document.getElementById('criptografar').addEventListener('click', () => {
    const inputTexto = document.getElementById('input__texto').value;
    const outputTexto = criptografar(inputTexto);
    document.getElementById('output__texto').innerText = outputTexto;
});

// pegando o click do botão para descriptografar
document.getElementById('descriptografar').addEventListener('click', () => {
    const inputTexto = document.getElementById('input__texto').value;
    const outputTexto = descriptografar(inputTexto);
    document.getElementById('output__texto').innerText = outputTexto;
});

// pegando o click do botão para copiar o texto criptografado
document.getElementById('copiar').addEventListener('click', () => {
    const outputTexto = document.getElementById('output__texto').innerText;
    navigator.clipboard.writeText(outputTexto).then(() => {
        alert('Texto copiado para a área de transferência');
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
    });
});

// funcões de criptografia e descriptografia
function criptografar(texto) {
    let textoCriptografado = texto;
    const map = {'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat'};
    for (let char in map) {
        const regex = new RegExp(char, 'g');
        textoCriptografado = textoCriptografado.replace(regex, map[char]);
    }
    return textoCriptografado;
}

function descriptografar(texto) {
    let textoDescriptografado = texto;
    const map = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    for (let char in map) {
        const regex = new RegExp(char, 'g');
        textoDescriptografado = textoDescriptografado.replace(regex, map[char]);
    }
    return textoDescriptografado;
}