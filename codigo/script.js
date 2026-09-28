const loginForm = document.getElementById("loginForm");
const registerButton = document.getElementById("registerButton");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (!usuario || !senha) {
        alert("Preencha o usuário e a senha.");
        return;
    }

    // Aqui você pode posteriormente conectar
    // o formulário ao seu backend/API.

    alert(`Bem-vindo, ${usuario}!`);

});


registerButton.addEventListener("click", function () {

    // Posteriormente pode direcionar para:
    // cadastro.html

    alert("Página de cadastro em desenvolvimento.");

});