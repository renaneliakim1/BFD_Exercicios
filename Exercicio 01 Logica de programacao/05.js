const prompt = require('prompt-sync')();

let valor = parseFloat(prompt("Digite o valor da temperatura:"));
let escala = prompt("Digite a escala original (C para Celsius ou F para Fahrenheit):").toUpperCase();


function converterTemperatura(temp) {
    if (temp.escala === "C") {
        let convertido = temp.valor * 1.8 + 32;
        return `${temp.valor} °C = ${convertido.toFixed(2)} °F`;

    } else if (temp.escala === "F") {
        let convertido = (temp.valor - 32) / 1.8;
        return `${temp.valor} °F = ${convertido.toFixed(2)} °C`;

    } else {
        return "Escala inválida. Use 'C' para Celsius ou 'F' para Fahrenheit.";
    }
}


let resultado = converterTemperatura({ valor: valor, escala: escala });

console.log(resultado);
