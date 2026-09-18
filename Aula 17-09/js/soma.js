// 1. Captura os valores do usuário (Apenas funciona no Console do Navegador)
var a = parsefloat(prompt("Digite o valor de A: "));
var b = parsefloat(prompt("Digite o valor de B: "));

//2. Declara a função 
function somar(a, b) {
    return a + b;
}

// 3. CORREÇÃO: Você PRECISA passar 'a' e 'b' aqui dentro!
console.log(somar(a, b));