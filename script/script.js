const formulario = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
function cadastrarUsuario (event){
  event.preventDefault();
  if(!nome.value || !email.value) {
    mensagem.innerHTML  = 'Por favor preencha o email e seu nome corretamente!';
    return;
  }
  formulario.style.display = 'none';
  //document.getElementById('botaoEnviar').style.display = 'none';
  document.getElementById('titulo').innerHTML = `Obrigado, ${nome.value}!`;
  document.getElementById('subtitulo').innerHTML = 'Em breve você começara a receber nossa newlestter.'
}

function limparMensagem(event){
  mensagem.innerHTML  = '';
}
formulario.addEventListener('submit',cadastrarUsuario,false);
nome.addEventListener('keypress',limparMensagem,false);
email.addEventListener('keypress',limparMensagem,false);
