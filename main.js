let userN1 = document.getElementById('userN1')
let userN2 = document.getElementById('userN2')
let operador = document.getElementById('operador')
let calcButton = document.getElementById('calcular')
let resultadoDiv = document.getElementById('resultado')

calcButton.addEventListener('click', function() {
    let num1 = Number(userN1.value)
    let num2 = Number(userN2.value)
    let op = operador.value
    let resultado

    switch (op) {
        case '+':
            resultado = num1 + num2;
            break
        case '-':
            resultado = num1 - num2;
            break
        case '*':
            resultado = num1 * num2;
            break
        case '/':
            resultado = num1 / num2;        
            break
        default:
    }

    resultadoDiv.innerHTML = 'Resultado: ' + resultado
})

