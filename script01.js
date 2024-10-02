// Mostrar o  nome do mês com base no número do mês

const nomeMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
]

const mes = Number(prompt("Informe o número do mês"))

if (mes > 0) {
    console.log(nomeMeses[mes - 1])

}
else {
    console.log("Mes inválido")
}


