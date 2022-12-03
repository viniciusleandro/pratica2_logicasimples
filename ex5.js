let aluno = prompt("digite o nome do aluno")
let nota1 = parseInt(prompt("digite a 1° nota do aluno"))
let nota2 = parseInt(prompt("digite a 2° nota do aluno"))
let nota3 = parseInt(prompt("digite a 3° nota do aluno"))
let media = (nota1 + nota2 + nota3) / 3

document.write(`O aluno ${aluno} ficou com média ${media}`)