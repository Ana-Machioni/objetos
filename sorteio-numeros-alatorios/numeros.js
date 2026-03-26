// ==========================
//    ELEMENTOS DO HTML
// ==========================

// obter os elementos
const sliderMin = document.querySelector('.intervalo__slider--min');
const sliderMax = document.querySelector('.intervalo__slider--max');
// aqui você está "pegando" os elementos do HTML (os sliders)
// um é o mínimo e o outro é o máximo

// pega o botão de sortear do HTML
const botaoSortear = document.querySelector('.area__button');
// aqui você pega o botão de sortear para depois colocar um evento de clique nele
console.log(botaoSortear);


// pega o lugar onde o número sorteado vai aparecer
const elementoNumero = document.querySelector('.area__numero');
console.log(elementoNumero);

// pega a lista onde vai mostrar os números já sorteados
const listaNumeros = document.querySelector('.historico__lista');

// pega o botão de limpar o histórico
const botaoLimparHistorico = document.querySelector('.sorteador__limpar');

// pega a área onde aparece mensagens na tela
const mensagem = document.querySelector('.area__mensagem')

// ==========================
// DEBUG (testes no console)
// ==========================

console.log(sliderMin, sliderMax);
// isso mostra no console se os sliders foram encontrados corretamente

// ==========================
//         FUNÇÕES
// ==========================

const atualizarValorSlider = () => {
    // criando uma função chamada atualizarValorSlider

    const min = Number(sliderMin.value);
    const max = Number(sliderMax.value);
    // aqui você pega o valor dos sliders
    // e transforma em número (porque vem como texto por padrão)

    console.log(min, max);
    // mostra no console os valores atuais dos sliders

    // exibir o valor do slider na interface
    document.querySelector('.intervalo__valor--min').textContent = min;
    document.querySelector('.intervalo__valor--max').textContent = max;
    // aqui você pega elementos do HTML e coloca os valores dos sliders neles
    // ou seja: atualiza o número que aparece na tela
};

// função para gerar um número aleatório 
const gerarNumeroAleatorio = (min, max) => {
    // gera um número aleatório inteiro entre min e max
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1));
    numeroAleatorio += min;
    return numeroAleatorio;

};

// função para atualizar texto
const atualizarTexto = (elemento, valor) => {
    // pega um elemento do HTML e troca o texto dele
    elemento.textContent = valor;
};

// função para criar o lista de números sorteados
const criarItemHistorico = (numero) => {
    // cria um <li> (item de lista)
    const li = document.createElement('li');

    // coloca o número dentro do <li>
    li.textContent = numero;

    // quando clicar no número...
    li.addEventListener('click', () => {
        // copia o número para a área de transferência (ctrl+c automático)
        navigator.clipboard.writeText(numero);
    });

    // retorna o <li> pronto
    return li;
};

// função para gerenciar a lista de números sorteados
const atualizaHistorico = (lista, item, limite) => {
    // adiciona o novo item no começo da lista
    lista.prepend(item);

    // se passar do limite
    if (lista.children.length > limite) {
        // remove o último item da lista
        lista.removeChild(lista.lastChild);
    }
};

// função para limpar o histórico
const limparHistorico = () => {
    if (confirm('tem certeza que deseja limpar o histórico? (,,>﹏<,,)')) {
        // se o usuário confirmar, limpa a lista
        listaNumeros.textContent = '';
        // e coloca o número sorteado de volta para 0
        elementoNumero.textContent = '0';
    }
};


// ==========================
//        EVENTOS
// ==========================

// aqui você coloca os eventos, ou seja, o que acontece quando o usuário interage com a interface
botaoSortear.addEventListener('click', () => {
    // quando clicar no botão de sortear, executa essa função
    const min = Number(sliderMin.value);
    const max = Number(sliderMax.value);

    // aqui vai verificar se o mínimo é maior que o máximo
    if (min > max) {
        mensagem.textContent - 'o valor mínimo deve ser menor ou igual ao valor máximo';
        return;
    }
    // aqui é se o mínimo for maior que o máximo, mostra uma mensagem de erro e para a função (return)
    mensagem.textContent = '';
    const numeroSorteado = gerarNumeroAleatorio(min, max);
    atualizarTexto(elementoNumero, numeroSorteado);

    // atualizar o histórico de números sorteados
    const item = criarItemHistorico(numeroSorteado);
    atualizaHistorico(listaNumeros, item, quantidadeNumerosRecentes);

});

// isso serve para limpar o histórico quando clicar no botão de limpar
botaoLimparHistorico.addEventListener('click', limparHistorico);

// evento para atualizar o valor em tempo real
// quando mexer no slider mínimo, atualiza os valores
sliderMin.addEventListener('input', atualizarValorSlider);

// quando mexer no slider máximo, atualiza os valores
sliderMax.addEventListener('input', atualizarValorSlider);
// resumindo //
// mexeu no slider => atualiza na tela
