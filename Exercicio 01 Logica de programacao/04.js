function calculadora(a, b, operacao) {
    switch (operacao) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "Erro: divisão por zero não é permitida.";
            }
            return a / b;
        default:
            return "Operação inválida. Use +, -, * ou /.";
    }
}

console.log(calculadora(10, 5, "+"));
console.log(calculadora(10, 5, "-"));
console.log(calculadora(10, 5, "*"));
console.log(calculadora(10, 5, "/"));
console.log(calculadora(10, 0, "/"));
