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

  function activeButton(){
    let quantidade = document.getElementsByClassName("green-border").length
    if(quantidade === 3){
        document.querySelector("button").classList.add("botao-enviar")
        document.querySelector("button p").classList.add("fechar-pedido")
        document.querySelector("button p").innerHTML = "Fechar pedido"
        document.querySelector("button").removeAttribute("disabled")
    }
}