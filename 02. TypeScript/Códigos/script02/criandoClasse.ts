/*
. Criando uma classe
Para desenvolvermos uma entidade em TypeScript devemos utilizar a denotação class
export class NOMEDACLASSE {
atributo: tipo;
atributo: tipo;
// Método que inicializa nossa classe
constructor(){
//
// código do nosso construtor
}
}


*/

export class Pessoa{

    nome:string;
    dataNascimento: Date;
    pai:Pessoa;
    mae:Pessoa;
     

    //Declarando um construtor

    constructor(){}

        //Declarando as ações de classe

       digaOla():void {
            console.log(`Olá meu nome é ${this.nome}`);
       } 
    
    
}

let pessoa = new Pessoa()
pessoa.nome = "Hugo";
pessoa.digaOla();
