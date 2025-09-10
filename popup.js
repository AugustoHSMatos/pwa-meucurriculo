"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const abrir = document.querySelector('#criarcv');
  const popup = document.querySelector('#popup');
  const btnppcriar = document.querySelector('#btnppCriar');
  const btnppfechar = document.querySelector('#btnppCancelar');
  const curriculo = document.querySelector('#curriculo');

  const formacoesContainer = document.querySelector('#formacoesContainer');
  const cursosContainer = document.querySelector('#cursosContainer');
  const btnAddFormacao = document.querySelector('#addFormacao');
  const btnAddCurso = document.querySelector('#addCurso');
  const btnBaixar = document.querySelector('#baixarCV');

  if (!abrir || !popup || !btnppcriar || !btnppfechar || !curriculo || !formacoesContainer || !cursosContainer || !btnAddFormacao || !btnAddCurso || !btnBaixar) {
    console.error('Algum elemento está faltando no DOM');
    return;
  }

  abrir.addEventListener("click", () => {
    popup.style.display = 'flex';
  });

  btnppfechar.addEventListener("click", () => {
    popup.style.display = 'none';
  });

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

  function validarCampos(campos) {
    let valido = true;
    campos.forEach(campo => {
      if (!campo.value.trim()) {
        campo.style.border = "2px solid red";
        valido = false;
      } else {
        campo.style.border = "";
      }
    });
    return valido;
  }

  btnppcriar.addEventListener("click", (event) => {
    event.preventDefault();

    const nome = document.querySelector('#nome');
    const objetivo = document.querySelector('#objetivo');
    const endereco = document.querySelector('#endereco');
    const email = document.querySelector('#email');
    const telefone = document.querySelector('#telefone');
    const sobre = document.querySelector('#sobre');
    const linkedin = document.querySelector('#linkedin');

    const campos = [nome, objetivo, endereco, email, telefone, sobre, linkedin];

    if (!validarCampos(campos)) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    const formacoes = Array.from(document.querySelectorAll('.formacaoInput'))
      .map(input => input.value)
      .filter(v => v.trim());

    const cursos = Array.from(document.querySelectorAll('.cursoInput'))
      .map(input => input.value)
      .filter(v => v.trim());

    let html = `
      <div class="modelo-curriculo">
        <div class="titulo">
          <h1>${nome.value}</h1>
        </div>
        <div class="info">
          <p><strong>Endereço:</strong> ${endereco.value}</p>
          <p><strong>Email:</strong> ${email.value}</p>
          <p><strong>Telefone:</strong> ${telefone.value}</p>
          <p><strong>Linkedin:</strong> ${linkedin.value}</p>
        </div>
        <div class="info">
          <h3>Sobre Mim</h3>
          <p>${sobre.value}</p>
        </div>
        <div class="info">
          <h3>Objetivo</h3>
          <p>${objetivo.value}</p>
        </div>`;

    if (formacoes.length) {
      html += `<div class="info"><h3>Formações Acadêmicas</h3><ul>`;
      formacoes.forEach(f => {
        html += `<li>${f}</li>`;
      });
      html += `</ul></div>`;
    }

    if (cursos.length) {
      html += `<div class="info"><h3>Cursos Complementares</h3><ul>`;
      cursos.forEach(c => {
        html += `<li>${c}</li>`;
      });
      html += `</ul></div>`;
    }

    html += `</div>`;

    curriculo.innerHTML = html;
    curriculo.style.display = 'block';
    popup.style.display = 'none';
  });

btnBaixar.addEventListener("click", () => {
  const element = document.querySelector('#curriculo .modelo-curriculo');
  if (!element) {
    alert("Você precisa criar o currículo antes de baixar.");
    return;
  }

  const opt = {
    margin: [0, 0, 0, 0], 
    filename: 'Meu_Curriculo.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 2,  
      logging: false,  
      useCORS: true  
    },
    jsPDF: { 
      unit: 'mm', 
      format: 'a4', 
      orientation: 'portrait',
      compressPDF: true,
      pageSize: 'A4',  
      hotfixes: ['pxScaling']  
    }
  };

  html2pdf().set(opt).from(element).save();
});




});
