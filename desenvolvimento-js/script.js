const titulo = document.getElementById("titulo");
const ul = document.querySelector("ul");
const a = document.querySelector("a");
const listaOrdenada = document.getElementById("lista-ordenada");


titulo.innerText = "Título da Página";
a.innerText = "Visite o site ProzEducação";


for (let i = 1; i <= 3; i++) {
    const itemUl = document.createElement("li");
    itemUl.innerText = `Item ${i} da Lista Não Ordenada`;
    ul.appendChild(itemUl);
}


for (let i = 1; i <= 3; i++) {
    const itemOl = document.createElement("li");
    const linkOl = document.createElement("a");
    linkOl.href = `https://exemplo${i}.com`;
    linkOl.innerText = `Link ${i}`;
    itemOl.appendChild(linkOl);
    listaOrdenada.appendChild(itemOl);
}