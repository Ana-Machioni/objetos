// classe é uma definicao. como m objt deve ser 
class Senai {
    constructor(codigo, cidade) {
        this.codigo = codigo;
        this.cidade = cidade;
    // dentro de uma classe nao precisa de paçavra function

    // serve como molde p construir novos objetos 
    }

    // metodo p exibir as informaçoes formatadas 
    dadosEscolas() {
        console.log(`Unidade: ${this.cidade} | Código Interno: ${this.codigo}`);
    }

}

// A criaçao agora é feita em apenas uma linha, passando os valores como argumemtos p/ construtor

const escolaA = new Senai(603, 'Araraquara');
const escolaB = new Senai(145, 'São Carlos');
const escolaC = new Senai(545, 'Américo Brasiliense');

escolaA.dadosEscola();
escolaB.dadosEscola();
escolaC.dadosEscola();
