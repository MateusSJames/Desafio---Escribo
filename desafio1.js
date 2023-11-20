function somatorioDivisiveisPor3ou5(numero) {
    let somatorio = 0;

    for (let i = 1; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
        }
    }

    return somatorio;
}

// Exemplo de uso:
const numero = 10;
const resultado = somatorioDivisiveisPor3ou5(numero);
console.log(`O somatório dos valores divisíveis por 3 ou 5 até ${numero} é: ${resultado}`);