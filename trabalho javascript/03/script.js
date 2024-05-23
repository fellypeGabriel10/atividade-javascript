let saldoInput = document.querySelector("#saldo");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularReajuste() {
    let saldo = Number(saldoInput.value); 
    let reajuste = saldo * 0.01;
    let saldoReajustado = saldo + reajuste; 

    // Exibir o saldo reajustado na tela
    resultado.textContent = "Saldo reajustado: " + saldoReajustado.toFixed(2);
}

btCalcular.onclick = function() {
    calcularReajuste(); 
}
