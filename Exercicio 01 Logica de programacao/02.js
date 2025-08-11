const prompt = require('prompt-sync')();


let nome = prompt("Digite seu nome:");
let idade = parseInt(prompt("Digite sua idade:"));

function verificaIdade(){
    if (idade >= 18) {
        console.log(`${nome}, você é maior de idade.`);
    } else {
        console.log(`${nome}, você é menor de idade.`);
    }
}

verificaIdade();
