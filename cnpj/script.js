// Função que será chamada ao clicar no botão
function consultarCnpj(){
    //Obtém o valor do campo CEP
    const cnpj = document.getElementById('cnpj').value;

    //verifica se o CEP tem 14 dígitos
    if(cnpj.length !== 14){
        alert("Por favor, insira um CNPJ válido com 14 dígitos.");
        return;//Interrompe a execução da função se o CNPJ for inválido
    }
    //URL da API de CNPJ (usando o serviço brasil api como exemplo)
    const url = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;

    //Faz uma requisição à API para obter os dados do CEP
    fetch(url)
        .then(response => response.json())// Converte a resposta em JSON
        .then(data =>{
            //Verifica se o CNPJ foi encontrado
            if(data.erro){
                alert("CNPJ não encontrado.");
                return;//Interrompe a execução se o CNPJ não for válido
            }
            //Atualiza os campos no formulário com os dados retornados pela API
            document.getElementById('Razao').textContent    = data.razao_social;
            document.getElementById('Situacao').textContent = situacaoMap[data.situacao_cadastral];
            document.getElementById('Cep').textContent      = data.cep;
            document.getElementById('Nome').textContent     = data.nome_fantasia;
            then(data => {
                const situacaoMap = {             
                '1': 'Inativa',
                '2': 'Ativa',
                }
            })             
 
        })
        .catch(error =>{
            console.error("Erro ao consultar o CNPJ:",error);//Loga erros no console
            alert("Ocorreu um erro ao consultar o CNPJ.");
        });
}
/*
// Função que será chamada ao clicar no botão
function consultarCnpj() {
    // Obtém o valor do campo CNPJ
    const cnpj = document.getElementById('cnpj').value;

    // Verifica se o CNPJ tem 14 dígitos
    if (cnpj.length !== 14 || isNaN(cnpj)) {
        alert("Por favor, insira um CNPJ válido com 14 dígitos.");
        return; // Interrompe a execução da função se o CNPJ for inválido
    }

    // URL da API de CNPJ (usando o serviço Brasil API como exemplo)
    const url = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;

    // Faz uma requisição à API para obter os dados do CNPJ
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("CNPJ não encontrado.");
            }
            return response.json(); // Converte a resposta em JSON
        })
        .then(data => {
            // Mapeamento de situação cadastral
            const situacaoMap = {
                '1': 'Inativa',
                '2': 'Ativa',
                // Adicione outros mapeamentos conforme necessário
            };

            // Atualiza os campos no formulário com os dados retornados pela API
            document.getElementById('Razao').textContent = data.razao_social;
            document.getElementById('Situacao').textContent = situacaoMap[data.situacao_cadastral] || 'Desconhecida';
            document.getElementById('Cep').textContent = data.cep;
            document.getElementById('Nome').textContent = data.nome_fantasia;
        })
        .catch(error => {
            console.error("Erro ao consultar o CNPJ:", error); // Loga erros no console
            alert("Ocorreu um erro ao consultar o CNPJ: " + error.message);
        });
}
*/