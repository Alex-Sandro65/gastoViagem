/* Faça um programa para calcular o valor de uma viagem.

    Você tera 3 variaveis sendo ela:
    1 - Preço do combustivel;
    2 - Gasto medio de combustivel do carro por km;
    3 - Distancia em km da viagem;

    Imprima no console o valor que sera gasto para realizar a viagem.
*/

    const precoCombustivel = 3.39;
    const kmPorLitro = 11;
    const distanciaKm = 800;

    const litrosConsumidos = distanciaKm / kmPorLitro;
    const valorgasto = litrosConsumidos * precoCombustivel;

    console.log(valorgasto);
        