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
const lados = 10;

const quadrado2 = {
    lados: 4,
    area(lado) {
        return lado * lado 
    },
    perimetro(lado) {
        return this.lados * lado
    }
}; 

console.log(quadrado2.perimetro(5))

// criar um objt senai
// acessaar os dados ds chave 
// incremenetar dados/alterar objts
// excluir um valor do objt

const senai = {
    codigo: 603,
    cidade: 'Araraquara'
}

console.log('------------------------');

senai.telefone = 1633035252
senai.endereco = {rua:'Hugo Negrini', bairro: 'Quitandinha', numero: 60}
senai.alunos = ['SESI', 'EEBA', 'Comunidade'];

senai.endereco.numero = 62;
senai.alunos[2] = 'tecnico';

console.log(senai)
