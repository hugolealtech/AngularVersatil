"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    //Declarando um construtor
    function Pessoa() {
    }
    //Declarando as ações de classe
    Pessoa.prototype.digaOla = function () {
        console.log("Ol\u00E1 meu nome \u00E9 ".concat(this.nome));
    };
    return Pessoa;
}());


exports.Pessoa = Pessoa;
var pessoa = new Pessoa();
pessoa.nome = "Hugo";
pessoa.digaOla();
