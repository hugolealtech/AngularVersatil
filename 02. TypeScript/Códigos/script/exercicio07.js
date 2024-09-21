//Declarando nossas variáveis
var idade = 30;
var estado = "DF";
// Testando nossas variáveis utilizando o operador ternário
var ternario = idade > 30 ? "Velho" : "Novo";
//imprindo  o valor
console.log(ternario);
//Utilizando IF Múltiplo
if (estado == "DF") {
    console.log("Distrito Federal");
}
else if (estado === "SP") {
    console.log("São Paulo");
}
else if (estado === "RJ") {
    console.log("Rio de Janeiro");
}
else if (estado === "GO") {
    console.log("Goiás");
}
else {
    console.log("Outro estado");
}
