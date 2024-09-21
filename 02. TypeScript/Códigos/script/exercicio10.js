/*
1. Laço de Repetição WHILE
Uma alternativa ao laço FOR, é utilizar o WHILE, onde podemos criar laços de repetição utilizando
booleanos.
Da seguinte maneira:

while (condição){
     Enquanto a condição for verdadeira
    o bloco de instruções irá executar
}

*/
var x = 1;
while (x <= 1000) {
    if (x === 600) {
        /*
         A instrução break permite quebrar este laço
        ou seja quando estivermos no número 600, o laço
        será interrompido e a instrução finalizada.
        
        */
        break;
    }
    console.log(x.toString());
    x++; //auto incremento
}
