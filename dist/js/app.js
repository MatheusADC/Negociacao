// alert('oi');

import { Negociacao } from './models/negociacao.js';

const negociacao = new Negociacao(new Date(), 10, 100);
// negociacao.data = 'teste';
console.log(negociacao.data);
console.log(negociacao.volume);
// console.log(negociacao);
// negociacao.quantidade = 1000;
// console.log(negociacao);