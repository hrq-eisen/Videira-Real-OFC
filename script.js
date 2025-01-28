document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Dados fictícios para autenticação (apenas para exemplo)
    var validUsername = "Hortencia";
    var validPassword = "diretora2025";

    // Validação de login
    if (username === "" || password === "") {
        errorMessage.textContent = "Por favor, preencha todos os campos.";
    } else if (username !== validUsername || password !== validPassword) {
        errorMessage.textContent = "Usuário ou senha incorretos.";
    } else {
        errorMessage.textContent = "";

        // Redireciona para a página principal do banco
        window.location.href = "Dashboard.html";
    }
});
