function finaliza(){
    
    const nome = document.getElementById('nome').value;
    document.getElementById('nomeform').innerHTML = nome;

    const email = document.getElementById('email').value;
    document.getElementById('emailform').innerHTML = email;

    //Senha e Verifição:
    const senha = document.getElementById('senha').value;
    document.getElementById('senhaform').innerHTML = senha;

    const Confsenha = document.getElementById('conf_senha').value;
    document.getElementById('confsenhaform').innerHTML = senha;
    
    if (senha == ''){
        window.alert('O campo nao pode ser vazio')
    }
    

    if(senha !== Confsenha){
        window.alert('Digite novamente \nSenhas Precisam ser iguais')
        

    }

    else if (senha && Confsenha == ''){
        window.alert('É necessario preencher o campo de senhas')
    }

    else{
        window.alert('Formulario Enviado')
    }

}


