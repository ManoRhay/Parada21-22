const prompt = require('prompt-sync')({sigint:true});

function tratarResposta(resposta) {
    return resposta.toUpperCase().trim()
}

function respostaVerdadeira(resposta) {
    if (resposta === "VERDADEIRO") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta.");
    }
}

function respostaFalsa(resposta,mensagem) {
    if (resposta.toUpperCase().trim() === "FALSO") {
        console.log("Parabéns!");
        pontuacao++;
    } else {
        console.log(mensagem);
    }
}

const jogador = prompt('Qual o seu nome? ');

let op = 10;
let pontuacao = 0;
let resposta;

while (op != 0) {
    op = parseInt(prompt("Qual tema você deseja jogar?  1 - Zoologia  2 - Astronomia - 3 Arte - 0 - Sair "));

    switch (op) {
        case 1:
            resposta = prompt("O maior animal que já vimos no planeta foi um dinossauro! Verdadeiro ou falso? ");
            respostaFalsa(tratarResposta(resposta),"Resposta incorreta. A baleia azul foi o maior animal que já viveu.")
            
            resposta = prompt("As tartarugas podem viver mais de 100 anos. Verdadeiro ou falso? ");
            respostaVerdadeira(tratarResposta(resposta))

            resposta = prompt("As aranhas são insetos. Verdadeiro ou falso? ");
            respostaFalsa(tratarResposta(resposta),"Resposta incorreta. Elas são aracnídeos.")

            break;

        case 2:
            resposta = prompt("O Sol é uma estrela de tamanho médio. Verdadeiro ou falso? ");
            respostaVerdadeira(tratarResposta(resposta))

            resposta = prompt("Júpiter é o maior planeta do nosso sistema solar. Verdadeiro ou falso? ");
            respostaVerdadeira(tratarResposta(resposta))

            resposta = prompt("A Terra é o terceiro planeta a partir do Sol. Verdadeiro ou falso? ");
            respostaVerdadeira(tratarResposta(resposta))

            break;

            case 3:
                resposta = prompt("Pablo Picasso é o pintor da obra O Grito! Verdadeiro ou falso? ");
                respostaFalsa(tratarResposta(resposta),"Resposta incorreta. Vincent Van Gogh é o pintor da obra O Grito.")

                resposta = prompt("Leonardo Da Vinci é o pintor da obra Monalisa. Verdadeiro ou falso? ");
                respostaVerdadeira(tratarResposta(resposta))

                resposta = prompt("Salvador Dali é o pintor da obra A Criação De Adão. Verdadeiro ou falso? ");
                respostaFalsa(tratarResposta(resposta),"Resposta incorreta. Michelangelo é o pintor dessa obra.")

                break;

        case 0:
            console.log("Você saiu!");
            break;

        default:
            console.log("Digite uma opção válida.");
            break;
    }
}
console.log("Sua Pontuação Foi: "+pontuacao.toString())