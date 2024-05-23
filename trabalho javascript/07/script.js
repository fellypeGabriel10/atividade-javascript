function verificarImpar() {
    
    let numero = parseInt(document.getElementById("numero").value);

    if (numero % 2 !== 0) {
        document.getElementById("resultado").innerHTML = "<p>O número " + numero + " é ímpar.</p>";
    } else {
        document.getElementById("resultado").innerHTML = "<p>O número " + numero + " não é ímpar.</p>";
    }
}
