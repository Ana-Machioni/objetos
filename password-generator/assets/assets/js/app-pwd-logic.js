/* seleciona os elementos do DOM usando o metodo querySelector, que retorna o primeiro 
elemento que corresponde ao selector CSS especificado */
const sliderElement = document.querySelector('.app-pwd__slider'); //elemento do controle deslizamte
const buttonElement = document.querySelector('.app-pwd__button'); //botao de gerar senha
const clearButton = document.querySelector('.app-pwd__button--clear'); //botao para limpar o historico de senhas 
const sizePassword = document.querySelector('.app-pwd__size'); //elemento que mostra o tamanho da senha
const password = document.querySelector('.app-pwd__output'); //elemento que exibe a senha gerada
const containerPassword = document.querySelector('.app-pwd__result'); //container da senha gerada
const welcomeElement = document.querySelector('.app-pwd__welcome'); //elemento de saudacao
const datetimeElement = document.querySelector('.app-pwd__datetime'); //elemento de data e hora






/*objeto que contem os conutos de caracteres possiveis para a ageracao de senha
Cada prorpiedade representa um tipo diferente de caractere */
const charsets = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', //letras maiusculas
    lowercase: 'abcdefghijklmnopqrstuvwxyz', //letras minusculas
    numbers: '0123456789', //numeros
    special: '!@#$%&*' //caracteres especiais
};



/* variaveis para armazenas a senha atual e o historico de senhas */
let novaSenha = ''; //armazena a senha atual gerada
let historicoSenhas = []; //array para armazenar os ultimos senhas geradas

/* funcao que retorna uma saudacao baseada na hora atual do dia
Utiliza o mtodo getHours() do objeto Date para obter a hora atual (0-23) */
const getSaudacao = () => {

    const hora = new Date().getHours();
    /**
   * Regras da saudação:
   * 00:00 - 11:59 -> Bom dia
   * 12:00 - 17:59 -> Boa tarde
   * 18:00 - 23:59 -> Boa noite
   */

    if (hora < 12) return 'Bom dia';
    if (hora < 18) return 'Boa tarde';
    return 'Boa noite';
};

/*funcao que formata a data e hora atual em um formato legivel
Ultiliza varios metodos do objeto Date p obter os componentes da data */
const formatarDataHora = () => {
    /** cria um objeto com a data e hr atual */
    const agora = new Date();

    /** array c os nomes dos dias a semana */
    const diasSemana = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ];

    /** obtem o dia da semana */
    const diaSemana = diasSemana[agora.getDay()];

    /** dados da data */
    const dia = agora.getDate().toString().padStart(2, '0');
    const mes = (agora.getMonth() + 1).toString().padStart(2, '0');
    const ano = agora.getFullYear();

    /**
     * hora como numero (para logica, se necessario no futuro)
     * aqui usamos apenas para formatacao
     */
    const hora = agora.getHours().toString().padStart(2, '0');
    const minuto = agora.getMinutes().toString().padStart(2, '0');
    const segundo = agora.getSeconds().toString().padStart(2, '0');

    /** Retorna apenas a data e hora (sem saudacao) */
    return `${diaSemana}, ${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;

}

/* funcao que atualiza o cabeçalho com a saudacao e a data/hora atual */
const atualizarHeader = () => {
    welcomeElement.textContent = `${getSaudacao()}!`;
    datetimeElement.textContent = formatarDataHora();
};

/* atualizar header a cada segundo */
setInterval(atualizarHeader, 1000);

/* inicializar header */
atualizarHeader();


/* exibe inicialmente o valor  do slider */
sizePassword.textContent = sliderElement.value;

/* atualiza o valor exibido do tamanho da snha conforme o slider é movimentado */
sliderElement.addEventListener('input', (e) => {
    sizePassword.textContent = e.target.value;
});



/* funca princpla p gerar a senha */
const generatePassword = () => {

    let selectedCharset = ''; //string que armazenara todos os caracteres possiveis p a senha

    /* obter os checkboxes selecionados */
    const uppercaseChecked = document.querySelector('.uppercase-check').checked;
    const lowercaseChecked = document.querySelector('.lowercase-check').checked;
    const numbersChecked = document.querySelector('.numbers-check').checked;
    const specialChecked = document.querySelector('.special-check').checked;


    /* construir o charset baseado nas opcoes selecionadas */
    if (uppercaseChecked) selectedCharset += charsets.uppercase;
    if (lowercaseChecked) selectedCharset += charsets.lowercase;
    if (numbersChecked)  selectedCharset += charsets.numbers;
    if (specialChecked)  selectedCharset += charsets.special;

    /* se nenhuma opcao estiver selecionada, selecionar todos */
    if (!selectedCharset) {
        selectedCharset = Object.values(charsets).join('');
        console.log(selectedCharset);
        document.querySelector('.uppercase-check').checked = true;
        document.querySelector('.lowercase-check').checked = true;
        document.querySelector('numbers-check').checked = true;
        document.querySelector('.special-check').checked = true;
    }

    //inicializa uma string vazia para armaznar a senha gerada
    let pass = '';

    /* loop que itera pelo numero de caracteres definido no slide 
    Usa operador de incremento (++) para aumentar  o contdor */

    for (let i = 0; i < sliderElement.value; ++i) {
        /* add um caractere aleatorio a senha:
         */

        pass += selectedCharset.charAt(Math.floor(Math.random() * selectedCharset.length));

    }
    /*  remove a claasse 'hide'*/
    containerPassword.classList.remove('hide');

    password.textContent = pass;

    novaSenha = pass;

    historicoSenhas.unshift(pass);

    if (historicoSenhas.length > 3) {
        historicoSenhas.pop()
    }

    const historico = document.querySelector('.app-pwd__history');
    if (historico) {

        historico.style.display = 'block';


        historico.querySelector('.app-pwd__history-list').innerHTML = historicoSenhas
            .map(senha => `<li class="app-pwd__history-item">${senha}</li>`)
            .join('');

    }

};

/* funcao para copiar a senha gerada p a area de transferencia */
const copyPassword = () => {
    alert('senha copiada com sucesso!'); //exibe um alerta de sucesso
    navigator.clipboard.writeText(novaSenha); //copia a senha usando a API 
};

/* adicionar os event listeners para os eventos de clique */
buttonElement.addEventListener('click', generatePassword);  //gera nova senha
containerPassword.addEventListener('click', copyPassword);  //copia nova senha

/* funcao p limpar os dados e esconer os containers */
const clearData = ()  => {
    // limpar o historico de senhas
    historicoSenhas= [];
    novaSenha = '';

    /* esconder os containers */
    containerPassword.classList.add('hide');
    const historico = document.querySelector('.app-pwd__history');
    if (historico) {
        historico.style.display = 'none';
    }

    /* reseta os checkboxes para o estado inicial (marcados) */
    document.querySelector('.uppercase-check').checked = true;
    document.querySelector('.lowercase-check').checked = true;
    document.querySelector('.numbers-check').checked = true;
    document.querySelector('.special-check').checked = true;

    /* reseta o slider para ovalor inicial */
    sliderElement.value = 8;
    sizePassword.textContent = '8';

};   

/* adiciona o event listener p o botao de limpar */
clearButton.addEventListener('click', clearData);