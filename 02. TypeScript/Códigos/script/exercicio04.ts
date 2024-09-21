//1. Utilizando variáveis Booleanas
//O tipo Booleano é o tipo de dados mais primitivo em toda programação - baseado na teoria de George 
//Boole – é a raiz de toda variável, armazenando o simples valor de 1 e 0, sendo Verdadeiro e Falso.
//Com este tipo de variável é possível que o interpretador execute tomadas de decisão através de 
//comparações entre verdadeiro e falso com operadores:
//


//Maior que >
//Menor que <
//Maior que ou igual >=
//Menor que ou igual <=
//Igual ==
//Diferente !=
//Valor igual e mesmo tipo ===
//Valor diferente e mesmo tipo !==


let bool_verdadeiro : boolean = true;
let bool_falso : boolean = false;

let x : number = 50;
let y : number = 60;
let z : string = "50";

//Realizando testes

let maiorQue = x > y; 


let menorQUe = x < y;


let igual = x == z;


let diferente = x != y;


let igualTipo = x === z;


let diferente = x != y;


let igualTipo = x === z;


let diferenteTipo = x !== z;


console.log(`Valor de x é ${x}`);
console.log(`valor de y é ${y}`);
console.log(`valor de z (que é string) é ${z}`);

console.log(`X é maior que y: ${maiorQue}`);

console.log(`x é menor que y: ${menorQUe}`);

console.log(`x é igual a z: ${igual}`);

console.log(`x é diferente de y: ${diferente}`);


console.log(`x tem mesmo tipoe valor de z: ${igualTipo}`);

console.log(`x é diferente e do mesmo tipo que Z ${diferenteTipo}`);



console.log(bool_verdadeiro);
console.log(bool_falso);