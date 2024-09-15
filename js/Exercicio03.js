let respostasCorretas = {
    p1:"Javascript",
    p2:"p",
    p3:"background-color"
};

// Função para verificar as respostas do usuário

function verificarRespostas() {
    let formulario = document.getElementById("quizForm");
    let pontuacao = 0;

    // Loop através das respostas correta

    for(let pergunta in respostasCorretas){
        //Verifica a resposta do usuário para cada pergunta

        let respostasSelecionada = formulario.elements[pergunta].valule;
        if (respostasSelecionada === respostasCorretas)[pergunta];
            pontuacao++;
        }
    }

    // Exibe a pontuação final do usuário

    let resultado = document.getElementById("resultado");
    resultado.innerText = "Você Acertou" + pontuacao + "de 3 perguntas.";

