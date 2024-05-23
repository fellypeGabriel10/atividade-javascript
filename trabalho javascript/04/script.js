function calcularMedias() {
   
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);

    // Calculando a média aritmética
    let mediaAritmetica = (num1 + num2 + num3) / 3;

    // Calculando a média ponderada
    let mediaPonderada = (num1 * 3 + num2 * 2 + num3 * 5) / (3 + 2 + 5);

    // Calculando a soma das duas médias
    let somaMedias = mediaAritmetica + mediaPonderada;

    // Calculando a média das médias
    let mediaDasMedias = somaMedias / 2;

    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<p>Média Aritmética: " + mediaAritmetica.toFixed(2) + "</p>";
    resultadoDiv.innerHTML += "<p>Média Ponderada: " + mediaPonderada.toFixed(2) + "</p>";
    resultadoDiv.innerHTML += "<p>Soma das Médias: " + somaMedias.toFixed(2) + "</p>";
    resultadoDiv.innerHTML += "<p>Média das Médias: " + mediaDasMedias.toFixed(2) + "</p>";
}
