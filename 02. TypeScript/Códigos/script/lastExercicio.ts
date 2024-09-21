
function maximo (num1:number, num2: number):number{

    if (num1 > num2){
        return num1;
    }else{
        return num2;
    }
}

let maiorValor = maximo(10,15);

console.log(maiorValor);

console.log(`O maior valor é ${maximo(10,15)}`);

