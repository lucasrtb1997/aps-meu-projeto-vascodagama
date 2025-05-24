function mostrarSecao(id) {
  const secoes = document.querySelectorAll(".secao");
  secoes.forEach(secao => secao.style.display = "none");
  
  const secaoSelecionada = document.getElementById(id);
  if (secaoSelecionada) {
    secaoSelecionada.style.display = "block";
    secaoSelecionada.setAttribute('tabindex', '-1'); // acessibilidade
    secaoSelecionada.focus();
  }
}