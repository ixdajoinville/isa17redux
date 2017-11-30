var list = [
'<h2>Falaram que a palestra da Cynthia foi sensacional!</h2>',
'<h2>E aquela a recomendação da Cynthia de testar em diferentes estados emocionais, eim?</h2>',
'<h2>"Qual a pior coisa que poderia acontecer?"</h2>',
'<h2>"ROOODA A ROLETAA!!!"</h2>',
'<h2>Como é mesmo a receitinha da feijoada do Andrew? </h2>',
'<h2>Acidentalmente líder - Escolha alguém da mesa acidentalmente e lidere seu copo! </h2>',
'<h2>"Ou você se define ou alguém te define" - QUEM DISSE? </h2>',
'<h2>Escolha um copo da mesa, dê um gole e mude seu ponto de vista (Russel, 2017) </h2>',
'<h2>Escolha alguém da mesa para escolher outro alguém para você entender o seu modelo mental </h2>',
'<h2>SIMPATIA vs EMPATIA vs COMPAIXÃO. QUAL? POR QUÊ? VALENDO! </h2>',
'<h2>Você tem duas opções: chopp com o Balmmer ou rollmops com a Cynthia? (polêmica) </h2>',
'<h2>Jobs to be done do ILA 2018, valendo! </h2>',
'<h2>Quais foram as 4 dicas que a Janaki deixou para se ter sucesso? </h2>',
'<h2>Imite um esguicho de jardim </h2>',
'<h2>Troque seu chefe por um palestrante. Quem seria? </h2>',
'<h2>Melhor e pior momento </h2>',
'<h2>Levante, pegue seu copo e mude de mesa </h2>',
'<h2>Russell falou sobre o design para o bem e mal. Comente. </h2>',
'<h2>Nero - Atendimento ao cliente - quem lembra? </h2>',
'<h2>Dormiu em palestra, sim ou não? Qual? </h2>',
'<h2>Se o mundo tivesse acabado no último dia do evento. O que você teria feito (no evento) que não fez? </h2>',
'<h2>Produtos exclusivos. Acessibilidade. Design Universal. Lucas Radaelli. Tentem conversar sobre e manter a amizade. </h2>',
'<h2>Design não é um… complete! </h2>',
'<h2>O que é um HIPPO? </h2>',
'<h2>Qual foi a última vez que você ligou para alguém? (SAC, pai/mãe/esposa não vale) </h2>',
'<h2>Designer + SAC =  o que acha? </h2>',
'<h2>Qual seu código de ética como designer? </h2>',
'<h2>Anderson falou sobre líderes inspirarem caminhos. Conte pior e melhor frase dita por um líder para você </h2>',
];

var shuffledArray = [];

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}

function getNewRandomPhase() {
 
 if (shuffledArray.length == 0){
   shuffledArray = list.slice();
   shuffle(shuffledArray);
 }
  
document.getElementById("randomPhase").innerHTML = shuffledArray.shift();

}
  