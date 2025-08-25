// cria referência ao form e aos elementos h3 (onde será exibida a resposta)
const frm = document.querySelector("form");
const outMedicamento = document.getElementById("outMedicamento");
const outPromocao = document.getElementById("outPromocao");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  const medicamento = frm.inMedicamento.value; // obtém nome do medicamento
  const preco = Number(frm.inPreco.value); // obtém preço digitado

  const promo = Math.floor(preco * 2); // calcula promoção (leve 2 por...)
  
  outMedicamento.innerText = `Promoção de ${medicamento}`;
  outPromocao.innerText = `Leve 2 por apenas R$ ${promo.toFixed(2)}`;

  e.preventDefault(); // evita envio do form
});