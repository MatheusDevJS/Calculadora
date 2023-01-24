function insert(x) {
   var numero = document.getElementById('resultado').innerHTML;  //innerHTML = x
   document.getElementById('resultado').innerHTML = numero + x  //Fazendo um número ficar ao lado do outro
}


function clean() { //clean nome da function para limpar a calculadora
    document.getElementById('resultado').innerHTML =  ''
}

function apagar() {
    var res = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = res.substring(0, res.length - 1) //Pega todos os caracteres que temos dentro da calculadora e vai diminuir um 
}
 
function calcular() {
    var res = document.getElementById('resultado').innerHTML;

    if(res) {
        document.getElementById('resultado').innerHTML = eval(res) //eval serve para resolver todas as nossas operações dentro de 'resultado'
    } else {
        alert("Nada para calcular")
    }
}
