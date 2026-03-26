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
    if (hora < 18) return 'Boa noite';
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