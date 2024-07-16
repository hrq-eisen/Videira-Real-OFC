document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtendo os valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Definindo credenciais válidas
    const validCredentials = [

        { username: 'Hortencia', password: '181409' },
  
    ];

    // Verifica se as credenciais fornecidas correspondem a alguma das credenciais válidas
    const isValid = validCredentials.some(cred => cred.username === username && cred.password === password);

    if (isValid) {
        // Redireciona para a página de dashboard se as credenciais forem válidas
        window.location.href = 'dashboard.html'; // Substitua pelo caminho da página para onde deseja redirecionar
    } else {
        // Exibe uma mensagem de erro se as credenciais não forem válidas
        alert('Nome de usuário ou senha incorretos. Por favor, tente novamente.');
    }
});
