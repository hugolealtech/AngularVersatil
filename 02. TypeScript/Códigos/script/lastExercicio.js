function maximo(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
var maiorValor = maximo(10, 15);

console.log(maiorValor);

console.log("O maior valor \u00E9 ".concat(maximo(10, 15)));
