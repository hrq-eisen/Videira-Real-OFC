document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Simulando a validação (exemplo simples)
    if (username === "" || password === "") {
        errorMessage.textContent = "Preencha todos os campos.";
    } else if (username !== "admin" || password !== "123456") {
        errorMessage.textContent = "Usuário ou senha incorretos.";
    } else {
        errorMessage.textContent = "";
        alert("Login bem-sucedido!");
        // Redirecionar para outra página ou realizar outras ações
    }
});
