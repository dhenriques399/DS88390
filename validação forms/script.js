// Função para validar o forms
function validateForm(){
    //Obtém os valores dos campos de input pelo ID
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // obtém o elemento para exivir mensagens de erro
    let errorMessage = document.getElementById('error-message');

    //Limpa qualquer mensagem de erro anterior
    //errorMessage.textContent = '';

    //verifica se o campo "Name" está vazio
    if(name === ''){
        //Exibe uma mensagem de erro e interrompe o envio do formulário
        errorMessage.textContent = 'Por favor, insira nome.';
        return false;
        //Retorna false para impedir o envio do formulário
    }
    
    // Verifica se o campo "E-mail está vazio"
    if(email === ''){
        //Exibe uma mensagem de erro e interrompe o envio do formulário
        errorMessage.textContent = 'Por favor, insira seu e-mail.';
        return false;
    }

    //Verifica se o campo "Senha" está vazio
    if(password ===''){
        //Exibe uma mensagem de erro e interrompe o envio do formulário
        errorMessage.textContent = 'Por favor, insira sua senha.';
    }
    if(password !== confirmPassword ){
        //Exibe uma mensagem de erro e interrompe o envio do formulário
        errorMessage.textContent = 'As senhas não coicidem.';
    }
    // se todas as verificações forem bem-sucedidas, o formulário pode ser enviado
    return true; //permite o envio do formulário
}