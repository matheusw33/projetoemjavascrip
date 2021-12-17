let addPaciente = document.querySelector("#adicionar-paciente");

addPaciente.addEventListener('click', function(event){
    event.preventDefault();
    let form = document.querySelector("#form-adiciona");

    let paciente = infoPacienteDaTabela(form);    

    adicionaPacienteNaTabela(paciente);    

    let erros = validaPaciente(paciente);
    
    if(erros.length > 0){
        mensagensDeErro(erros);
        return;
    }

    form.reset();
    ulErro = document.querySelector("#mensagem-erro");
    ulErro.innerHTML = "";
})

function adicionaPacienteNaTabela(paciente){
    let pacienteTr = montaTr(paciente);
    var AdicionarTabela = document.querySelector("#tabela-pacientes");
    AdicionarTabela.appendChild(pacienteTr);
}

function mensagensDeErro(erros){
    let ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function infoPacienteDaTabela(form){

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){

    pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    let tdNome = montaTd(paciente.nome, "info-nome");
    let tdPeso = montaTd(paciente.peso, "info-peso");
    let tdAltura = montaTd(paciente.altura, "info-altura");
    let tdGordura = montaTd(paciente.gordura, "info-gordura");
    let tdImc = montaTd(paciente.imc, "info-imc");

    tdNome.textContent = paciente.nome;
    tdPeso.textContent = paciente.peso;
    tdAltura.textContent = paciente.altura;
    tdGordura.textContent = paciente.gordura;
    tdImc.textContent = paciente.imc;

    pacienteTr.appendChild(tdNome);
    pacienteTr.appendChild(tdPeso);
    pacienteTr.appendChild(tdAltura);
    pacienteTr.appendChild(tdGordura);
    pacienteTr.appendChild(tdImc);

    return pacienteTr;
}

function montaTd(dado, classe){
    
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){

    let erros = [];

    if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido! ")
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida! ")
    }
    if(paciente.nome.length == 0){
        erros.push("O campo nome está vazio!")
    }
    if(paciente.gordura.length == 0){
        erros.push("O campo gordura está vazio!")
    }
    if(paciente.peso.length == 0){
        erros.push("O campo peso está vazio!")
    }
    if(paciente.altura.length == 0){
        erros.push("O campo altura está vazio!")
    }
    
    return erros;
}


