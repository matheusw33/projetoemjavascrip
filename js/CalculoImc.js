let pacientes = document.querySelectorAll(".paciente");

for( let i = 0; i < pacientes.length; i++){

    paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc");
    
    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);

    if(!validaPeso(peso)){
        tdPeso.textContent = "Peso inválido!";
        tdImc.textContent = "Erro!";
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
    }
    if(!validaAltura(altura)){
        tdAltura.textContent = "Altura inválida!";
        tdImc.textContent = "Erro!";
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
    }
    if(pesoValido && alturaValida){
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    let imc = peso / (altura*altura);
    return imc.toFixed(2);
}

function validaPeso(peso){

    if(peso >= 0 && peso <= 500){
        return true;
    }else{
        return false;
    }
}
function validaAltura(altura){

    if(altura >= 0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}