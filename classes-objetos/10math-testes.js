// 1. Introdução ao Objeto Math
console.log(Math.PI);  // Valor de Pi
console.log(Math.SQRT2);  // Raiz quadrada de 2





// 2. Arredondamento de Valores
console.log(Math.round(4.4)); // Arredonda para o mais próximo (5)
console.log(Math.floor(4.6)); // Arredonda para baixo (4)
console.log(Math.ceil(4.1)); // Arredonda para cima (5)




//Escreva uma Função anônima para arredondar troco para múltiplo de 5 centavos

const arredondarTroco = valor => Math.round(valor * 20) / 20;
console.log(arredondarTroco(2.17));



// 3. Valores Aleatórios
console.log(Math.random()); // Número entre 0 e 1

// Escreva uma função anônima para gerar um número aleatório entre 1 e 10

const numeroSorteado = () => Math.floor(Math.random() * 10)+1;

// Escreva uma função anônima para simular uma rolagem de um dado de 6 lados

const rolarDado = () => Math.floor(Math.random() * 6) + 1;
console.log(rolarDado());

// 4. Potência, Raiz Quadrada e Módulo
console.log(Math.pow(2, 3)); // Potência 2³ = 8
console.log(2 ** 3); // Alternativa mais moderna
console.log(Math.sqrt(25)); // Raiz quadrada de 25 = 5
console.log(Math.abs(-50)); // Valor absoluto de -50 = 50



// Escreva uma função que calcule um montante em juros compostos
const calcularMontante = (capital, taxa, meses) => capital * Math.pow(1 + taxa, meses);
console.log(calcularMontante(1500, 0.0, 5)); // Montante final


// 5. Encontrando o Maior e Menor Número
console.log(Math.max(25, 32, 64, 27)); // Maior número (32)
console.log(Math.min(25, 32, 19, 27)); // Menor número (19)

// // Escreva uma função anônima para determinar temperatura máxima e mínima da semana
// const temperaturas = [22, 18, 25, 30, 21, 19, 27];
// console.log(Math.max(...temperaturas)); // 30
// console.log(Math.min(...temperaturas)); // 18


// 6. Crie uma função anônima para verificar se números aleatórios entre 1 e 100  é Par ou Ímpar


// const numeroAleatorioParOuImpar = () => {
//     let numero = Math.floor(Math.random() * 100) + 1;

//     if (numero % 2 === 0){
//         console.log(`Número: ${numero} Par.`)

//     }else{
//         console.log(`Número: ${numero} Impar.`)
//     };
       
// };
// numeroAleatorioParOuImpar();


// // Utilizando o IF ternário (antes do ? é teste lógico, antes do : Verdadeiro, depois do : Falso) e parâmetros
// const numeroAleatorioParOuImpar = (num) => {
//     let numero = Math.floor(Math.random() * num) + 1;
//     console.log(`Número: ${numero} - ${numero % 2 === 0 ? "Par" : "Ímpar"}`);
// };

// numeroAleatorioParOuImpar(100);



// //---------------------------- CÓDIGO REDUZIDO

// // Utilizando o IF ternário (antes do ? é teste lógico, antes do : Verdadeiro, depois do : Falso) e parâmetros
// const numeroAleatorioParOuImpar = (num) => Math.floor(Math.random() * num) + 1;

// console.log(`Número: ${numeroAleatorioParOuImpar()} - ${numeroAleatorioParOuImpar() % 2 === 0 ? "Par" : "Ímpar"}`);

