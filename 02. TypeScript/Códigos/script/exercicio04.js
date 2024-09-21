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
var bool_verdadeiro = true;
var bool_falso = false;
var x = 50;
var y = 60;
var z = "50";
//Realizando testes
var maiorQue = x > y;
var menorQUe = x < y;
var igual = x == z;
var diferente = x != y;
var igualTipo = x === z;
var diferente = x != y;
var igualTipo = x === z;
var diferenteTipo = x !== z;
console.log("Valor de x \u00E9 ".concat(x));
console.log("valor de y \u00E9 ".concat(y));
console.log("valor de z (que \u00E9 string) \u00E9 ".concat(z));
console.log("X \u00E9 maior que y: ".concat(maiorQue));
console.log("x \u00E9 menor que y: ".concat(menorQUe));
console.log("x \u00E9 igual a z: ".concat(igual));
console.log("x \u00E9 diferente de y: ".concat(diferente));
console.log("x tem mesmo tipoe valor de z: ".concat(igualTipo));
console.log("x \u00E9 diferente e do mesmo tipo que Z ".concat(diferenteTipo));
console.log(bool_verdadeiro);
console.log(bool_falso);
