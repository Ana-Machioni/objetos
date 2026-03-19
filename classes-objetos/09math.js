
// funcao anonima para gerar um numero entre 1 e 15 

// const gerarNumeroAleatorio = (numero) => {
//         // Math.random() gera um numero entre 0 e 1 (exclusivo)
//         let numeroAleatorio = Math.random();
//         console.log(`Sorteio: ${numeroAleatorio}`);

//         // multiplicamos por 15 para obter um numero entre 0 e 14 (exclusivo)
//         numeroAleatorio *= numero;
//         console.log(`Multiplicar: ${numeroAleatorio}`);

//         // Math.floor() para arredondar para baico para um numero inteiro
//         numeroAleatorio = Math.floor()(numeroAleatorio);
//         console.log(`Arredondar: ${numeroAleatorio}`);

//         // somamos 1 para obter um numero entre 1 e 13(exclusivo)
//         numeroAleatorio += 1;
//         console.log(`Somar 1: ${numeroAleatorio}`);

//         // retorna o numero aleatorio
//         return numeroAleatorio;
//     }

//     // atribuindo a fncao a uma variavel
//     let numeroSorteado = gerarNumeroAleatorio(20);

//     // exibindo o numero sorteado
//     console.log(`Numero sorteado: ${numeroSorteado}`);





// --------------------- codigo otimizado -------------------------
    const gerarNumeroAleatorioR = (min = 1, max = 15) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // exemplo de uso 
    console.log(gerarNumeroAleatorioR());
    console.log(gerarNumeroAleatorioR(10,15));