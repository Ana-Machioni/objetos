// classe é uma definiçao. como um objeto deve ser 
class Senai{
    codigo;
    cidade;
    // dentro de uma classe nao precisa da palavra function

    escreverEscola(){
        console.log(`O código ${this.codigo} pertence a escola`)
    }
}

// instancia é uma ocorrencia.  criaçao de um novo objeto
// criando uma instancia(uma nova escola)

const senaiArqa = new Senai();
// incrementando o objeto
senaiArqa.codigo = 603;
senaiArqa.cidade = 'Araraquara';

const senaiMat = new Senai();
senaiMat.codigo = 145;
senaiMat.cidade = 'Matão';
senaiMat.rua = 'Rua Das Flores'

// exibindo os dados no controle
senaiArqa.descreverEscola();
senaiMat.descreverEscola();