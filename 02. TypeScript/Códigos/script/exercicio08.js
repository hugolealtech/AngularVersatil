/*
 Instrução SWITCH
Também podemos utilizar múltiplos IF ELSE resumidos com a instrução SWITCH. Que recebe um
parâmetro e permite diferentes ações dependendo do valor recebido pelo SWITCH.


Da seguinte maneira:
switch(valor) {
 case X: // bloco de instruções
 break;
 case Y: // bloco de instruções
 break;
 case Z: // bloco de instruções
 break;
 default: // bloco executado caso não caia em
 // nenhuma das instruções
}
*/
var estado = "DF";
//Testando exemplo anterior
switch (estado) {
    case "DF":
        console.log("Distrito Federal");
        break;
    case "SP":
        console.log("São Paulo");
        break;
    case "GO":
        console.log("Goiás");
        break;
    case "RJ":
        console.log("Rio de Janeiro");
        break;
    default:
        console.log("Outro Estado");
}
