function typeWriter(elemento, texto) {
  elemento.innerHTML = 'E eu sou um ';

  var textoSlipt = texto.split('');

  textoSlipt.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 100 * i);
  });

}

var textosQueVaoAparecer = [
  "desenvolvedor full stack",
  "resolvedor de problemas",
  "web Design",
  "arquiteto de projeto"
];

const titulo = document.querySelector('#sub-title-digitacao1');

typeWriter(titulo, textosQueVaoAparecer[0]);
