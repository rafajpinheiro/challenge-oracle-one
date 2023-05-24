// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"



var textoEntrada = [];
textoEntrada = document.getElementById('campo-entrada');

function criptografa() {
  var textoDigitado = textoEntrada.value;

  // for (var letra = 0; letra < textoDigitado.length; letra++) {
  //   console.log(textoDigitado[letra]);
  // }

  for (var letra = 0; letra < textoDigitado.length; letra++) {
    if (textoDigitado[letra] == "s") {
      textoDigitado[letra] += "ai";
      console.log(textoDigitado[letra]);
    }
  }

  // document.getElementById('campo-saida').innerText = textoDigitado;
  alert(textoDigitado.length);






}