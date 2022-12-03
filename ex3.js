let compra1 = parseFloat(prompt("digite o valor total da compra"));
let parcelas = parseInt(prompt("digite o numero de parcelas"));
let valorParcela = compra1 / parcelas;

document.write("O valor total da compra foi de: R$ " + compra1 + "<br>")
document.write(`Forma de pagamento ${parcelas}x de R$:${valorParcela.toFixed(2)}`)