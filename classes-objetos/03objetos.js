/*

Declaraçao de um objeto. Chave:
valor;

01 - Criar objeto quadrado
02 - Criar funções(metodo area e
perimetro)
03 - entender o contexto this
04 - escrver de forma abreviada 
05 - acessar os dados do objeto 

*/

// let quadrado = {};
// let qudrado2 = [];
// let quadrado3 = [{}];

let quadrado = {
    lados : 4,
    area: function(lado){
        return lado * lado
    },
    perimetro: function(lados){
        return this.lados*lado
    }
};

// forma reduzidaa
const quadrado2 = {
    lados: 4,
    area(lado) {
        return lado * lado 
    },
    perimetro(lado) {
        return this.lados * lado
    }
}; 

quadrado.cor = '#000';