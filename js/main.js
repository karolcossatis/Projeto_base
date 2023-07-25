// Obtém o elemento do botão descobrirBtn
const descobrirBtn = document.getElementById('descobrirBtn');

//obtem o modal indicado
const modalPeleOc = new bootstrap.Modal(document.getElementById('modal_peleOC'));
const modalPeleOt = new bootstrap.Modal(document.getElementById('modal_peleOT'));
const modalPeleMc = new bootstrap.Modal(document.getElementById('modal_peleMC'));
const modalPeleMt = new bootstrap.Modal(document.getElementById('modal_peleMT'));
const modalPeleSc = new bootstrap.Modal(document.getElementById('modal_peleSC'));
const modalPeleSt = new bootstrap.Modal(document.getElementById('modal_peleST'));

/*refatorei o seguinte código:
// Extrai o código de obtenção dos valores dos inputs e chamada da função abrirModal para uma função nomeada
function botaodescobrirBtn() {
  const pele = document.querySelector('input[name="tipodepele"]:checked').value;
  const bene = document.querySelector('input[name="beneficio"]:checked').value;

  abrirModal(pele, bene);
}
// Adiciona o evento de clique ao botão descobrirBtn e chama a função descobrirBtnClickHandler
descobrirBtn.addEventListener("click", botaodescobrirBtn);*/


descobrirBtn.addEventListener("click", function () {
  const peleInput = document.querySelector('input[name="peleSelect"]:checked');
  const beneInput = document.querySelector('input[name="beneSelect"]:checked');

  if (peleInput && beneInput) { 
    const pele = peleInput.value;
    const bene = beneInput.value;
    abrirModal(pele, bene);
  } else { //assim, se ele retorna null ao inves de value ao clicar, aparece o alert
    alert("Selecione um tipo de pele e um benefício");
  }
});

function abrirModal(pele, bene) {
  if (pele === "oleosa" && bene === "cobertura") {
    modalPeleOc.show();
  } else if (pele === "oleosa" && bene === "tratamento") {
    modalPeleOt.show();
  } else if (pele === "mista" && bene === "cobertura") {
    modalPeleMc.show();
  } else if (pele === "mista" && bene === "tratamento") {
    modalPeleMt.show();
  } else if (pele === "seca" && bene === "cobertura") {
    modalPeleSc.show();
  } else if (pele === "seca" && bene === "tratamento") {
    modalPeleSt.show();
  }
}

/*poderia fazer esse if else com swich case:
const abrirModal = (pele, bene) => {
  switch (pele) {
    case "oleosa":
      bene === "cobertura" ? modalPeleOc.show() : modalPeleOt.show();
      break;
    case "mista":
      bene === "cobertura" ? modalPeleMc.show() : modalPeleMt.show();
      break;
    case "seca":
      bene === "cobertura" ? modalPeleSc.show() : modalPeleSt.show();
      break;
  }
 */






