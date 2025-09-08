"use strict";

const abrir = document.querySelector('#criarcv');
const popuptitulo = document.querySelector('#popuptitulo');
const btnppcriar = document.querySelector('#btnppCriar');
const btnppfechar = document.querySelector('#btnppCancelar');
const inputpopup = document.querySelector('#inputpopup');
const popup = document.querySelector('#popup');


const modelocv = document.querySelector('#modelocv');
const curriculo = document.querySelector('#curriculo');

const formacoesContainer = document.querySelector('#formacoesContainer');
const cursosContainer = document.querySelector('#cursosContainer');
const btnAddFormacao = document.querySelector('#addFormacao');
const btnAddCurso = document.querySelector('#addCurso');




btnAddFormacao.addEventListener('click', () => {
  const input = document.createElement('input');
  input.placeholder = 'Digite sua formação acadêmica';
  input.classList.add('formacaoInput');
  formacoesContainer.appendChild(input);
});

btnAddCurso.addEventListener('click', () => {
  const input = document.createElement('input');
  input.placeholder = 'Digite seu curso complementar';
  input.classList.add('cursoInput');
  cursosContainer.appendChild(input);

});




abrir.addEventListener("click", () => {
  if (modelocv) {
    modelocv.style.display = 'block';
  }
  popup.style.display = 'flex';

  btnppfechar.onclick = () => {
    popup.style.display = 'none';
  }

});



btnppcriar.addEventListener("click", (event) => {
  let nome = document.querySelector('#nome').value;
  let objetivo = document.querySelector('#objetivo').value;
  let endereco = document.querySelector('#endereco').value;
  let email = document.querySelector('#email').value;
  let telefone = document.querySelector('#telefone').value;
  let sobre = document.querySelector('#sobre').value;
  let linkedin = document.querySelector('#linkedin').value;

  let formacoes = [];
  let inputsFormacao = document.querySelectorAll('.formacaoInput');
  for (let i = 0; i < inputsFormacao.length; i++) {
    formacoes.push(inputsFormacao[i].value);
  }

  let cursos = [];
  let inputsCursos = document.querySelectorAll('.cursoInput');
  for (let i = 0; i < inputsCursos.length; i++) {
    cursos.push(inputsCursos[i].value);
  }


  let listaFormacoes = '';
  for (let i = 0; i < formacoes.length; i++) {
    listaFormacoes += `<li class="info-titulos">${formacoes[i]}</li>`;
  }
  let listaCursos = '';
  for (let i = 0; i < cursos.length; i++) {
    listaCursos += `<li class="info-titulos">${cursos[i]}</li>`;
  }




  if (modelocv) {
    modelocv.style.display = 'none';
  }


  alert(`Informações iniciais:\nNome: ${nome}\nObjetivo: ${objetivo}\nEndereço: ${endereco}\nEmail: ${email}\nTelefone: ${telefone}`);
  curriculo.innerHTML = ` 
      <div class="modelo-curriculo">
            <div class="titulo">
            <h1>${nome}</h1>
            <h2>${objetivo}</h2>
        </div>
         <div class="info">
            <p class="info-titulos">Endereço:${endereco}</p>
            <p class="info-titulos">Telefone:${telefone}</p>
            <p class="info-titulos">Email:${email}</p>
            <p class="info-titulos">Linkedin: <a> ${linkedin}</a></p>
        </div>
          <div>
            <h1 class="modelo-titulo">Sobre Mim</h1>
            <p class="info-titulos">${sobre}</p>
        </div>
            <div>
            <h1 class="modelo-titulo">Formação Acadêmica </h1>
            <ul>${listaFormacoes}</ul>
            </div>
            <div>
            <h1 class="modelo-titulo"> Cursos Complementares </h1>
            <ul>${listaCursos}</ul>
        </div>
        </div>
      <div>
      `
  popup.style.display = 'none';

  event.preventDefault();


});









