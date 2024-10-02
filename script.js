//while
//do/while
//for

// Crie uma lista com cinco nomes usando um while
//enquanto (condição verdadeira) faça alguma coisa


let numeroDeVezes = 0
while (numeroDeVezes < 5) {
    console.log("Passou aqui")
    numeroDeVezes = numeroDeVezes + 1
}
//lista, array, vetor, matriz
//lista, array ou vetor
let lista = ['Banana', 'Maça', 'Kiwi', 'Morango', 'Uva', 'Abacaxi']
//matriz
// let listaDeListas = [
//     ['banana', 'maça', 'kiwi', 'morangos', 'laranja'],
//     ['banana', 'maça', 'kiwi', 'morangos', 'laranja'],
//     ['banana', 'maça', 'kiwi', 'morangos', 'laranja']
// ]


//while
//cria uma variavel de contador
let posicao = 0
//Cria uma lista não ordenada
const listaEmTela = document.createElement("ol")

while (posicao < lista.length) {
    console.log(lista[posicao])
    const itemLista = document.createElement("li")
    itemLista.textContent = lista[posicao]
    listaEmTela.appendChild(itemLista)
    posicao = posicao + 1
}
document.body.appendChild(listaEmTela)

//do/while

// Comparação Truthy
// variavel != undefined
// variavel != null
// variavel > 0
// variavel = true

// Comparação Falsy
// variavel == undefined
// variavel == null
// variavel == 0
// variavel = true

let sexo

do {
    sexo = prompt("Informe seu sexo (M-Mascolino, F-Femenino: )")
}
while (sexo);

console.log(sexo)



// for -- para
//Usos do for: quando eu sei o tamanho da minha lista ou quantidade de vezes que eu vou executar a repetição
//Para uma variavel index que começa em 0, condição (enquanto o index < 0 tamanho da lista)
//Incremente em 1 a variavel index
//Index ++ é a  mesma coisa que index + 1
for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    console.log(`${index ++} + ${element}`)
}

//for Each

for (let item of lista) {
    console.log(element)
}




