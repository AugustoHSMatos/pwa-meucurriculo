"use strict";

const botao = document.querySelector('#criarcv');

botao.addEventListener('click', (e)=>{
   var nome = prompt('Digite seu nome:');
   var objetivo = prompt('Digite seu objetivo profissional:');
   
   var endereco = prompt('Digite seu endereço:');
   var email = prompt('Digite seu email:');   
   var telefone = prompt('Digite seu telefone:');

   resposta1= confirm('você possui LinkedIn?');
   if (resposta1==true) {
       var linkedin = prompt('Digite seu LinkedIn:');
   }
   
   qtdFormacao = confirm('Você possui formação acadêmica?');
   var formacao = adicionarFormacao(qtdFormacao);
   qntdCursos = confirm('Você possui cursos complementares?');
    var cursos = adicionarCursos(qntdCursos);
 

});


function adicionarFormacao(confrmacao) {    
  var formacao = [];
  if(confrmacao==true) {
   if (qtdFormacao==true) {
       var qtd = prompt('Digite a quantidade de formações acadêmicas que você possui:');
     
         for (var i = 0; i < qtd; i++) {
              formacao = prompt('Digite a formação acadêmica ' + (i + 1) + ':');
              formacao.push(formacao);
            }
       alert('Formações acadêmicas adicionadas com sucesso!');   
       
         return formacao;
   }

  } else {
    alert('Ok, nenhuma formação acadêmica será adicionada.');
    return formacao;
  }

  return formacao;
    
}

function adicionarCursos(confirmacao) {
    var cursos = [];
    if(confirmacao==true) {
     if (qtdCursos==true) {
         var qtd = prompt('Digite a quantidade de cursos complementares que você possui:'); 
              for (var i = 0; i < qtd; i++) {
                     curso = prompt('Digite o curso complementar ' + (i + 1) + ':');
                        cursos.push(curso);
                     }
            alert('Cursos complementares adicionados com sucesso!');
            return cursos;
        }
    } else {
        alert('Ok, nenhum curso complementar será adicionado.');
        return cursos;
    }
}