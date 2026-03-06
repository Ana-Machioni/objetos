// metodo é uma funçao dentro de um objeto
const senai = {
    codigo: 603,
    cidade: 'Araraquara',
    cidade: 'Sao Paulo',

    descreverEscola: () =>{
        // a palavra reservada this refere ao objeto nocontexto atual. É  usado para acessar propriedades e metodos do objeo corrente
        console.log(`O codigo ${senai.codigo} pertence 
            a Escola SENAI de ${this.cidade}.`)  
    }
};

senai.codigo = 608;
senai.cidade = 'Matão'
senai.descreverEscola()