// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
console.log(usernameInput);
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");
console.log(usernameHelper);

// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", () => {
    //Adicionar a classe "required-popup" ao username label
    usernameLabel.classList.add('required-popup');
})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur", () => {
    //Remover a classe "required-popup" ao username label
    usernameLabel.classList.remove('required-popup');
})

// Validar valor do input
usernameInput.addEventListener("change", (e) => {
    //Salvar o valor do input em uma variável
    let valor = e.target.value;
    console.log(valor);

    //Estrutura de condição if else para validar o valor
    if (valor.length < 3){
        usernameInput.classList.add("error");
        usernameHelper.classList.add("visible");
        usernameHelper.innerText = "Digite um texto com mais de 3 caracteres";
    } else {
        //Remover a classe de erro do usernameInput
        usernameInput.classList.remove("error");
        //Remover a mensagem de ajuda do usernameHelper
        usernameHelper.classList.remove("visible");
        //Adicionar a classe "correct" no meu usernameInput
        usernameInput.classList.add("correct");
    }
})
// ------------EMAIL------------ //

const emailLabel = document.querySelector('label[for="email"]');
const emailInput = document.getElementById('email');
const emailHelper = document.getElementById('email-helper');

    //Criar uma função para mostrar e ocultar o popup
function mostrarPopup (input, label) {
    input.addEventListener("focus", () => {
        label.classList.add("required-popup")
    });
    //Ocultar a mensagem de obrigatório
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup")
    });
}

//Executar a função

mostrarPopup(emailInput, emailLabel);
mostrarPopup(usernameInput, usernameLabel);

//Validar o campo de email
if (valor.includes("@") && valor.includes(".com")){
    emailInput.classList.add("correct");
    emailInput.classList.remove("error");
    emailHelper.classList.remove("visible");
}else {
    emailInput.classList.add("error");
    emailInput.classList.remove("correct");
    emailHelper.classList.add("visible");
    usernameHelper.innerText = "O email deve conter'@' e '.com'.";
}