//instalar o pacote ' npm install prompt-sync ' antes de rodar o código

const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome:");

while (!nome || nome.trim() === "") {
  nome = prompt("Por favor, digite um nome válido:");
}

let idade = parseInt(prompt("Digite sua idade:"));

while (isNaN(idade) || idade.trim() === "" || parseInt(idade) < 0) {
  idade = prompt("Por favor, digite uma idade válida (número positivo):");
}

function verificaIdade() {
  if (idade >= 18) {
    console.log(`${nome}, você é maior de idade.`);
  } else {
    console.log(`${nome}, você é menor de idade.`);
  }
}

verificaIdade();
