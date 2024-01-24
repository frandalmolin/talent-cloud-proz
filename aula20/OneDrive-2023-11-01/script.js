let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;

function atualizarSubtotal(){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + "itens";
  valorSubtotal.innerText = subtotalInfo.valor;
}
atualizarSubtotal();

//---Variáveis /---Dados
let btnAdicionarProduto01 = document.querySelector("#btn-adicionar-produto-01");
let btnSubtrairProduto01 = document.querySelector("#btn-subtrair-produto-01");
let quantidadeProduto01 = document.querySelector("#quantidade-produto-01");

//---Funções
function adicionarUm(){
  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1;

  subtotalInfo.quantidade = subtotalInfo.quantidade + 1;

  atualizarSubtotal();
}

function subtrairUm(){
  quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1;
}

//---Eventos
btnAdicionarProduto01.addEventListener("click", adicionarUm);

btnSubtrairProduto01.addEventListener("click", subtrairUm);

