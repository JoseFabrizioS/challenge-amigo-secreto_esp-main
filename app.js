// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Referencias al DOM
const input = document.getElementById('amigo');
const listaUl = document.getElementById('listaAmigos');
const resultadoUl = document.getElementById('resultado');

// Estado (como lo piden: let)
let amigos = [];

// Utilidades
function limpiarResultado() {
  resultadoUl.innerHTML = '';
}

function normalizar(s) {
  return s.trim().replace(/\s+/g, ' ');
}

function existeDuplicado(nombre) {
  const canon = nombre.toLowerCase();
  return amigos.some(a => a.toLowerCase() === canon);
}

// Pinta la lista usando for + createElement + appendChild
function renderLista() {
  listaUl.innerHTML = '';
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listaUl.appendChild(li);
  }
}

// Agregar amigo (con validaciones y mensaje exacto)
function agregarAmigo() {
  limpiarResultado();
  let nombre = normalizar(input.value);

  if (!nombre) {
    alert('Por favor, inserte un nombre.');
    input.focus();
    return;
  }

  // Solo letras y espacios (incluye acentos y ñ)
  const soloLetras = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/;
  if (!soloLetras.test(nombre)) {
    alert('Solo se permiten letras y espacios.');
    input.focus();
    return;
  }

  if (existeDuplicado(nombre)) {
    alert('Ese nombre ya fue agregado.');
    input.focus();
    return;
  }

  amigos.push(nombre);
  renderLista();
  input.value = '';
  input.focus();
}

// Sorteo con innerHTML
function sortearAmigo() {
  limpiarResultado();

  if (amigos.length === 0) {
    alert('Por favor, inserte un nombre.');
    input.focus();
    return;
  }

  const idx = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[idx];

  // Mostrar resultado con innerHTML (como piden)
  resultadoUl.innerHTML = `<li>🎉 Tu amigo secreto es: ${ganador}</li>`;
}

// UX: Enter para agregar rápidamente
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    agregarAmigo();
  }
});
