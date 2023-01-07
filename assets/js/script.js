function getPrato(prato) {
  const selecionado = document.querySelector('#pratos-principais .green-border')
  if (selecionado !== null) {
    selecionado.classList.remove('green-border')
  }
  prato.classList.add('green-border')
  activeButton()
}

function getBebida(bebida) {
  const selecionado = document.querySelector('#bebidas .green-border')
  if (selecionado !== null) {
    selecionado.classList.remove('green-border')
  }
  bebida.classList.add('green-border')
  activeButton()
}

function getSobremesa(sobremesa) {
  const selecionado = document.querySelector('#sobremesas .green-border')
  if (selecionado !== null) {
    selecionado.classList.remove('green-border')
  }
  sobremesa.classList.add('green-border')
  activeButton()
}

function activeButton() {
  let quantidade = document.getElementsByClassName('green-border').length
  if (quantidade === 3) {
    document.querySelector('button').classList.add('botao-enviar')
    document.querySelector('button p').classList.add('fechar-pedido')
    document.querySelector('button p').innerHTML = 'Fechar pedido'
    document.querySelector('button').removeAttribute('disabled')
  }
}

function enviarPedido() {
  const prato = document.querySelector("#pratos-principais .green-border h4").innerHTML;
  const bebida = document.querySelector("#bebidas .green-border h4").innerHTML;
  const sobremesa = document.querySelector("#sobremesas .green-border h4").innerHTML;

  const precoPrato = document.querySelector("#pratos-principais .green-border .valor").innerHTML;
  const precoBebida = document.querySelector("#bebidas .green-border .valor").innerHTML;
  const precoSobremesa = document.querySelector("#sobremesas .green-border .valor").innerHTML;

  const precoPratoNumber = valores(precoPrato);
  const precoBebidaNumber = valores(precoBebida);
  const precoSobremesaNumber = valores(precoSobremesa);
  const valorTotal = precoPratoNumber + precoBebidaNumber + precoSobremesaNumber;

  const mensagem = `Olá, gostaria de fazer o pedido: \n- Prato: ${prato} \n- Bebida: ${bebida} \n- Sobremesa: ${sobremesa} \n- Total: R$ ${valorTotal.toFixed(2)}`

  const whatsapp = "https://wa.me/5524999523474?text=" + encodeURI(mensagem);
  window.open(whatsapp);
}

function valores(string) {
  let numero = string.replace(/[^0-9]/g, "");
  return parseInt(numero) / 100;
}
