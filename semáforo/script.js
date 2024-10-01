// Inicializa a variável que controla qual a luz está acesa
let luzAtual = 0; //0-vermelho, 1-Amarelo, 2-verde

//Função que muda as luzes do semáforo
function mudarLuz(){
    //Obtém as luzes pelos seus IDs
    const vermelho = document.getElementById('vermelho');
    const amarelo = document.getElementById('amarelo');
    const verde = document.getElementById('verde');

    //Remove a class 'active' de todas as luzes (desliga todas)
    vermelho.classList.remove('active');
    amarelo.classList.remove('active');
    verde.classList.remove('active');
    
    //Verifica qual luz deve estar acesa

    if(luzAtual === 0){
        vermelho.classList.add('active'); // acender a luz vermelha
    }else if (luzAtual === 1){
        amarelo.classList.add('active');//acender a luz amarela
    }else if(luzAtual === 2){
        verde.classList.add('active');//acender a luz verde
    }
    // Atualiza para a próxima luz (cíclo: 0 -> 1 -> 2 ->0)
    luzAtual = (luzAtual + 1) % 3; //Garante que vai voltar para o 0 após o 2

}

//  Chama a função mudarluz a cada 2 segundos
setInterval(mudarLuz, 2000);// troca de luz a cada 2000ms(2 segundos)
