// Seleciona o formulário e adiciona um evento que será acionado quando o botão de enviar for clicado
document.querySelector('form').addEventListener('submit', function(event) {
    
  // Armazena o valor do campo 'nome' na variável 'nome'
  var nome = document.getElementById('name').value;
  
  // Armazena o valor do campo 'email' na variável 'email'
  var email = document.getElementById('email').value;

  // Verifica se os campos 'nome' ou 'email' estão vazios
  if (nome === '' || email === '') {
      // Exibe um alerta se houver campos vazios
      alert('Por favor, preencha todos os campos.');
      // Impede o envio do formulário
      event.preventDefault();
  } 
  // Verifica se o email não está no formato correto
  else if (!/\S+@\S+\.\S+/.test(email)) {
      // Exibe um alerta se o email não for válido
      alert('Por favor, insira um email válido.');
      // Impede o envio do formulário
      event.preventDefault();
  } 
  // Se todos os campos estiverem preenchidos e o email for válido
  else {
      // Reseta o formulário, limpando todos os campos
      document.querySelector('form').reset();
  }
});
