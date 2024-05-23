let numero1 = document.querySelector ("#numero1");
let numero2 = document.querySelector("#numero2");
let btSomar = document.querySelector("#btSomar");
let resultado = document.querySelector("#resultado");

function calcularvalor(){
    let valor1 = Number(numero1.value);
    let valor2 = Number(numero2.value);

    //fazer multiplicação
   let Resultado = valor1 * valor2;

   //exibir na tela
    resultado.textContent = "Total:" + Resultado.toFixed(2);
}

btSomar.onclick = function(){
    calcularvalor();
}