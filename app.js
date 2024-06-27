let listNumSort=[];
let limNum=10;
let numeroSecreto=gerarNumeroAleatório();
let tentativas=1;

//let titulo=document.querySelector('h1');
//titulo.innerHTML='Jogo do Number Secreto';

//let parag=document.querySelector('p');
//parag.innerHTML='Selecione um número de 1 a 10';

function exibirTexto(tag,texto){
    let campo=document.querySelector(tag);
    campo.innerHTML=texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagem(){
    exibirTexto('h1','Jogo do Número Secreto');
    exibirTexto('p','Selecione um número de 1 a 10');
}

exibirMensagem();

function verificarChute() {
    let chute=document.querySelector('input').value;

    if (chute==numeroSecreto){
        let tentavivaas=tentativas>1? 'tentativas':'tentativa';
        let mensagemTentativas=`Parabéns, você acertou o número secreto com ${tentativas} ${tentavivaas}!!!`;

        exibirTexto('h1','CORRETO!!!');
        exibirTexto('p',mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute<numeroSecreto){
            exibirTexto('h1','ERRADO');
            exibirTexto('p','O número secreto é MAIOR que este');
        } else {
            exibirTexto('h1','ERRADO');
            exibirTexto('p','O número secreto é MENOR que este');
    }
    tentativas++
}
}

function gerarNumeroAleatório() {
    let numEscolhido=parseInt(Math.random()*limNum+1);
    let qntElmnList=listNumSort.length;
    if(qntElmnList==limNum){
        listNumSort=[];
    }
    if(listNumSort.includes(numEscolhido)){
        return gerarNumeroAleatório();
    }else{
        listNumSort.push(numEscolhido);
        console.log(listNumSort);
        return numEscolhido;
    }

}

function limparCampo(){
    chute=document.querySelector('input');
    chute.value='';
}

function reiniciarJogo(){
    numeroSecreto=gerarNumeroAleatório();
    limparCampo();
    tentativas=1;
    exibirMensagem();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
