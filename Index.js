// Função que calcula o saldo de partidas e define o nível do jogador
function calcularRank(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    
    // Variável para armazenar o nível
    let nivel;

    // Determina o nível do jogador com base nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Exibe a mensagem com o saldo de vitórias e nível
    console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Exemplo de uso com entrada do usuário
let vitorias = parseInt(prompt("Digite a quantidade de vitórias: "));
let derrotas = parseInt(prompt("Digite a quantidade de derrotas: "));

// Chama a função para calcular o rank e exibir a mensagem
calcularRank(vitorias, derrotas);
