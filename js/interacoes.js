const textArea = document.querySelector("#campo-entrada");
const mensagem = document.querySelector("#campo-saida");


function btnEncriptar() {
  const textoEncriptado = criptografar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";
}


function criptografar(textoDigitado) {

  let chaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "uber"],
  ];
  textoDigitado = textoDigitado.toLowerCase();

  for (let i = 0; i < chaves.length; i++) {
    if(textoDigitado.includes(chaves[i][0])) {
      textoDigitado = textoDigitado.replaceAll(chaves[i][0], chaves[i][1]);
    }
  }
  return textoDigitado;


}