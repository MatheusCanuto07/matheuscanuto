// Lógica ler mais

var exibirTexto = document.getElementById("exibirTexto");
var textoVaiAparecer = document.getElementById("textoFicaOculto");

exibirTexto.addEventListener('click', function() {
  textoVaiAparecer.className = 'tira-margem';
  exibirTexto.className = 'd-none';
});
