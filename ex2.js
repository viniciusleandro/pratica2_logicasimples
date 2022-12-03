// Crie três variáveis JavaScript, em duas delas atribua os valores que
// você quiser e na outra atribua o valor da soma das duas primeiras
// variáveis. Apresente valor da soma no documento html junto da
// frase "A resultado da soma de x e y é z", sendo x o valor armazenado
// na primeira variável, y o valor armazenado segunda variável e z o
// valor armazenado na terceira variável

let numero1 = parseFloat(prompt("digite o primeiro numero a ser somado"));
let numero2 = parseFloat(prompt("digite o segundo o numero a ser somado"));
let soma = numero1 + numero2;

document.write("o resultado da soma de " + numero1 +" e " + numero2 + " é igual a " + soma)