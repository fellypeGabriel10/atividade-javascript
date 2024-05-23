function encontrarMaiorValor() {
    
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);

    let maiorValor;
    if (valor1 > valor2) {
        maiorValor = valor1;
    } else if (valor2 > valor1) {
        maiorValor = valor2;
    } else {
        maiorValor = "Os valores são iguais.";
    }

   
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<p>O maior valor é: " + maiorValor + "</p>";
}
