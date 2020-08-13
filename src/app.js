import { getAllCars, addCarToGarage } from './garage_api';


// Executar a funcao de pegar todos da garagem quando a pagina carrega
getAllCars();

// ============== OS 4 PASSOS SAGRADOS DO EVENT LISTENER ==============
// 1. pegar o elemento que vai sofrer a acao
const form = document.getElementById('new-car');

// 2. escolher qual acao iremos prestar atencao
const action = 'submit';

// 3. escrever o codigo que vai rodar quando a acao acontecer
// addCarToGarage vindo do garage_api.js

// 4. juntar tudo com 'addEventListener'
form.addEventListener(action, addCarToGarage);
// ====================================================================
