let Calcular = document.getElementById("btn_calcular");


function calcImc()
{
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value / 100;
    let resultado = document.getElementById("resultado");

    //condição 
    if(altura != "" && peso != "")
    {
        let imc = (peso / (altura * altura)).toFixed(2);
        let mensagem = ""; 

        if(imc < 18.5){
            mensagem = "Você está magro!";
        }
        else if(imc < 25){
            mensagem = "Você está com o peso ideal!";
        }
        else if(imc < 30){
            mensagem = "Você está mcom sobrepeso!";
        }
        else if(imc < 35){
            mensagem = "Cuidado! Você está com Obesidade I";
        }
        else if(imc < 40){
            mensagem = "Cuidado! Você está com Obesidade II";
        }
        else{
            mensagem = "Cuidado! Você está com Obesidade III";
        }
        resultado.textContent = `Seu IMC é: ${imc}!\n ${mensagem}`
    }
    else
    {
        resultado.textContent = "Preencha todos os campos"
    }
}
Calcular.addEventListener('click', calcImc)