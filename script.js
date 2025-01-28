document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value.trim();  // remove espaços extras
    var password = document.getElementById('password').value.trim();  // remove espaços extras
    var errorMessage = document.getElementById('error-message');

    // Dados fictícios para autenticação (apenas para exemplo)
    var validUsername = "hortencia";
    var validPassword = "senha123";

    // Validação de login (caso insensível a maiúsculas/minúsculas)
    if (username === "" || password === "") {
        errorMessage.textContent = "Por favor, preencha todos os campos.";
    } else if (username.toLowerCase() !== validUsername.toLowerCase() || password.toLowerCase() !== validPassword.toLowerCase()) {
        errorMessage.textContent = "Usuário ou senha incorretos.";
    } else {
        errorMessage.textContent = "";

        // Redireciona para a página principal do banco
        window.location.href = "dashboard.html";

    }
});