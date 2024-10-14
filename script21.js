let numeroConta = prompt("Digite o número da conta do cliente:")
    let saldo = parseFloat(prompt("Digite o saldo:"))
    let debito = parseFloat(prompt("Digite o valor do débito:"))
    let credito = parseFloat(prompt("Digite o valor do crédito:"))

    // Calculando o saldo atual
    let saldoAtual = saldo - debito + credito

    // Exibindo o saldo atual
    console.log(`Saldo atual da conta ${numeroConta}: R$ ${saldoAtual.toFixed(2)}`)

    // Verificando se o saldo é positivo ou negativo
    if (saldoAtual >= 0) {
        console.log("Saldo Positivo")
    } else {
        console.log("Saldo Negativo")
    }