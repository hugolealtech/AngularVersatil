//Com a instrução IF ELSE, através de booleanos podemos realizar tomadas de decisão em nossa 
//aplicação, tornando nossa aplicação muito mais dinâmica em nossos algoritmos.
//Todo IF ELSE possui a seguinte definição:
//if (condição) {
//
// Bloco de Instrução
//} else {
// 
// Bloco de Instrução
//}
var x = 720;
var y = 580;
//imprimindo valor IF ElSE
if (x >= y) {
    console.log("O valor \u00E9 maior que ".concat(x.toString()));
    if (x > 100) {
        console.log("o valor \u00E9 maior que 1000");
    }
}
else {
    console.log("O maior valor \u00E9 ".concat(y.toString()));
    if (y > 1000) {
        console.log("o valor \u00E9 maior que 1000");
    }
}
