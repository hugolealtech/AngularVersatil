let numeroAleatorio = Math.floor(Math.random () * 100) + 1; //math.flow arredonda o número para sempre ser natural. Math random cria um numero aleatório e o + 1 add, caso o numero random seja 0
let tentativa  = 0;

// Evento para processar o palpite do usuário

document.getElementById("adivinhar").addEventListener("click", function(){

    let palpite = parseInt(document.getElementById("palpite").value);
    tentativa ++; //incrementa o numero de tentativas

    let resultado = document.getElementById("resultado");

    //verifica se o palpite está correto, muito alto ou muito baixo

    if (palpite === numeroAleatorio){
        resultado.innerText = "Parabéns! Você adivinhou o número!";
        resultado.style.color = "green";
    }else if (palpite > numeroAleatorio){
        resultado.innerText = "Muito alto! Tente novamente.";        
    }else{
        resultado.innerText = "Muito baixo! Tente novamente.";
        resultado.style.color = "red";
    }

    document.getElementById("tentativas").innerText = "Tentativas: " + tentativas;

});

document.getElementById("reiniciar").addEventListener("click", function(){
    numeroAleatorio = Math.floor(Math.random() * 100) +1;
      tentativas = 0;

    document.getElementById("resultado").innerText = ""; //Gera um novo número aleatório
    document.getElementById ("tentativas").innerText = "Tentativas: 0";// reseta a exibição de tentativas
    document.getElementById("palpite").value = ""; // limpa o campo 
});
