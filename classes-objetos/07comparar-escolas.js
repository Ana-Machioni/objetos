// lembrete: uma classe pode calcular informaçoes sozinhas(como a idade) sem que o usuario precise digitar
class Senai{
    constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
        this.codigo = codigo;
        this.cidade = cidade;
        this.anoConstruçao = anoConstrucao;
        this.qtdeCursos = qtdeCursos;

        // js moderno: calculando a idade com base no ano atual do sistema
        this.idade = new Date().getFullYear() - anoConstrucao;
    }

    dadosEscola() {
        console.log(`\n=== RELATÓRIO DE CADASTRO: ${this.cidade.toUpperCase()} ===`);
        console.log(`- Código: ${this.codigo}`);
        console.log(`- Fundação: ${this.anoConstruçao} (${this.idade} anos de história)`);
        console.log(`Capacidade: ${this.qtdeCursos} cursos ativos.`);
        console.log(`=========================================\n`);
    }
}

/* funcao de comparaçao: recebe dois objetos como parametros 
    melhoria: adicionando tratamento para casos de quantidades iguais

*/
const compararEscola = (e1, e2) => {
    console.log(`> Comparando oferta de cursos: ${e1.cidade} vs ${e2.cidade}...`)

    if (e1.qtdeCursos > e2.qtdeCursos) {
        console.log(`Resultado: O SENAI ${e1.cidade} possui mais cursos.`);
    } else if (e2.qtdeCursos > e1.qtdeCursos) {
        console.log(`Resultado: O SENAI ${e2.cidade} possui mais cursos.`)
    } else {
        console.log(`Resultado: Ambas as unidades possuem a mesma quantidade de cursos.`);
    }
    console.log(`Status: ${e1.cidade} (${e1.qtdeCursos}) | ${e2.cidade} (${e2.qtdeCursos})\n`);
}

