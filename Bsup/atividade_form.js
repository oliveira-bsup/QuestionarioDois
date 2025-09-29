function finaliza(){
    
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const email = document.getElementById('email').value;
    const Confsenha = document.getElementById('conf_senha').value;
        
    if (senha === '' || Confsenha === '') {
        window.alert('É necessário preencher os dois campos de senha.');
    }
    else if (senha !== Confsenha) {
        window.alert('As senhas precisam ser iguais. Por favor, digite novamente.');
    }
    else{
        infor();
    }

}



function infor(){
        window.alert('Formulário enviado!');
        document.getElementById('nomeform').innerHTML = nome;
        document.getElementById('emailform').innerHTML = email;
        document.getElementById('senhaform').innerHTML = senha;
        document.getElementById('confsenhaform').innerHTML = senha;

}
