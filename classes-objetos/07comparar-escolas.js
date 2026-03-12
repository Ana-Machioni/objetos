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