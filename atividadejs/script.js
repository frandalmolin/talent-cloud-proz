document.getElementById('titulo').innerText = 'Bem-vindo à nossa loja de produtos';

const produtoDiv = document.getElementById('produto');

const nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Produto Exemplo';

const descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Esta é uma descrição do produto que estamos vendendo. É um produto incrível que você vai adorar!';

const precoProduto = document.createElement('p');
precoProduto.innerText = 'Preço: R$ 99,99';

const imagemProduto = document.createElement('img');
imagemProduto.src = 'imagem-do-produto.jpg';
imagemProduto.alt = 'Produto Exemplo';

produtoDiv.appendChild(nomeProduto);
produtoDiv.appendChild(descricaoProduto);
produtoDiv.appendChild(precoProduto);
produtoDiv.appendChild(imagemProduto);