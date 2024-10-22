document.querySelector('form').addEventListener('submit', function(event) { 
  // Adiciona um evento de envio ao formulário
  event.preventDefault(); // Previne o envio do formulário
  
  // Obtem os valores dos campos do formulário
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
  
  // Verifica se o email e a senha correspondem aos dados armazenados
  if (email === '' || senha === '') {
    alert('Por favor,preencha todos os campos!');// Exibe uma mensagem de alerta
    event.preventDefault();// Previne o envio do formulário 
  } else {
    form.reset();// Limpa o formulário
  }
});