/*

1. Laço de Repetição FOR
Com o laço de repetição FOR, podemos criar um ciclo de repetições do bloco de instruções, permitindo
realizar a mesma ação várias e várias vezes sem ter que repetir o mesmo código.
Da seguinte maneira:


for (valor inicial; condição de repetição; auto incremento){
 //
 // Bloco de instruções
 //
}

*/
for (var i = 1; i < 1000; i++) {
    if (i === 997) {
        /*  A instrução ‘continue’ permite pular este laço ou seja quando
        estivermos no número 997, o mesmo será pulado e passado para o próximo.*/
        continue;
    }
    console.log(i.toString());
}
