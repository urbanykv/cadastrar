const nome = document.querySelector('#nome');
const dataNascimento = document.querySelector('#dataN');
const email = document.querySelector('#email');
const ecivil = document.querySelector('#ecivil');
const buttonEnviar = document.querySelector('#enviar');
const listaCadastrados = document.querySelector('ul')



const buttonRemover = document.createElement('button')

let pessoasCadastradas = JSON.parse(localStorage.getItem('pessoasCadastradas')) || [];

function remover(){

}

function renderizar(){
    listaCadastrados.innerHTML = '';

    for(let pessoa of pessoasCadastradas){
    const itemLista = document.createElement('li');

    const pNome = document.createElement('p')
    const pData = document.createElement('p')
    const pEmail = document.createElement('p')
    const pEcivil = document.createElement('p')

    const textoNomeRender = document.createTextNode('Nome Completo: ' + pessoa.nome)
    const textoDataRender = document.createTextNode('Data de Nascimento: ' + pessoa.dataNascimento)
    const textoEmailRender = document.createTextNode('Email: ' + pessoa.email)
    const textoEcivilRender = document.createTextNode('Estado Cívil: ' + pessoa.estadoCivil)

    pNome.appendChild(textoNomeRender);
    pData.appendChild(textoDataRender);
    pEmail.appendChild(textoEmailRender);
    pEcivil.appendChild(textoEcivilRender);

    itemLista.appendChild(pNome)
    itemLista.appendChild(pData)
    itemLista.appendChild(pEmail)
    itemLista.appendChild(pEcivil)
    listaCadastrados.appendChild(itemLista);
    }
    salvarDadosNoStorage()
}
renderizar()

buttonEnviar.addEventListener('click', function(){
    if(nome.value !== '' && dataNascimento.value !== 'dd/mm/aaaa' && email.value !== '' && ecivil.value !== 'sel'){
        let cadastroNovo = {}
        cadastroNovo.nome = nome.value;
        cadastroNovo.dataNascimento = dataNascimento.value;
        cadastroNovo.email = email.value;
        cadastroNovo.estadoCivil = ecivil.value;
        pessoasCadastradas.unshift(cadastroNovo)
        console.log(pessoasCadastradas);
        renderizar()
        nome.value = '';
        dataNascimento.value = '';
        email.value = '';
        ecivil.value = '';
    }else{
        
    }
    salvarDadosNoStorage()
})

console.log(pessoasCadastradas[0]);

function salvarDadosNoStorage(){
    localStorage.setItem('pessoasCadastradas', JSON.stringify(pessoasCadastradas))
}

console.log(JSON.stringify(pessoasCadastradas));