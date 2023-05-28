const textArea = document.querySelector("#campo-entrada");
const mensagem = document.querySelector("#campo-saida");


function btnEncriptar() {
  const textoEncriptado = criptografar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";
}


function criptografar(textoCripto) {

  let chaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "uber"],
  ];
  textoCripto = textoCripto.toLowerCase();

  for (let i = 0; i < chaves.length; i++) {
    if(textoCripto.includes(chaves[i][0])) {
      textoCripto = textoCripto.replaceAll(chaves[i][0], chaves[i][1]);
    }
  }
  return textoCripto;

}


function btnDesencriptar() {
  const textoDesencriptado = descriptografar(textArea.value);
  mensagem.value = textoDesencriptado;
  textArea.value = "";
}


function descriptografar(textoDescripto) {

  let chaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "uber"],
  ];
  textoDescripto = textoDescripto.toLowerCase();

  for (let i = 0; i < chaves.length; i++) {
    if(textoDescripto.includes(chaves[i][1])) {
      textoDescripto = textoDescripto.replaceAll(chaves[i][1], chaves[i][0]);
    }
  }
  return textoDescripto;

}


document.getElementById("copiar").addEventListener('click', clipboardCopy);
async function clipboardCopy() {
 let text = document.querySelector("#campo-saida").value;
 await navigator.clipboard.writeText(text);
}