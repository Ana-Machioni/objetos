// 1. Objeto de Estilos (Dicionário CSS)
const temas = {
    corpo: {
        backgroundColor: '#121212',
        color: '#00ff99',
        fontFamily: "'Courier New', Courier, monospace",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: '0',
        textShadow: '0 0 10px rgba(0, 255, 153, 0.5)'
    },
    boasVindas: {
        fontSize: '24px',
        marginBottom: '10px',
        textTransform: 'uppercase',
        letterSpacing: '2px'
    },
    relogio: {
        fontSize: '100px',
        fontWeight: 'bold'
    },
    dataInfo: {
        fontSize: '20px',
        marginTop: '10px',
        color: '#ffffff',
        opacity: '0.8'
    }
};

// 2. criacao dos elementos 
const elBoasVindas = document.createElement('div');
const elRelogio = document.createElement('div');
const elDataCompleta = document.createElement('div');

// 3. funcao p aplicar estilo ao obj
function aplicarEstilos(elemento, estilo) {
    Object.assign(elemento.style, estilo);
}

//4. logica de atualizacao 
function atualizarPainel() {

    const agora = new Date();

    //saudacao baseada na hora
    const horaAtual = agora.getHours();
    let saudacao = "Boa noite";
    if (horaAtual < 12) saudacao = "Bom dia";
    else if (horaAtual < 18) saudacao = "Boa tarde";

    //dia d semana por extenso
    const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const dataFormatada = agora.toLocaleDateString('pt-BR', opcoes);

    //inserindo textoa
    elBoasVindas.textContent = `Olá, ${saudacao}!`;
    elRelogio.textContent = agora.toLocaleDateString('pt-BR');
    elDataCompleta.textContent = dataFormatada;

}

//5. inicializacao
aplicarEstilos(document.body, temas.corpo);
aplicarEstilos(elBoasVindas, temas.boasVindas);
aplicarEstilos(elRelogio, temas.relogio);
aplicarEstilos(elDataCompleta, temas.dataInfo);

//add ao DOM
document.body.append(elBoasVindas, elRelogio, elDataCompleta);

// rodar
setInterval(atualizarPainel, 1000);
atualizarPainel();