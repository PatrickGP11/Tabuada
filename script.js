var body = document.querySelector("body")
var numero = Number(prompt("Digite um numero"))
for(var i = 1; i <= 10; i++) {
    body.innerHTML += `<p>${numero} x ${i} = ${numero * i}</p>`
}