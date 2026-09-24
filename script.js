const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Durante o Segundo Reinado, no governo de Dom Pedro II, o Brasil começou a apresentar algumas mudanças econômicas. Qual atividade continuava sendo a principal base da economia brasileira?",
        alternativas: [
            {
                texto: "A exportação de produtos agrícolas, principalmente o café.",
                afirmacao: "A economia brasileira continuava dependente da agricultura e das exportações."
            },
            {
                texto: "A produção industrial de máquinas e automóveis.",
                afirmacao: "A indústria brasileira ainda era pequena e não produzia máquinas e automóveis em larga escala."
            }
        ]
    },
    {
        enunciado: "Em 1844, foi criada a Tarifa Alves Branco. Qual foi uma de suas consequências para a economia brasileira?",
        alternativas: [
            {
                texto: "O aumento dos impostos sobre produtos importados, favorecendo a indústria nacional.",
                afirmacao: "A Tarifa Alves Branco tornou alguns produtos importados mais caros e estimulou a produção nacional."
            },
            {
                texto: "A diminuição dos impostos sobre todos os produtos estrangeiros.",
                afirmacao: "A redução dos impostos sobre importações não favoreceria diretamente as fábricas brasileiras."
            }
        ]
    },
    {
        enunciado: "Irineu Evangelista de Sousa, conhecido como Barão de Mauá, foi uma importante figura da industrialização brasileira. Em quais áreas ele investiu?",
        alternativas: [
            {
                texto: "Ferrovias, estaleiros, bancos, navegação e iluminação pública.",
                afirmacao: "O Barão de Mauá investiu em diferentes setores ligados à modernização do Brasil."
            },
            {
                texto: "Apenas em plantações de café e criação de gado.",
                afirmacao: "Os investimentos do Barão de Mauá foram mais diversificados e incluíram transportes, bancos e indústria."
            }
        ]
    },
    {
        enunciado: "As ferrovias construídas durante o Segundo Reinado contribuíram principalmente para:",
        alternativas: [
            {
                texto: "Transportar com mais rapidez o café e outros produtos até os portos.",
                afirmacao: "As ferrovias facilitaram o transporte da produção agrícola até os portos de exportação."
            },
            {
                texto: "Substituir completamente os portos e impedir as exportações.",
                afirmacao: "As ferrovias não substituíram os portos; elas ajudaram a levar os produtos até eles."
            }
        ]
    },
    {
        enunciado: "Apesar de alguns avanços, a industrialização durante o governo de Dom Pedro II foi limitada. Qual foi uma das razões para essa limitação?",
        alternativas: [
            {
                texto: "A economia ainda dependia muito da agricultura, da exportação do café e do trabalho escravizado.",
                afirmacao: "A dependência do café e da escravidão dificultava a formação de um mercado de trabalho livre e industrial."
            },
            {
                texto: "O Brasil já possuía uma indústria maior que a da Inglaterra.",
                afirmacao: "Durante o Segundo Reinado, a indústria brasileira ainda era pequena quando comparada à inglesa."
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
