// Função que será chamada ao clicar no botão
function consultarCep(){
    //Obtém o valor do campo CEP
    const cep = document.getElementById('cep').value;

    //verifica se o CEP tem 8 dígitos
    if(cep.length !== 8){
        alert("Por favor, insira um CEP válido com 8 dígitos.");
        return;//Interrompe a execução da função se o CEP for inválido
    }
    //URL da API de CEP (usando o serviço via CEP como exemplo)
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    //Faz uma requisição à API para obter os dados do CEP
    fetch(url)
        .then(response => response.json())// Converte a resposta em JSON
        .then(mar =>{
            //Verifica se o CEP foi encontrado
            if(mar.erro){
                alert("CEP não encontrado.");
                return;//Interrompe a execução se o CEP não for válido
            }
            //Atualiza os campos no formulário com os dados retornados pela API
            document.getElementById('Rua').textContent = mar.logradouro;
            document.getElementById('Bairro').textContent = mar.bairro;
            document.getElementById('Cidade').textContent = mar.localidade;
            document.getElementById('Estado').textContent = mar.uf;
        })
        .catch(error =>{
            console.error("Erro ao consultar o CEP:",error);//Loga erros no console
            alert("Ocorreu um erro ao consultar o CEP.");
        });
}