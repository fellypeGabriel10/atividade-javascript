function encontrarMenorValor() {
    
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let valor3 = parseFloat(document.getElementById("valor3").value);
    let valor4 = parseFloat(document.getElementById("valor4").value);

    // Encontrar o menor valor
    let menorValor = Math.min(valor1, valor2, valor3, valor4);

   
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<p>O menor valor é: " + menorValor + "</p>";
}
